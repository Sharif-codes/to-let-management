import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Signup = () => {
    const {createUser}= useContext(AuthContext)
    const handleSignup= e=>{
        e.preventDefault()
        const form= e.target
        const email= form.email.value
        const password= form.password.value
        console.log(email,password)
        createUser(email,password)
        .then(res=>{
            alert('user added!')
            console.log(res.user)
        })
        .catch(err=> console.log(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:space-x-10 flex-col lg:flex-row">
                <div className="">
                    <img src="src/assets/images/login/login.svg" alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm w-full shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                        <p>already have an account? <span className="text-blue-700"><Link to='/login'>Login now</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;