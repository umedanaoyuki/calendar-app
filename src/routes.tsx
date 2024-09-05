import { createBrowserRouter } from "react-router-dom";
import TopPage from "./components/pages/TopPage";
import { LoginPage } from "./pages/LoginPage";
import { NotLoginLayout } from "./components/templates/NotLoginLayout";
import { CalendarPage } from "./pages/CalendarPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotLoginLayout />,
    children: [
      { path: "/", element: <TopPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/calendar", element: <CalendarPage /> },
    ],
  },
]);
