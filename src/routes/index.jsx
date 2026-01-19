import { createBrowserRouter } from "react-router";
import App from "@/App.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default routes;
