import React,{useEffect}  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import images from '../../assets/images.png';
import search from '../../assets/search.png';
import './navbar.css';
import Avatar from '../../components/Avatar/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'

// import Button from '../../components/Button/Button';

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    var User=useSelector((state)=>(state.currentUserReducer))
    useEffect(()=>{
      const token=User?.token
      if(token){
        const decodedToken=decode(token)
        if(decodedToken.exp*1000< new Date().getTime()){
          handleLogout()
        }
      }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const handleLogout=()=>{
      dispatch({type:'LOGOUT'})
      navigate('/')
      dispatch(setCurrentUser(null))
    }
  return (
      <nav className='main-nav'>
    <div className='navbar'>
      <Link to='/' className='nav-item nav-logo'>
          <img className='im' src={images} alt='logo' />StackOverflow
      </Link>
    
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      <form>
          <input type="text" placeholder='Search......'/>
          <img src={search} alt='search' className='search-icon' width="18"/>
      </form>
      {User===null?
      <Link to='/Auth' className='nav-item nav-links'>LogIn</Link>:
    
          <>
         
       <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"> <Link to={`/Users/${User?.result?._id}`}style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
          <button className='nav-item nav-links' onClick={handleLogout}>LogOut</button>
          
          </>}
      </div>
    </nav>
    
    
  )
}

export default Navbar
