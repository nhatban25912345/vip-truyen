import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./layout/error-page/error-page";
import LayoutFull from "./layout/layout-full/layout-full";
import HomePage from "./components/home/home";
import DanhSachPage from "./components/danh-sach/danh-sach";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutFull />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: 'danh-sach',
        element: <DanhSachPage />
      }
    ]
  },
]);

export default router;