import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        //    console.log("Name :" + name, "email:" + email, "pass: " + password);
        console.log(name, email, password);
        axios.post('http://localhost:5000/signup/', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/Home')
            })
            .catch(err => console.log(err))
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
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Register <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
                <section class="container mt-5">
                    <div class="row justify-content-md-center">
                        <form onSubmit={handleSubmit}>
                            <div class="col-12 text-center">
                                <h3 class="text-primary"><strong>Register Now</strong></h3>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" onChange={(e) => setName(e.target.value)} />
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
                                <button type="submit" class="btn btn-primary btn-rounded w-45">Register</button>
                                <h5 ><strong>Or </strong></h5>
                                <Link to="/login" class="btn btn-primary btn-rounded w-35">Login</Link>
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </div >

    )

}


export default Signup;