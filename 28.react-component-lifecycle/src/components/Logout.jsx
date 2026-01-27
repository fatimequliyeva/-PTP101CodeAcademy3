function Logout({ setIsLogged }) {
  return (
    <button 
      className="logout-btn" 
      onClick={() => setIsLogged(false)}  //bunada false vermsiem logindekin eksi
    >
      Logout
    </button>
  );
}

export default Logout;
