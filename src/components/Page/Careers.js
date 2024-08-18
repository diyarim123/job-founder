import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {

    const careersData = useLoaderData();

  return (
    <div className="careers">
      {careersData.map(career => {
        return (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>{career.location}</p>
            </Link>
        )
      })}
    </div>
  )
}

//Loader Function

export const careersLoader = async() => {
    const response = await fetch("http://localhost:3000/careers");

    if(!response.ok) {
      throw new Error("Couldn't fetch careers")
    }

    return response.json();
}


