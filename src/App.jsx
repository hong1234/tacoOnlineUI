// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Outlet, Routes, Route, Link } from "react-router";
// import { Header } from "./Header";
// import { MyForm } from "./MyForm";
// import Detail from "./Detail";
import { Taco } from "./Taco";
import Order from "./Order";
import { OrderForm } from "./OrderForm";
import Cart from "./Cart";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header />
      <Outlet /> */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/taco">Taco</Link> |{" "}
        <Link to="/cart">Cart</Link>
        {/* <Link to="/order/1">Order</Link> | <Link to="/form">Form</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taco" element={<Taco />} />
        {/* <Route path="/taco/:tacoId" element={<Detail />} /> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/cart/:cartId" element={<Cart />} /> */}
        <Route path="/order" element={<OrderForm />} />
        <Route path="/order/:orderId" element={<Order />} />
        {/* <Route path="/form" element={<MyForm />} /> */}
      </Routes>
    </>
  );
}

export default App;
