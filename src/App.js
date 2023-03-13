import { GlobalStyle } from "./utils/Global";
import {
  BrowserRouter,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { Product } from "./components/product/Product";
import { getAllProducts, GetAllProducts } from "./services/ServiceWorker";
import { useEffect, useState } from "react";
import { AuthenticationPage } from "./pages/AuthenticationPage";
import { Login } from "./components/authentication/Login";
import { Cart } from "./components/cart/Cart";
import { Order } from "./components/order/Order";
import { Footer } from "./components/footer/Footer";
import { SignUp } from "./components/authentication/SignUp";
import { Seller } from "./components/seller/Seller";
import toast, { Toaster } from "react-hot-toast";
import { Customer } from "./components/profile/Customer";
import { NotFound } from "./pages/NotFound";
import { InternalServer } from "./pages/InternalServer";

export const getProducts = async (e) => {
  const response = await getAllProducts();

  if (response == "Network Error") {
    console.log("ii");
    return "Network Error";
  } else {
    return response.data;
  }
};

function App() {
  const [products, setProducts] = useState();
  const [productsFull, setProductsFull] = useState();
  const [networkerror, setNetworkError] = useState(false);
  var user = localStorage.getItem("user");
  var userid = localStorage.getItem("userid");
  var isSeller = JSON.parse(localStorage.getItem("seller"));
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    async function getData() {
      await getProducts().then((res) => {
        if (res == "Network Error") {
          setNetworkError(true);
        } else {
          setProducts(res);
          setProductsFull(res);
        }
      });
    }
    getData();
    console.log(products);
    setExtra((old) => old + 1);
  }, []);

  useEffect(() => {
    user = localStorage.getItem("user");
    userid = localStorage.getItem("userid");
    isSeller = localStorage.getItem("seller");
  }, [extra]);

  console.log(networkerror);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Toaster />

        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          {networkerror ? (
            <Route
              path="/products"
              networkerror={networkerror}
              element={<InternalServer />}
            />
          ) : (
            <Route
              path="/products"
              networkerror={networkerror}
              element={
                <ProductsPage
                  productsFull={productsFull}
                  setProducts={setProducts}
                  products={products}
                />
              }
            />
          )}
          <Route
            path="/products/:id/:ids"
            element={
              <Product
                productsFull={productsFull}
                setProducts={setProducts}
                products={products}
              />
            }
          />
          <Route path="/authenticate" element={<AuthenticationPage />} />
          <Route path="/authenticate/:usertype/signup" element={<SignUp />} />
          <Route path="/authenticate/:usertype/login" element={<Login />} />
          <Route
            path="/authenticated/:user/cart"
            element={<Cart products={products} />}
          />
          <Route
            path="/authenticated/:user/order"
            element={<Order products={products} />}
          />
          <Route
            path="/authenticated/seller/:user"
            element={<Seller setProducts={setProducts} products={products} />}
          />
          <Route path="/authenticated/customer/:user" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
