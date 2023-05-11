import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>That page you're looking for doesn't exist</p>
      <Link to="/">
        <button>Back to <strong>Home</strong> page</button>
      </Link>
    </div>
  );
}
