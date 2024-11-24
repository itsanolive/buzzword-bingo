import { useUser, useAction, useFindMany } from "@gadgetinc/react";
import { api } from "../api"
import { useCallback, useState } from "react";

export default function () {
  const [publicBuzzword, setPublicBuzzword] = useState(true);
  const user = useUser();
  const [{data, fetching, error}, create] = useAction(api.buzzwordSubmission.create);

  const [{
    data: userBuzzwordSubmissions,
    fetching: userBuzzwordSubmissionsLoading,
    error: userBuzzwordSubmissionsError
  }, refresh] = useFindMany(api.buzzwordSubmission, {
    filters: { submittedBy: user?.id },
    select: {
      value: true,
      id: true,
      approved: true
    }
  })

  const handleCheckboxChange = useCallback((event) => { // Add this function
    setPublicBuzzword(event.target.checked);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const buzzwordValue = formData.get('buzzword');
    const group = 1;
    const value = {}
    value.value = buzzwordValue;
    value.submittedBy = {
      _link: user?.id
    };
    if (publicBuzzword) {
      value.public = publicBuzzword;
      value.group = {
        _link: group
      }
    }

    console.log(value)

    await create(value);
    console.log({ data, error })
    refresh()
    event.target.reset();
  }, [create, user.id]);

  console.log({ userBuzzwordSubmissions })

  return (
    <>
      <div className="w-full">
        <h1 className="text-xl font-semibold mb-4">Submit a Buzzword</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="hidden" htmlFor="buzzword">Enter a new buzzword:</label>
            <input className="border rounded p-2 w-full" type="text" id="buzzword" name="buzzword" required placeholder="Enter a new buzzword" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="public" name="public" checked={publicBuzzword} onChange={handleCheckboxChange} />
            <label htmlFor="public">Make this buzzword public</label>
          </div>
          <button className="bg-teal-800 text-white uppercase rounded-lg px-4 py-2 w-full" type="submit" disabled={fetching}>Submit</button>
        </form>
      </div>
      {userBuzzwordSubmissions && (
          <div className="w-full border-t mt-8 pt-4">
            <h2 className="text-xl font-semibold mb-4">Your Buzzword Submissions</h2>
            <div className="grid grid-cols-3">
              <div className="font-semibold border-b">Buzzword</div>
              <div className="font-semibold border-b">Approved</div>
              <div className="font-semibold border-b">Group</div>
              {userBuzzwordSubmissions.map((submission) => (
                <>
                  <div className="border-b border-gray-200">{submission.value}</div>
                  <div className="border-b border-gray-200">{submission.approved ? 'Yes' : 'No'}</div>
                  <div className="border-b border-gray-200">{submission.group?.name}</div>
                </>
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}
