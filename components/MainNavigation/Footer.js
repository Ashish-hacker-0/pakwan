import classes from './Footer.module.css';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, } from 'react-icons/ai';
import {FaYoutubeSquare,FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className={classes.footer}>
           <div className={classes.first}>
               <img src="/logo.png"/>
               <p>We are working harder than ever now, and I’m putting on my pants the same as I always have. We just get up every day and try to do a little better than the day before, and that is to run a great restaurant with great food, and great service. That’s our philosophy</p>
               <ul>
                <li className={classes.li}>
                   <AiFillFacebook/>
                </li>
                <li className={classes.li}>
                    <FaInstagramSquare/>
                </li>
                <li className={classes.li}>
                    <AiFillTwitterSquare/>
                </li>
                <li className={classes.li}>
                    <FaYoutubeSquare/>
                </li>
               </ul>
           </div>
           <div className={classes.second}>
             <p>Quick  Links</p>
             <ul>
                <li><p>Home</p></li>
                <li><p>About</p></li>
                <li><p>Services</p></li>
                <li><p>Blog</p></li>
                <li><p>Contact</p></li> 
             </ul>
           </div>
           <div className={classes.third}>
             <p>Dishes</p>
             <ul>
                <li>Breakfast</li>
                <li>Lunches</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Fastfood</li>
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
    )
}
export default Footer;