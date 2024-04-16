import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className="login-page d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='row'>
                                <div className='col-md-10'>
                                    <img
                                        src="./images/login.jpg"
                                        alt="login-img"
                                        className="container-fluid"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className='row'>
                                <div className='col-md-10'>
                                    <h5 className='fw-bold mb-3 mt-2'>Login</h5>
                                    <div className="row mt-2">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" className='form-control p-1' />
                                    </div>
                                    <div className="row mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" className='form-control p-1' />
                                    </div>
                                    <div className='row my-2'>
                                        <div className='d-flex aling-items-center justify-content-between'>
                                            <div className=''>
                                                <input id='checkbox' type='checkbox'></input>
                                                <label for='checkbox' className='ms-2 cursor-pointer'>Remember Me</label>
                                            </div>
                                            <NavLink to='' className='fw-bold'>Forgot Password</NavLink>
                                        </div>
                                    </div>
                                    <div className='row py-3 '>
                                        <NavLink to='/home' type='button' className='btn btn-lg rounded-1 btn-warning text-white fw-bold'>Login</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login