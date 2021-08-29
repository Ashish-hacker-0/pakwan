import classes from './Footer.module.css';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, } from 'react-icons/ai';
import {FaYoutubeSquare,FaInstagramSquare} from 'react-icons/fa';
import Link from 'next/dist/client/link';
const Footer = () => {
    return(
      <div>
         <div className={classes.insta}>
          <div>
            <img src="/1.jpeg"/>
            <img src="/2.jpeg"/>
            <img src="/3.jpeg"/>
            <img src="/4.jpeg"/>
            <img src="/5.jpeg"/>
            <img src="/6.jpeg"/>
            <img src="/7.jpeg"/>
          </div>
          <button><a href="https://www.instagram.com/pakwandbg/" target="_blank"><AiFillInstagram/><span>@pakwandbg</span></a></button>
       </div>
        <div className={classes.footer}>
           <div className={classes.first}>
               <img src="/logo.png"/>
               <p>We are working harder than ever now, and I’m putting on my pants the same as I always have. We just get up every day and try to do a little better than the day before, and that is to run a great restaurant with great food, and great service. That’s our philosophy</p>
               <ul>
                <li className={classes.li}>
                <a href="https://www.facebook.com/pakwandarbhanga" target="_blank"><AiFillFacebook/></a>
                </li>
                <li className={classes.li}>
                <a href="https://www.instagram.com/pakwandbg/" target="_blank"><FaInstagramSquare/></a>
                </li>
                <li className={classes.li}>
                <a href="/" target="_blank"><AiFillTwitterSquare/></a>
                </li>
                <li className={classes.li}>
                <a href="/" target="_blank"><FaYoutubeSquare/></a>
                </li>
               </ul>
           </div>
           <div className={classes.second}>
             <p>Quick  Links</p>
             <ul>
                <li><p><Link href="/">Home</Link></p></li>
                <li><p><Link href="/about">About</Link></p></li>
                <li><p><Link href="/menu">Menu</Link></p></li>
                <li><p><Link href="/contact">Contact</Link></p></li>
             </ul>
           </div>
           <div className={classes.third}>
             <p>Dishes</p>
             <ul>
                <li><Link href="/menu">Breakfast</Link></li>
                <li><Link href="/menu">Lunches</Link></li>
                <li><Link href="/menu">Dinner</Link></li>
                <li><Link href="/menu">Drinks</Link></li>
                <li><Link href="/menu">Fastfood</Link></li>
             </ul>
           </div>
           <div className={classes.fourth}>
              <p>Contact Us</p>
              <ul>
                <li>Naka No. 6, Darbhanga</li>
                <li>+91 94702 44400</li>
              </ul>
           </div>

        </div>
        </div>
    )
}
export default Footer;