import React from 'react';

const Login = () => {


    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <h1>This is login</h1>
            <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }} >
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="password" name="password" placeholder='password' required />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;