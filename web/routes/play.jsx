/**
 * @name web/routes/play.jsx
 * @description This is where we play bingo!
 */

import { useFindMany, useUser } from "@gadgetinc/react";
import { useState, useEffect } from "react";
import { api } from "../api"
import BingoGrid from "../components/bingo-grid"

export default function () {
  const [buzzwords, setBuzzwords] = useState([]);
  const user = useUser();
  const [{
    data: buzzwordSubmissions,
    fetching: isLoading,
    error: isError
  }] = useFindMany(api.buzzwordSubmission, {
    select: {
      submittedBy: {
        id: true
      },
      value: true,
      id: true,
      approved: true,
      public: true
    }
  })

  // use effect to shuffle and filter buzzwords to render in the grid
  useEffect(() => {
    if (isLoading || !buzzwordSubmissions?.length) return
    const fetchRecords = async () => {
      let allRecords = [...buzzwordSubmissions]
      while (buzzwordSubmissions.hasNextPage) {
        const records = await buzzwordSubmissions.nextPage()
        allRecords = [...allRecords, ...records]
      }
      setBuzzwords(allRecords)
    }
    fetchRecords()
  }, [buzzwordSubmissions])

  // 

  return isLoading ? (
    <div className="w-full p-1 md:px-2 md:py-10">
      <section className="container max-w-screen-md p-1 mx-auto md:p-2">
        <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
      </section>
    </div>
  ) : (
    <>
      {user && (
        <div className="w-full p-1 md:px-2">
          <section className="container max-w-screen-md p-1 mx-auto md:p-2">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Bingo Board</h1>
              <div className="flex items-center gap-2">
                <label htmlFor="useOwnSubmissions" className="text-sm text-gray-700">
                  Use only my submissions
                </label>
                <input
                  type="checkbox"
                  id="useOwnSubmissions"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBuzzwords(buzzwordSubmissions.filter(b => b.submittedBy?.id === user?.id))
                    } else {
                      setBuzzwords(buzzwordSubmissions)
                    }
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      )}
      <div id="bingo-container" className="w-full p-1 md:px-2 md:py-10">
        <section id="bingo" className="container max-w-screen-md p-1 mx-auto md:p-2">
          <BingoGrid buzzwords={buzzwords} />
        </section>
      </div>
    </>
  )
}
