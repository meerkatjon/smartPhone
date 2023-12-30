import React, { Component, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/home')
            .then(products => setProducts(products.data)
                .catch(err => console.log(err)))
    }, [])
    console.log(products)
    return (

        // <div className="w-200 vh-500 d-flex justify-content-center-items-center">
        <div>
            <section class="container mt-5">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Products</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section class="container mt-5">
                <div>
                    <body class="bg-color">
                        <section class="container mt-5">
                            <div>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Model</th>
                                            <th>company</th>
                                            <th>Launch Year</th>
                                            <th>front camera (MP)</th>
                                            <th>back camera (MP)</th>
                                            <th>battery (mAh)</th>
                                            <th>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => {
                                                return < tr >
                                                    <td>{product.modelName}</td>
                                                    <td>{product.company}</td>
                                                    <td>{product.launchDate[2].year}</td>
                                                    <td>{product.camera[0].frontCamera}</td>
                                                    <td>{product.camera[1].backCamera}</td>
                                                    <td>{product.battery}</td>
                                                    <td>{product.link}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </body>
                </div >
            </section>
        </div >
    )
}

export default Home;