import Image from "next/image";
import logo from '../../public/logo.png';
import {IoIosCall} from 'react-icons/io';
import classes from './Navbar.module.css';
import { useEffect, useState } from "react";
import Link from 'next/link';
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
          <Link href="/"><img src="/logo.png"/></Link>
              <ul>
                 <li><p><Link href="/">Home</Link></p></li>
                 <li><p><Link href="/menu">Menu</Link></p></li>
                 <li><p><Link href="/about">About</Link></p></li>
                 <li><p><Link href="/contact">Contact</Link></p></li>
              </ul>
          </div>
          <div className={classes.right}>
              <ul>
                  <li className={classes.book}>
                      Book a Table
                  </li>
                  <li className={classes.call}>
                    <IoIosCall/> <a href="tel:+919470244400"> +91 94702 44400</a>
                  </li>
              </ul>
          </div>
          <div className={classes.mobile}>
          <Link href="/"><img src="/logo.png"/></Link>
            <div>
                <div>
                   <button onClick={()=>setList(!list)}> <span>MENU</span><GiHamburgerMenu/></button>
                </div>
            {list&&<ul>
                    <li onClick={()=>setList(!list)}><Link href="/">Home</Link></li>
                    <li onClick={()=>setList(!list)}><Link href="/menu" >Menu</Link></li>
                    <li onClick={()=>setList(!list)}><Link href="/about" >About</Link></li>
                    <li onClick={()=>setList(!list)}><Link href="/contact">Contact</Link></li>
                </ul>}
            </div>
          </div>
        </div>
    )
}
export default Navbar;