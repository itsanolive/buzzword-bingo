/**
 * @name web/routes/play.jsx
 * @description This is where we play bingo!
 */

import { useFindMany } from "@gadgetinc/react";
import { useState, useEffect } from "react";
import { api } from "../api"
import BingoGrid from "../components/bingo-grid"

export default function () {
  const [buzzwords, setBuzzwords] = useState([]);
  const [{
    data: buzzwordSubmissions,
    fetching: isLoading,
    error: isError
  }] = useFindMany(api.buzzwordSubmission, {
    // filter: {
    //   approved: { equals: true }
    // },
    select: {
      value: true,
      id: true,
      approved: true
    }
  })
  const shuffledBuzzwords = buzzArr => {
    let currentIndex = buzzArr.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(
        Math.random() * currentIndex,
      )
      currentIndex -= 1
      // console.log(array, currentIndex)

      // And swap it with the current element.
      temporaryValue = buzzArr[currentIndex]
      buzzArr[currentIndex] = buzzArr[randomIndex]
      buzzArr[randomIndex] = temporaryValue
    }
    return buzzArr.slice(0, 25)
  }

  // use effect to shuffle and filter buzzwords to render in the grid
  useEffect(() => {
    if (isLoading || !buzzwordSubmissions?.length) return
    const fetchRecords = async () => {
      let allRecords = [...buzzwordSubmissions]
      while (buzzwordSubmissions.hasNextPage) {
        const records = await buzzwordSubmissions.nextPage()
        allRecords = [...allRecords, ...records]
      }
      setBuzzwords(shuffledBuzzwords(allRecords))
    }
    fetchRecords()
  }, [buzzwordSubmissions])

  const refreshPage = () => {
    window.location.reload(false);
  }

  return buzzwords ? (
    <div id="bingo-container" className="w-full p-1 md:px-2 md:py-10">
      <section id="bingo" className="container max-w-screen-md p-1 mx-auto md:p-2">
        <BingoGrid buzzwords={buzzwords} />
        <button className="p-4 text-lg font-bold text-gray-900 bg-green-300 rounded disabled:opacity-50" onClick={refreshPage}>Reset & Shuffle</button>
      </section>
    </div>
  ) : (
    <div className="w-full p-1 md:px-2 md:py-10">
      <section className="container max-w-screen-md p-1 mx-auto md:p-2">
        <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
      </section>
    </div>
  )
}
