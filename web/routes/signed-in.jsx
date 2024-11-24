import { useUser, useSignOut } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";
import userIcon from "../assets/default-user-icon.svg";
import { Link } from "react-router-dom";

export default function () {
  const user = useUser(api);
  const signOut = useSignOut();

  return user ? (
    <>
      <div className="app-link">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <span>You are now signed into {process.env.GADGET_PUBLIC_APP_SLUG} </span>
      </div>
      <div className="card-stack">
        <div className="card user-card">
          <div className="card-content">
            <img className="icon" src={user.googleImageUrl ?? userIcon}/>
            <div className="userData">
              <p>
                name: {user.firstName} {user.lastName}
              </p>
              <p>
                email: <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-vertical gap-4px">
          <strong>Actions:</strong>
          <Link to="/submit-buzzwords" className="px-4 py-2 text-white bg-teal-800 rounded-lg hover:bg-teal-700">Submit Buzzwords</Link>
          {/* depending on the authentication provider, the user may not have a password */}
          {user.password && (
            <Link to="/change-password">Change password</Link>
          )}
          <button onClick={signOut} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
            Sign Out
          </button>
        </div>
      </div>
      {user.admin && (
        <div className="flex-vertical gap-4px">
          <strong>Admin Actions:</strong>
          <Link to="/admin/review-buzzword-submissions">Review Buzzword Submissions</Link>
        </div>
      )}
    </>
  ) : null;
}
