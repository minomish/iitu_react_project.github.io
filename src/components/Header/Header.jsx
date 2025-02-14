// import './Header.css'

// import logo from '/IITU_Black_Red_Logo.png'
// import { UK } from '../../assets/flags/UK'


// const Header = () => {
//     return(
//         <header>
//             <a href="#home" ><img src={logo} alt="logo" className='logo'/></a>
//             <div className='headerContainer'>
//                 <nav>
//                     <ul>
//                         <li>About Us</li>
//                         <li>Course Info</li>
//                         <li>Course Enrollment</li>
//                         <li>Faculty</li>
//                     </ul>
//                 </nav>

//                 <div className='selectLanguage'>
//                     <UK />
//                     <p>English</p>
//                     <button></button>
//                 </div>

//                 <a href="#register" className='reg-btn'>REGISTER FOR COURSE</a>
//             </div>  
//         </header>
//     )
// }

// export default Header;


{/* <ul>
<li>About Us</li>
<li>Course Info</li>
<li>Course Enrollment</li>
<li>Faculty</li>
</ul> */}


import './Header.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <a href="#home">
                <img src="/IITU_Black_Red_Logo.png" alt="logo" className="logo" />
            </a>

            <nav className={menuOpen ? "nav open" : "nav"}>
                <Link to="about" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="course-info" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>Course Info</Link>
                <Link to="course-enrollment" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>Course Enrollment</Link>
                <Link to="faculty" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>Faculty</Link>
            </nav>

            <Link to="course-enrollment" smooth={true} duration={500} offset={-100} className={menuOpen ? 'reg-btn open' : "reg-btn"}>REGISTER FOR COURSE</Link>

            <i className={menuOpen ? "material-icons open" : "material-icons"} onClick={handleMenu}>
                {menuOpen ? "close" : "menu"}
            </i>
        </header>
    );
};

export default Header;
