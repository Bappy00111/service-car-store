import React, { useContext } from 'react';
import login from '../../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SingUp = () => {

    const {createUser} = useContext(AuthContext)

    const handelSingUp = (event) =>{
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const user = {name,email,password}
        console.log(user)
        createUser(email,password)
        .then(regult =>{
            const user = regult.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row gap-[70px]">
                <div className="w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Sign Up!</h1>
                        <form onSubmit={handelSingUp}>
                            <div className="form-control">
                                <label className="label"> 
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Sing Up' id="" />
                            </div>
                        </form>
                        <p className='my-4 text-center text-lg'>Alredy have a Account <Link to="/login"><span className='text-cyan-600'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;