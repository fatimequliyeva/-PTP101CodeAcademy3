function Logout({ setIsLogged }) {
  return (
    <button 
      className="logout-btn" 
      onClick={() => setIsLogged(false)}
    >
      Logout
    </button>
  );
}

export default Logout;
