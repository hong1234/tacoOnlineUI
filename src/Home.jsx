import { Link } from 'react-router';

export default function Home() {
  return (
    <>
      <h1 className="font-heading text-2xl font-bold">Welcome to BanhMy</h1>
      <br />
      <Link to="/taco">
        <button
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
        >
          let make your BanhMy
        </button>
      </Link>
    </>
  );
}
