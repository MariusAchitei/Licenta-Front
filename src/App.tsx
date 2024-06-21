import { lazy, Suspense } from "react";
import ThemedSuspense from "./components/ThemedSuspense";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "containers/Layout";

import routes from "routes";

// const Layout = lazy(() => import("containers/Layout"));
const Login = lazy(() => import("pages/Login"));
const CreateAccount = lazy(() => import("pages/CreateAccount"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));
const Page404 = lazy(() => import("pages/404"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route element={<Layout />}>
        {routes.map((route, i) => {
          return route.component ? (
            <Route
              key={i}
              path={`app${route.path}`}
              element={<route.component />}
            />
          ) : null;
        })}
      </Route>
      <Route path="*" element={<Page404 />} />
    </>,
  ),
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
