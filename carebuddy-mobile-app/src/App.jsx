
import './App.css';
import CarebuddyOnbording from './CarebuddyOnbording.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage.jsx";

function App () {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<CarebuddyOnbording></CarebuddyOnbording>} />
      <Route path="/register" element={<RegistrationPage></RegistrationPage>} />
    </Routes>
  </Router>
  )
}

export default App;