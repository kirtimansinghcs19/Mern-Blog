import React from 'react'
import { useState } from 'react'
import BgImage from './BgImage'
import {Helmet} from 'react-helmet'

const Login = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="row mt-80">
    <div className="col-8">
      <BgImage/>
    </div>
    <div className="col-4">
      <div className="account">
        <div className="account__section">
          <form>
            <div className="group">
              <h3 className='form-heading'>Login</h3>
            </div>
            <div className="group">
              <input 
                type="email" 
                name="" 
                className="group_control" 
                placeholder='Enter email'/>
            </div>
            <div className="group">
              <input 
              type="password" 
              name="" 
              className="group_control"
              placeholder='Create password'/>         
            </div>
            <div className="group">
              <input 
                type="submit"
                className="btn btn-default btn-block"
                value="Login"/>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Login
