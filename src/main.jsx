import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes/index.jsx";
import { createRenderer } from "fela";
import { RendererProvider as RenderFelaProvider } from "react-fela";

const render = createRenderer();

createRoot(document.getElementById("root")).render(
  <RenderFelaProvider renderer={render}>
    <RouterProvider router={routes} />
  </RenderFelaProvider>
);
