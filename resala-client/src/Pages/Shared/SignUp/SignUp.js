import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import useToken from '../../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const { createUser, updateUser, googleLogin, githubLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const location = useLocation();
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const from = location.state?.from?.pathname || '/'

    const handleGoogle = () => {
        setError("");
        googleLogin()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: 'buyer'
                }
                fetch('https://resala-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then()

                navigate(from, { replace: true })
            })
            .catch((error) => setError(error.message));
    };

    const handleGithub = () => {
        setError("");
        githubLogin()
            .then((result) => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: 'buyer'
                }
                fetch('https://resala-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then()
                navigate(from, { replace: true })
            })
            .catch((error) => setError(error.message));
    };

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => setSignUpError(error))
    }

    const saveUser = (name, email, role) => {
        const userData = { name, email, role }
        console.log(userData);
        fetch('https://resala-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);
            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <label className="label"> <span className="label-text">SignUp as:</span></label>
                    <select className="select select-bordered w-full max-w-xs"
                        {...register('role', { required: 'role is required' })}
                    >
                        <option value='buyer' >Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" type="email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                        })} className="input input-bordered w-full max-w-xs" type="password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-info w-full mt-6' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account<Link to='/login' className='text-accent'> Please Log In</Link></p>
                <div className="divider">OR</div>
                <div className='mx-12'>
                    <button onClick={handleGoogle} className="btn btn-outline btn-primary"><span className='mr-2'><FaGoogle /></span>Google</button>
                    <button onClick={handleGithub} className="btn btn-outline btn-primary ml-2"><span className='mr-2'><FaGithub /></span>Github</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;