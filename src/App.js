
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
// import Home from "../Home";
// import Error from "../Error";
import Profile from "./components/Profile/Profile";
import Tablelayout from "./components/Tablelayout/Tableform"
import Leaflet from "./components/Leaflet/Leafletmap"
import { Table } from "@mui/material";
import { LayersOutlined } from "@mui/icons-material";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage"

const App= () => {
// export default function Content(props) {
  // const NagaPage = lazy(() => import("../Naga"));
  const [title, setTitle] = useState("");

  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTitle(data?.title);
        setCompleted(data?.id);
        console.log(data?.id);
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={<Home toogleTheme={props.toogleTheme} theme={props.theme} />}
        > */}
          <Route path="/" index="true" element={<Profile title={title} />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="/table" element={<Tablelayout />} />
          <Route path="/leaflet" element={<Leaflet />} />
          <Route path="/table" element={<Table />} />
          <Route path="/home" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfilePage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Content />);
