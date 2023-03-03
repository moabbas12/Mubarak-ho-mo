import "bootstrap/dist/css/bootstrap.min.css" 
import { Router } from "react-router-dom";
import './App.css';
import House from "./components/House"
import Background from "./pages/Background";
import Input from "./components/Input";
import Pics from "./components/Pics";
import Focus from "./components/Focus";
import Test from "./components/Test";
import Latest from "./components/Latest"
import Footer from "./components/Footer"
import Home2  from "./pages/Home2";
import Kulsoom from "./pages/Kulsoom";
import Pop from "./components/Pop"
import { Route , Routes} from "react-router-dom"

function App() {
  return (
<>

<Routes>
  <Route path="/" element={<Background/>} />

  <Route path="/service" element={<Home2/>} />
  <Route path="/last" element={<Kulsoom/>} />

</Routes>
{/* <Background/>

<Home2/>
<Kulsoom/> */}

</>

  );
}

export default App;
