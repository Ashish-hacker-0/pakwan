import Image from "next/image";
import logo from '../../public/logo.png';
import {IoIosCall} from 'react-icons/io';
import classes from './Navbar.module.css';
import { useEffect, useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [list,setList] = useState(false);
    useEffect(()=>{
        changeBackground();
        window.addEventListener("scroll",changeBackground);
    });

    const changeBackground = () => {
        var scroll = window.scrollY;
        if(scroll>66){
            setActive(true);
        }else{
            setActive(false);
        }
    }

    return(
        <div className={(active?(classes.navbar&&classes.active):classes.navbar)} >
          <div className={classes.left}>
          <img src="/logo.png"/>
              <ul>
                 <li><p>Home</p></li>
                 <li><p>Menu</p></li>
                 <li><p>About</p></li>
                 <li><p>Blog</p></li>
                 <li><p>Contact</p></li>
              </ul>
          </div>
          <div className={classes.right}>
              <ul>
                  <li className={classes.book}>
                      Book a Table
                  </li>
                  <li className={classes.call}>
                    <IoIosCall/>  +91 94702 44400
                  </li>
              </ul>
          </div>
          <div className={classes.mobile}>
            <img src="/logo.png"/>
            <div>
                <div>
                   <button onClick={()=>setList(!list)}> <span>MENU</span><GiHamburgerMenu/></button>
                </div>
            {list&&<ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>}
            </div>
          </div>
        </div>
    )
}
export default Navbar;