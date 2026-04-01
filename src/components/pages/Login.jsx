import { Link , useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Login = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()
    
    async function onSubmit (data){
    try{
        const response = await axios.post("https://erp.techsexperts.cloud/api/admins/login" , data)
        console.log(response)
        localStorage.setItem('token' , response.data.data.accessToken)
        navigate("/products")
    }
    catch(err){
        console.log(err.response.data.message)
        setError(err.response.data.message)
    }
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="px-3 d-flex flex-column my-5 border w-25 gap-2 rounded-2 shadow"
            >
                <h2 className="text-center mt-3">Sign In</h2>
                
                
                <div>
                    <input 
                        type="email" 
                        
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        id="exampleFormControlInput1" 
                        placeholder="Email"
                        
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    
                    {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                </div>

                
                <div>
                    <input 
                        type="password" 
                        id="inputPassword5" 
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Password"
                        {...register("password", { 
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    {errors.password && <span className="text-danger small">{errors.password.message}</span>}
                </div>

                
                <button type="submit" className="text-white rounded-pill fw-medium btn btn-success my-2">
                    Login
                </button>
                
                <p className='text-secondary text-center mb-4'>
                    Don't have an account? 
                    <Link to='/Register' className='fs-6 text-black fw-semibold text-decoration-none'> Register</Link>
                </p>
            </form>
        </div>
    );
};