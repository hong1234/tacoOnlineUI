// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Outlet, Routes, Route, Link } from "react-router";
// import { Header } from "./Header";
import { Taco } from "./Taco";
import { MyForm } from "./MyForm";
import Order from "./Order";
import Detail from "./Detail";

function Home() {
  return <h3>Home</h3>;
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header />
      <Outlet /> */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/taco">Taco</Link> |{" "}
        <Link to="/order/1">Order</Link> | <Link to="/form">Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taco" element={<Taco />} />
        <Route path="/taco/:tacoId" element={<Detail />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="/form" element={<MyForm />} />
      </Routes>
    </>
  );
}

export default App;
