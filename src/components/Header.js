import logo from '../utils/yogaHeaderLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";

function Header(){
    const [btnNameReact, setBtnNameReact] = useState('Login');

    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="headerImg">
                <img alt="logo" src={logo} />
            </div>
            <div className="headerMenu">
                <ul className="headerList">
                    <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>
                    <button 
                    className='loginButton'
                    onClick={() =>{
                        btnNameReact === "Login" 
                        ? setBtnNameReact('Logout') 
                        : setBtnNameReact('Login')
                    }} >
                        {btnNameReact}
                    </button>

                </ul>
            </div>
        </div>
    )
}

export default Header;