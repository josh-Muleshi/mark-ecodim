import { Typography, Card } from "@material-tailwind/react";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login.js";
import Write from "./components/home/Write.js";

import { useCookies } from "react-cookie";
// import { DocumentProf } from "./components/ongletProf/DocumentProf";
// import { VideoProf } from "./components/ongletProf/VideoProf";

// import FormAdd from "./components/professeur/FormAdd";


const Layout = () => {
  return (
    <>
      <div>Show</div>
      <Outlet />
    </>
  )
}

const OutletCompoenent = ({name}) => {
  return (
    <>
      <h1>Mon Outlet</h1>
      <h2>{name}</h2>
    </>
  )
}

/*

  Descrition du code : 
    ce code est le code principale de l'application, il contient les routes de l'application
    et les composants qui seront affichés dans les routes 
    alors pour chaque route on a un composant qui sera affiché dans la route
 */
export default function App() {
  const [cookies, setCookies, removeCookies] = useCookies();

  console.log(cookies);
  return (
    <>
      <Router>
        <Routes>
          {
            (false) ? (
              <Route path="/" element={<Write />} />
              // <Route path="/" element={<DashboardProf />}>
              //   <Route index element={<Cours />} /> 
              //   <Route path="cours" element={<OutletCompoenent name="Public" />} />
              //   <Route path="documents" element={<DocumentProf />} />
              //   <Route path="videos" element={<VideoProf />} />
              //   <Route path="logiciels" element={<LogicielProf />} />

              //   <Route path="CoursDesc/:id" element={< CoursDesc />} />
              // </Route>
              
            ): (
              <Route path="/" element={<Login />} />
            )
          }
        </Routes>
      </Router>
    </>
  );
}