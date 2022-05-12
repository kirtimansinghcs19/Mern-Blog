import React from 'react'
import {useState,useEffect} from 'react'
import BgImage from './BgImage';
import {Helmet} from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '../../store/asyncMethods/AuthMethods';
import toast, {Toaster} from 'react-hot-toast';

const Register = (props) => {
  const [state,setState] = useState({
    name:'',
    email:'',
    password:''
  });

  const {loading,registerErrors ,user} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();

  const handleInputs = (e) =>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }

  const userRegister = async (e)=>{
      e.preventDefault();
      dispatch(postRegister(state));
      
  };

  useEffect(()=>{
    if(registerErrors.length>0){
      registerErrors.map(error =>(toast.error(error.msg)));
    }
    if(user){
      props.history.push("/dashboard"); 
    }
  },[registerErrors,user])
  return (
    <>
      <Helmet>
        <title>User Register</title>
        <meta name="description" content="User register form" />
      </Helmet>
      <div className="row mt-80">
        <div className="col-8">
          <BgImage/>
          <Toaster 
              position='top-right' 
              reverseOrder={false}
              toastOptions={{style:{
                fontSize:"14px"
              }}}/>
        </div>
        <div className="col-4">
          <div className="account">
            <div className="account__section">
              <form onSubmit={userRegister}>
                <div className="group">
                  <h3 className='form-heading'>Register</h3>
                </div>
                <div className="group"> 
                  <input 
                    type="text" 
                    name="name" 
                    className="group_control" 
                    placeholder='Enter Name'
                    value={state.name}
                    onChange={handleInputs}/>
                </div>
                <div className="group">
                  <input 
                    type="email" 
                    name="email" 
                    className="group_control" 
                    placeholder='Enter email'
                    value={state.email}
                    onChange={handleInputs}/>
                </div>
                <div className="group">
                  <input 
                  type="password" 
                  name="password" 
                  className="group_control"
                  placeholder='Create password'
                  value={state.password}         
                  onChange={handleInputs}/>
                </div>
                <div className="group">
                  <input 
                    type="submit"
                    className="btn btn-default btn-block"
                    value={loading ? '...':'Register'}/>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Register
