// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Outlet, Routes, Route, Link } from 'react-router';
// import { Header } from "./Header";
// import { MyForm } from "./MyForm";
// import Detail from "./Detail";
import Taco from './Taco';
import Order from './Order';
import OrderForm from './OrderForm';
import Cart from './Cart';

function Home() {
  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Welcome to BanhMy</h1>
      <br />
      <Link to="/taco">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
        >
          make your first BanhMy
        </button>
      </Link>
    </>
  );
}

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header />
      <Outlet /> */}
      <header className="bg-blue-500 p-4">
        <nav className="items-center justify-between p-2 font-bold text-white">
          <Link to="/">Home</Link> | <Link to="/taco">BanhMy</Link> | <Link to="/cart">Cart</Link>
          {/* <Link to="/order/1">Order</Link> | <Link to="/form">Form</Link> */}
        </nav>
      </header>
      <main className="flex-grow p-4">
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
      </main>
      <footer className="bg-gray-300 p-4">Tommy Co Ltd</footer>
    </div>
  );
}

export default App;
