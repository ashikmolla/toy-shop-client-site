import React, { useContext, useState } from 'react';
import img from '../../assets/login/login.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { user, signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const [error, setError] = useState([]);
    // location track in login mathed 
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const hanleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    icon: "success",
                    title: "Toy-Shop Login successfull",
                    text: "You have Have a Account then by product",
                });
            })
            .catch((result) => {
                const errors = result.message;
                setError(errors)
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left lg:w-1/2 p-4 ">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <img className=' mt-4 cursor-pointer' src={img} alt="" />
                </div>
                <div className="card shrink-0 sm:w-full md:w-1/2 lg:w-1/2  shadow-2xl bg-base-100">


                    <form onSubmit={hanleLogin} className="card-body">
                        {/* email fild  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* passwer fild */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                                <p onClick={() => setShow(!show)} className='absolute cursor-pointer end-10'>
                                    {
                                        show ? <EyeIcon className="w-8" />
                                            : <EyeSlashIcon className="w-8" />
                                    }

                                </p>
                            </label>
                            <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt text-[#ff5200] link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-orange-700 text-center text-sm mb-4'>{error}</p>
                            <button className="btn bg-[#ff5200] hover:bg-[#dd5314] text-white text-2xl shadow-lg hover:shadow-sm transition-all">Login</button>
                            <p className='mx-auto my-4'>Dont’t Have An Account ? <Link className='text-sky-700' to='/signUp'>Sign Up</Link></p>
                        </div>
                        <div className='form-control'>
                            <SocialLogin></SocialLogin>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;