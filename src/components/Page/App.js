import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "../../index.css"

// Imported Pages
import Home from "./Home";
import About from "./About";
import Faq from "../HelpLayout/Faq";
import Contact, { contactAction } from "../HelpLayout/Contact";
import NotFound from "./NotFound";
import Careers, { careersLoader } from "./Careers";
import CareerError from "./CareerError";
import CareerDetail, { careerDetailsLoader } from "./CareerDetail";


//imported Layouts
import RootLayout from "../Layouts/RootLayout";
import HelpLayout from "../Layouts/HelpLayout";
import CareerLayout from "../Layouts/CareerLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route exact index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareerLayout />}  errorElement={<CareerError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader} 
        />
        <Route
          path=":id"
          element={<CareerDetail />}
          loader={careerDetailsLoader} 
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
