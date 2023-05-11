import { useRouteError, Link } from "react-router-dom"

export default function CareerError() {

    const error = useRouteError();

  return (
    <div className="notFound">
      <h1>ERROR</h1>
      <p>{error.message}</p>
      <Link to="/">
        <button>Back to <strong>Home</strong> page</button>
      </Link>
    </div>
  )
}

