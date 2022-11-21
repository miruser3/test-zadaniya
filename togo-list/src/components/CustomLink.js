import React from 'react';
import { Link ,useMatch} from 'react-router-dom';
import './Header.css'
const CustomLink = ({to,children}) => {
    const match= useMatch(to)
    return (
        <div>
            <Link style={{textDecoration:"none"}} className={match ? "active" : ""} to={to}><div className='logo'>{children}</div></Link>
        </div>
    );
};

export default CustomLink;