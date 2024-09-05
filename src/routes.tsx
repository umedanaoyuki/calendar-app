import { createBrowserRouter } from "react-router-dom";
import TopPage from "./components/pages/TopPage";
import { LoginPage } from "./pages/LoginPage";
import { NotLoginLayout } from "./components/templates/NotLoginLayout";
import { CalendarPage } from "./pages/CalendarPage";
import { LoginLayout } from "./components/templates/LoginLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotLoginLayout />,
    children: [
      { path: "/", element: <TopPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
    ],
  },
]);
