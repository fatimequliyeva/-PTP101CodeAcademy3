function Login({ setIsLogged }) {  //destrng edib goturmusem props kimi
  return (
    <button className="login-btn" onClick={() => setIsLogged(true)}> 
      Login
    </button>  //tooqle mentiqidi 
  );
}

export default Login;
