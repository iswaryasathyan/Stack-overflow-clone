import {React,useState} from 'react'
import './Auth.css'
import images from '../../assets/images.png'
import AboutAuth from './AboutAuth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup,login} from '../../actions/auth'

const Auth = () => {
    const[isSignup,setIsSignup]=useState(false)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email && !password){
            alert("Enter email and password")
        }
        if(isSignup){
            if(!name){
                alert("Enter name to continue")
            }
            dispatch(signup({name,email,password},navigate))
        }else{
            dispatch(login({email,password},navigate))
        }
        // console.log({name,email,password})
    }
  return (
    <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        <div className='auth-container-2'>
            {!isSignup && <img src={images} alt='noimage' className='login-logo' width="18px"/>}
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    {!isSignup && <p style={{color:'blue',fontSize:"13px"}} >Forgot password?</p>}
                    </div>
                    <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    {
                        isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Password must contain 8 characters <br/>
                                          characters, including at least 1 letter and 1<br /> number.</p>

                           
                    }
                </label>
                {isSignup &&(
                    <label className='new' htmlFor='check'>
                    <input type="checkbox" id='check' />
                    <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                    </label>
                )}
                <button type="submit" className='auth-btn'>{isSignup?'SignUp':'LogIn'}</button>
                {isSignup &&(
                     <p style={{ color: "#666767", fontSize:"13px"}}>
                     By clicking “Sign up”, you agree to our 
                     <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                     <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                     <span style={{ color: "#007ac6"}}> cookie policy</span>
                 </p>
                )}
            </form>
              <p>
                  {isSignup?'Already have an account?':"Don't have an account ?"}
                  <button type="button" className='handle-switch-btn' onClick={handleSwitch}>
                      {isSignup?"LogIn":"SignUp"}
                  </button>
              </p>
        </div>
         
    </section>
  )
}

export default Auth
