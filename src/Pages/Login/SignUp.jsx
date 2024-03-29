import React, { useContext, useState } from 'react';
import img from '../../assets/login/sign_up.svg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2'


const SignUp = () => {
    const [pshow, setPshow] = useState(false)
    const [cshow, setCshow] = useState(false)
    const { createUser } = useContext(AuthContext);
    // location track in singup mathed
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const hanleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const cPassword = form.cPassword.value;
        // console.log(name, email, photoUrl, password, cPassword)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    icon: "success",
                    title: "Toy-Shop Sing Up successfull",
                    text: "You have Have a Account then by product",
                });
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200 py-4">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left lg:w-1/2 p-4 ">
                    <h1 className="text-5xl text-center font-bold">Registration  now!</h1>
                    <img className=' mt-4 cursor-pointer' src={img} alt="" />
                </div>
                <div className="card shrink-0 sm:w-full md:w-1/2 lg:w-1/2  shadow-2xl bg-base-100">


                    <form onSubmit={hanleRegistration} className="card-body">

                        {/* Name fild  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>

                        {/* email fild  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* Photo Url fild  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        {/* passwer fild */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                                <p onClick={() => setPshow(!pshow)} className='absolute cursor-pointer end-10'>
                                    {
                                        pshow ? <EyeIcon className="w-8" />
                                            : <EyeSlashIcon className="w-8" />
                                    }

                                </p>
                            </label>
                            <input type={pshow ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        {/* conprom password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">confiram password</span>
                                <p onClick={() => setCshow(!cshow)} className='absolute cursor-pointer end-10'>
                                    {
                                        cshow ? <EyeIcon className="w-8" />
                                            : <EyeSlashIcon className="w-8" />
                                    }

                                </p>
                            </label>
                            <input type={cshow ? 'text' : 'password'} name='cPassword' placeholder="Confiram password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff5200] hover:bg-[#dd5314] text-white text-2xl shadow-lg hover:shadow-sm transition-all">Registion</button>
                            <p className='mx-auto my-4'>Alrady Have An Account ? <Link className='text-sky-700' to='/Login'>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;