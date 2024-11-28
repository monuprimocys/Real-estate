import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import routesConfig from "./routesConfig.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routesConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </>
  )
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
