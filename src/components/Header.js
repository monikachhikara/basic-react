import logo from '../utils/yogaHeaderLogo.png';

function Header(){
    return (
        <div className="header">
            <div className="headerImg">
                <img alt="logo" src={logo} />
            </div>
            <div className="headerMenu">
                <ul className="headerList">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;