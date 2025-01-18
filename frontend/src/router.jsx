import { createBrowserRouter } from "react-router-dom";
import Alldata from "./components/Alldata";
import Inputdata from "./components/Inputdata";
import Editdata from "./components/Editdata";
import Deletedata from "./components/Deletedata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Alldata />,
  },
  {
    path: "/:id",
    element: <Editdata />,
  },
  {
    path: "/input",
    element: <Inputdata />,
  },
  {
    path: "/delete/:id",
    element: <Deletedata />,
  },
]);
