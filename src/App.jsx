// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Outlet, Routes, Route, Link } from 'react-router';
// import { Header } from "./Header";
// import { MyForm } from "./MyForm";
import Home from './Home';
import Taco from './Taco';
import Order from './Order';
import OrderForm from './OrderForm';
import Cart from './Cart';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header />
      <Outlet /> */}
      <header className="bg-blue-500 p-4">
        <nav className="font-bold text-white">
          <Link to="/">Home</Link> &nbsp;&nbsp; <Link to="/taco">BanhMy</Link> &nbsp;&nbsp;{' '}
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <main className="grow p-4 text-justify">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taco" element={<Taco />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/order/:orderId" element={<Order />} />
        </Routes>
      </main>
      <footer className="bg-gray-300 p-4">Tommy Co Ltd</footer>
    </div>
  );
}

export default App;
