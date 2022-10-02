import { Route, Routes } from "react-router-dom";
import AllTrip from "./components/AllTrip";
import DropDown from "./components/DropDown";
import Home from "./components/Home";
import NotifyOperator from "./components/NotifyOperator";
import CongratesPage from "./components/CongratesPage";

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
      <Route path="/all-trip" element={<AllTrip/>}/>
      <Route path="/congrates-page" element={<CongratesPage/>}/>
      <Route path="/notify-operator" element={<NotifyOperator/>}/>
    </Routes>
    
    </>
  );
}

export default App;
