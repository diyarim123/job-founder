import { Outlet } from "react-router-dom"

export default function CareerLayout() {
  return (
    <div>
      

        <h2>Careers</h2>
        <p>Find new jobs daily!</p>

        <div>
            <Outlet />
        </div>

    </div>
  )
}
