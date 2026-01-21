import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { injectSpeedInsights } from "@vercel/speed-insights";
import routes from "./routes/index";
import "./index.css";

injectSpeedInsights();

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />,
);
