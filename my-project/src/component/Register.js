import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
const Register = () => {
    return (
        <>
         <NavLink className={'link'} style={{fontSize: 30, textDecoration: 'none', color: 'white' }} to={"/Login"}>войти</NavLink>
          
          < h2>Регистрация</h2>
           <input></input> 

        </>
    );
};

export default Register;