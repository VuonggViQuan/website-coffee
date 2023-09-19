import Cart from "./components/Cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "product", component: <Product /> },
  { path: "cart", component: <Cart /> },
  { path: "checkout", component: <Checkout /> },
  { path: "contact", component: <Contact /> },
  { path: "about", component: <About /> },
  { path: "login", component: <Login /> },
  { path: "register", component: <Register /> },
];
export default routes;
