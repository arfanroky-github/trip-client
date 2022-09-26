import { Route, Routes } from "react-router-dom";
import DropDown from "./components/DropDown";
import Home from "./components/Home";
import TripRequest from "./components/TripRequest";
import UserModel from "./components/UserModel";

function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/user-model" element={<UserModel/>}/>
      <Route path="/trip-request" element={<TripRequest/>}/>
      <Route path="/drop-down" element={<DropDown/>}/>
    </Routes>
    
    </>
  );
}

export default App;
