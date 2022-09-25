import { Route, Routes } from "react-router-dom";
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
    </Routes>
    
    </>
  );
}

export default App;
