import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    async function onSubmit(data) {
        try {
            const response = await axios.post("http://localhost:8000/api/register", data)
            localStorage.setItem('token', response.data.data.accessToken)
            navigate("/products")
        }
        catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <form action="" className="px-3 d-flex flex-column my-5 border w-25 gap-2 rounded-2 shadow" onSubmit={handleSubmit(onSubmit)} >
                    <h2 className="text-center mt-3">Create Account</h2>
                    <input type="text" id="inputname5" className={`form-control ${errors.name ? 'is-invalid' : ''}`} aria-describedby="passwordHelpBlock" placeholder="name" {...register("name", {
                        required: "name is required",
                        minLength: {
                            value: 3,
                            message: "name must be at least 6 characters"
                        }
                    })}></input>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="exampleFormControlInput1" placeholder="Email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}></input>
                    {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                    <input type="password" id="inputPassword5" className={`form-control ${errors.password ? 'is-invalid' : ''}`} aria-describedby="passwordHelpBlock" placeholder="Password" {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}></input>
                    {errors.password && <span className="text-danger small">{errors.password.message}</span>}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                    <button className="text-white rounded-pill fw-medium btn btn-success my-2">Create Account</button>
                    <p className='text-secondary text-center mb-4'>Don't have account? <Link to='/Login' className='fs-6 text-black fw-semibold text-decoration-none'> Login</Link></p>
                </form>
            </div>

        </>
    )
}