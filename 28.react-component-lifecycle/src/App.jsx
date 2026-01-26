import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="app-container">

      {!isLogged ? (
        <div className="login-section">
          <Login setIsLogged={setIsLogged} />
        </div>
      ) : (
    
        <div className="product-container">
          <Welcome />
          <Logout setIsLogged={setIsLogged} />
          <Product />
        </div>
      )}
    </div>
  );
}

export default App;
