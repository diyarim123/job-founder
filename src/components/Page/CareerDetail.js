import { useLoaderData, useParams } from "react-router-dom";


export default function CareerDetail() {
    const CareerDetailData = useLoaderData();


  return (
    <div className="career-details">
        <h2>{CareerDetailData.title}</h2>
        <p>Starting Salary:  <strong>{CareerDetailData.salary}</strong></p>
        <p>Location: {CareerDetailData.location}</p>
        <p>{CareerDetailData.detail}</p>
    </div>
  )
}

// loader function
export const careerDetailsLoader = async ({params}) => {
    const { id } = params;

    const response = await fetch("http://localhost:3000/careers/" + id);

    if(!response.ok) {
      throw new Error("Couldn't find that career")
    }

    return response.json();
}


