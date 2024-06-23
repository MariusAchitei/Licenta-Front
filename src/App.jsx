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
import { ChatBotComponent as ChatBot } from "components/ChatBot";
import { UserProvider } from "contexts/UserContext";
import ProtectedRoute from "components/ProtectedRoute";

// const Layout = lazy(() => import("containers/Layout"));
const Login = lazy(() => import("pages/Login"));
const CreateAccount = lazy(() => import("pages/CreateAccount"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));
const Page404 = lazy(() => import("pages/404"));
const PageUnauthorized = lazy(() => import("pages/PageUnauthorized"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="unauthorized" element={<PageUnauthorized />} />
      <Route element={<Layout />}>
        {routes.map((route, i) => {
          return route.component ? (
            <Route
              key={i}
              path={`app${route.path}`}
              element={
                <ProtectedRoute roles={route.roles} isPublic={route.public}>
                  <route.component />
                </ProtectedRoute>
              }
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
      <UserProvider>
        <RouterProvider router={router} />
        <ChatBot />
      </UserProvider>
    </>
  );
}

export default App;
