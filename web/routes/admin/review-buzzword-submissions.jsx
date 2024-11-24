import { useUser, useFindMany } from "@gadgetinc/react";
import { useState, useEffect, useCallback } from "react";
import { api } from "../../api";

export default function() {
  const [selected, setSelected] = useState([]);
  const user = useUser();
  const [unapprovedBuzzwords, setUnapprovedBuzzwords] = useState([]);

  const [{
    data: buzzwords,
    fetching: buzzwordsLoading,
    error: buzzwordsError
  }, refresh] = useFindMany(api.buzzwordSubmission, {
    first: 250,
    select: {
      id: true,
      approved: true,
      value: true,
      submittedBy: {
        id: true,
        email: true
      }
    },
    filter: {
      approved: { notEquals: true }
    },
  });

  useEffect(() => {
    if (buzzwordsLoading || !buzzwords?.length) return
    const fetchRecords = async () => {
      let allRecords = [...buzzwords];

      // loop through additional pages to get all protected orders
      while (buzzwords.hasNextPage) {
        // paginate
        const records = await buzzwords.nextPage();
        allRecords = [...allRecords, ...records];
      }

      setUnapprovedBuzzwords(allRecords);
    };

    fetchRecords();
  }, [buzzwords])

  const handleApprove = async (buzzwordId) => {
    try {
      await api.buzzwordSubmission.update(buzzwordId, { approved: true });
      setUnapprovedBuzzwords(unapprovedBuzzwords.filter((b) => b.id !== buzzwordId));
    } catch (error) {
      console.error('Error approving buzzword:', error);
    }
  };

  const handleReject = async (buzzwordId) => {
    try {
      await api.buzzwordSubmission.delete(buzzwordId);
      setUnapprovedBuzzwords(unapprovedBuzzwords.filter((b) => b.id !== buzzwordId));
    } catch (error) {
      console.error('Error rejecting buzzword:', error);
    }
  };

  // submit the form and accept all records that are checked with a callback
  const handleBulkApprove = useCallback(async () => {
    console.log('Bulk approving buzzwords:', selected);
    try {
      await Promise.all(selected?.map(async (buzzword) => {
        console.log(buzzword);
        await api.buzzwordSubmission.update(buzzword, { approved: true });
        // resolve the promise
        return Promise.resolve();
      }));
      refresh();
    } catch (error) {
      console.error('Error approving buzzwords:', error);
    }
  }, [selected, refresh]);

  // submit the form and remove all records that are checked with a callback
  const handleBulkReject = useCallback(async () => {
    try {
      await Promise.all(selected?.map(async (buzzword) => {
        await api.buzzwordSubmission.delete(buzzword);
      }));
      refresh();
    } catch (error) {
      console.error('Error rejecting buzzwords:', error);
    }
  }, [selected, refresh]);

  const handleSelectAll = useCallback((event) => {
    setSelected(event.target.checked ? unapprovedBuzzwords.map((b) => b.id) : []);
  }, [unapprovedBuzzwords]);

  const handleSelectionChange = useCallback((event) => {
    const buzzwordId = event.target.value;
    console.log('Buzzword ID:', buzzwordId);
    if (event.target.checked) {
      console.log('Checkbox checked');
      setSelected([...selected, buzzwordId]);
    } else {
      console.log('Checkbox unchecked');
      setSelected(selected.filter((id) => id !== buzzwordId));
    }
  }, [selected]);

  useEffect(() => {
    console.log('Selected:', selected);
  }, [selected])

  const formActionsMarkup = selected.length > 0 ? (
    <div className="sticky bottom-0 bg-white px-4 py-3 shadow-lg flex gap-4 justify-center">
      <button className="rounded-lg px-4 py-2 bg-red-600 text-white" type="button" onClick={handleBulkReject}>
        Reject Selected
      </button>
      <button className="rounded-lg px-4 py-2 bg-teal-800 text-white" type="button" onClick={handleBulkApprove}>
        Approve Selected
      </button>
    </div>
  ) : null;


  if (!user.admin) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Review Buzzword Submissions</h1>
      <p>Here you can review buzzword submissions and approve or reject them.</p>
      {
        unapprovedBuzzwords.length > 0 ? (
        <form>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">
                  {/* select all input */}
                    <input type="checkbox" onChange={handleSelectAll} />
                </th>
                <th>Buzzword</th>
                <th>Submitted By</th>
              </tr>
            </thead>
            <tbody>
              {unapprovedBuzzwords.map((buzzword) => (
                <tr key={buzzword.id}>
                  <td>
                    <input
                      type="checkbox"
                      value={buzzword.id}
                      checked={selected.includes(buzzword.id)}
                      onChange={handleSelectionChange}
                    />
                  </td>
                  <td>{buzzword.value}</td>
                  <td>{buzzword.submittedBy.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {formActionsMarkup}
        </form>
        ) : <p>No unapproved buzzword submissions</p>
      }
    </div>
  );
}
