import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {    // Arrow function 

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login />}> </Route>  
            </Routes>
        </Router>
    </div>
  )

}

export default App ;