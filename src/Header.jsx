import { Link, NavLink } from "react-router";
// import { useContext } from "react";
// import { AppContext } from "./AppContext";
// import Login from "./pages/Login";

export function Header() {
  // const { state } = useContext(AppContext);
  // console.log("header rendering ..");
  return (
    <header className="">
      {/* <h1 className="text-2xl">React App</h1> */}
      {/* <nav>
        <Link
          to=""
          className="text-white no-underline p-1"
        >Home
        </Link>
        <Link
          to="products"
          className="text-white no-underline p-1"
        >| Products
        </Link>
      </nav> */}
      {/* <nav> 
        <NavLink
          to=""
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
      </nav> */}
      {/* <h4 className="bg-primary text-white text-center p-2"> */}

      <h4 className="bg-primary text-white p-2">H-Shop</h4>
      <Link to="">
        <button type="button" className="btn btn-secondary">
          Home
        </button>
      </Link>
      <Link to="/shop/products">
        <button type="button" className="btn btn-secondary">
          Shopping
        </button>
      </Link>
      <Link to="/admin/new">
        <button type="button" className="btn btn-secondary">
          Admin
        </button>
      </Link>
    </header>
  );
}

// export default Header;
