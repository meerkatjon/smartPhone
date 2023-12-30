import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    //  console.log("email from login.jsx" + email)
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {

                console.log("result printing")
                console.log("result data is " + result.data)
                if (result.data === "success") {
                    navigate('/home')
                }

            })
            .catch(err =>

                console.log("error occured in login.jsx" + err))
    }
    return (
        <div>
            <body class="bg-color">
                <section class="container mt-5">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Products</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/search">Search</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/register">Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
                <section class="container mt-5">
                    <div class="row justify-content-md-center">

                        <form onSubmit={handleSubmit}>
                            <div class="col-12 text-center">
                                <h3 class="text-primary"><strong>Enter your Credentials</strong></h3>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>

                                <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>

                                <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary btn-rounded w-45">Login</button>
                                <h5 ><strong>Or </strong></h5>
                                <Link to="/register" class="btn btn-primary btn-rounded w-35">Register</Link>
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </div>
        // <div>Login</div>
    )

}

export default Login;