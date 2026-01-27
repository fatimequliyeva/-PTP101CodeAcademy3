import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";  // her bir jsxmi import elemisem appi cox yuklememsem 
import Welcome from "./components/Welcome";
import Product from "./components/Product";
import "./App.css"; //cssdi 

function App() {
  const [isLogged, setIsLogged] = useState(false);  //vezyetid eyisen funksiyadi ve ilk once gorsenmisin deye evevlce false vermsiem
  


  //esas konteynrm sert vermsiem eger logine basilisbsa welcome mesajini ve alzimi mmeluamti ekrana yansit gosder eks alda false deyer 
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
