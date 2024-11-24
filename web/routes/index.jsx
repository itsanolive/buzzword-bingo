import reactLogo from "../assets/react-logo.svg";
import { useFindMany } from "@gadgetinc/react";
import { useState } from "react";

export default function () {
  // get buzzwords from general submissions gadget records, paginating as necessary
  const [buzzwords, setBuzzwords] = useState([]);
  const { data: buzzwordSubmissions, isLoading, isError } = useFindMany('buzzwordSubmission', {
    filter: {
      approved: { equals: true }
    },
    select: {
      value: true,
      id: true
    }
  })

  return (
    <>
      <div className="app-link">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <span>You are now signed out of {process.env.GADGET_PUBLIC_APP_SLUG} &nbsp;</span>
      </div>
      <div>
        <p className="description">Start building your app&apos;s signed out area</p>
        <a href="/edit/files/frontend/routes/index.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          frontend/routes/index.jsx
        </a>
      </div>
    </>
  );
}
