import React, { Component, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductSearch() {


    const [company, setCompany] = useState()
    const [battery, setBattery] = useState()
    const [year, setYear] = useState()
    const [model, setModel] = useState()
    const [products, setProducts] = useState([])


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(company, battery, year)
        if (company && battery) {
            console.log("inside company & battery")
            const myArray = battery.split("-");
            let lowerLimit = myArray[0];
            let higherLimit = myArray[1];
            axios.post('http://localhost:5000/search', { company, battery })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        } else if (battery) {
            console.log("inside battery", (battery.length))
            axios.post('http://localhost:5000/search', { battery })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        }
        if (company && year) {
            console.log("inside company & year in react")
            axios.post('http://localhost:5000/search', { company, year })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        } else if (company && model) {
            console.log("inside company & year in react")
            axios.post('http://localhost:5000/search', { company, model })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        } else if (company) {
            console.log("inside company")
            axios.post('http://localhost:5000/search', { company })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        }

        else if (year) {
            console.log("inside year", year)
            axios.post('http://localhost:5000/search', { year })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        }
        else if (model) {
            axios.post('http://localhost:5000/search', { model })
                .then(result => {

                    setProducts(result.data)
                }
                ).catch(err => console.log(err))
        }
        // e.target.reset();
    }



    return (
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
                                <a class="nav-link" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Search<span class="sr-only">(current)</span></a>
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
            <body class="bg-color">

                <section class="container mt-5">
                    <div class="row justify-content-md-center">
                        <form onSubmit={handleSubmit}>
                            <div class="col-12 text-center">
                                <h3 class="text-primary"><strong>Search</strong></h3>
                            </div>

                            <div class="mb-3">
                                <label for="Company" class="form-label"><strong>Company</strong></label>
                                <select name="company" class="form-control" id="company" onChange={(e) => setCompany(e.target.value)}>
                                    <option value="">--please select--</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Google">Google</option>
                                    <option value="Realme">Realme</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Redmi">Redmi</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="year" class="form-label"><strong>Year</strong></label>
                                <select name="year" class="form-control" id="year" onChange={(e) => setYear(e.target.value)}>
                                    <option value="">--please select--</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>

                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="battery" class="form-label"><strong>Battery</strong></label>
                                <select name="battery" class="form-control" id="battery" onChange={(e) => setBattery(e.target.value)}>
                                    <option value="">--please select--</option>
                                    <option value="2000 - 3000">2000 - 3000mAh</option>
                                    <option value="3001 - 4000">3001 - 4000mAh</option>
                                    <option value="4001 - 5000">4001 - 5000mAh</option>
                                    <option value="5001">more than 5000mAh</option>

                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label"><strong>Model (type partial words) </strong> </label>
                                <input type="model" class="form-control" id="model" onChange={(e) => setModel(e.target.value)} />

                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary btn-rounded w-45">Search</button>
                            </div>
                        </form>
                    </div>
                </section>
            </body>


            <div className="w-500 vh-500 d-flex justify-content-center-items-center">
                <section></section>
                <section>
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
        </div>
    )
}

export default ProductSearch;


