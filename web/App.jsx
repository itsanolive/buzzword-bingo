import { SignedInOrRedirect, SignedOut, SignedOutOrRedirect, Provider } from "@gadgetinc/react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link  } from "react-router-dom";
import "./App.css";
import { api } from "./api";
import Index from "./routes/index";
import SignedInPage from "./routes/signed-in";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import ResetPasswordPage from "./routes/reset-password";
import VerifyEmailPage from "./routes/verify-email";
import ChangePassword from "./routes/change-password";
import ForgotPassword from "./routes/forgot-password";
import ReviewSubmissions from "./routes/admin/review-buzzword-submissions";
import SubmitBuzzwords from "./routes/submit-buzzwords";
import Terms from "./routes/policies/terms";
import Privacy from "./routes/policies/privacy";
import Play from './routes/play';

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="play"
          element={
            <Play />
          }
        />
        <Route
          path="change-password"
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="forgot-password"
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-up"
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="reset-password"
          element={
            <ResetPasswordPage />
          }
        />
        <Route
          path="verify-email"
          element={
            <VerifyEmailPage />
          }
        />
        <Route
          path="admin/review-buzzword-submissions"
          element={
            <ReviewSubmissions />
          }
        />
        <Route
          path="submit-buzzwords"
          element={
            <SubmitBuzzwords />
          }
        />
        <Route path="policies/terms" element={<Terms />} />
        <Route path="policies/privacy" element={<Privacy />} />
      </Route>
    )
  );

  return (
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider api={api} navigate={navigate} auth={window.gadgetConfig.authentication}>
      <Header />
      <div className="flex-grow p-2 app md:p-4">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </Provider>
  );
};

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b header">
      <a href="/" target="_self" rel="noreferrer" style={{ textDecoration: "none" }}>
        <div className="logo">{process.env.GADGET_PUBLIC_APP_SLUG}</div>
      </a>
      <div className="header-content">
        <SignedOut>
          <Link to="/sign-in" style={{ color:"black" }}>Sign in</Link>
          <Link to="/sign-up" style={{ color: "black" }}>Sign up</Link>
        </SignedOut>
        <Link to="/play" className="px-4 py-2 text-white uppercase bg-teal-800 rounded-lg hover:bg-teal-700">Play!</Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center gap-4 p-4 text-sm text-gray-600 bg-white border-t">
      <Link to="/policies/terms">Terms of Service</Link>
      <Link to="/policies/privacy">Privacy Policy</Link>
    </div>
  );
};


export default App;
