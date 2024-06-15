import './login.css'
const Login = () => {
    return ( 
        <>
        <div className={"login"}>
            <h1>LOGIN</h1>
            <h2>User Name</h2>
            <input type="text"></input>
            <h2>Password</h2>
            <input type="password" minLength={8}></input><br/><br/>
            <a href="#" id="forgot">forgot password?</a>
            <br/><br/>
            <input type="submit"></input>
            <p>New to our app?<a href="register"> click here </a>to register </p>
            <p>You can also sign in through</p>
            <a href='https://www.google.com/' target='\blank'><i className="fa-brands fa-google fa-xl"></i></a>
            <br/>
        </div>
        </>
    );
}
 
export default Login;