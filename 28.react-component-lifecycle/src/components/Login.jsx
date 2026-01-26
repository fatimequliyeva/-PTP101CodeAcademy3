function Login({ setIsLogged }) {
  return (
    <button className="login-btn" onClick={() => setIsLogged(true)}>
      Login
    </button>
  );
}

export default Login;
