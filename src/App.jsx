//instead of react-router-dom (React Router in v.19 of React) we use tanstack-router for routing

import "./App.css";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  lazyRouteComponent,
} from "@tanstack/react-router";
import Layout from "./Components/Layout/Layout";

import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

//3shan atba2 ellazy loading // y3ny elcomponent msh hy7mel awl  aft7 elproject => hy7ml bs lw ft7to w da byshl elbundling
const Home = lazyRouteComponent(() => import("./Pages/Home/Home"));
const About = lazyRouteComponent(() => import("./Pages/About/About"));
const Products = lazyRouteComponent(() => import("./Pages/Products/Products"));
const Cart = lazyRouteComponent(() => import("./Pages/Cart/Cart"));

// b create elroot elly howa layout elly h3rd gowah elchildren
const rootRoute = createRootRoute({
  // component: Layout,

  component: () => (
    <>
      <Layout />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
});

// habda2 acreate elroutes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});

// b3d ma acreate elroutes b3ml routeTree => 3n taree2 en ana a7ot kol elchildren gowa el layout
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  productsRoute,
  cartRoute,
]);

//a5er step ba create el router 3shan a pass it l el RouterProvider  inside App
const router = createRouter({ routeTree });

function App() {
  console.log("DEV mode:", import.meta.env.DEV);

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
