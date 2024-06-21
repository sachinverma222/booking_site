import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Bookingform from "./Component/Bookingform";
// import Navbar from "./Component/Navbar";

function App() {

  return (
    <>
     <Router>
      <Routes>
       <Route path="/Signup"element={<Signup/>}/>
       <Route path="/Signin"element={<Signin/>}/>
       <Route path="/Bookingform"element={<Bookingform/>}/>
       </Routes>
     </Router>
    </>
  );
}

export default App;
