import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaPlay} from 'react-icons/fa';
import {GiHamburger,GiHotMeal} from 'react-icons/gi';
import {CgCoffee} from 'react-icons/cg';
import {AiFillInstagram} from 'react-icons/ai';
export default function Home() {
  return (
    <div className={styles.home}>
       <div className={styles.top}>
          <div className={styles.left}>
             <p>Meet, Eat & Enjoy the true taste</p>
             <p>Making a reservation at Delicious resturant is easy and takes just a couple of minutes.</p>
             <ul><li>Our Menu</li><li> <FaPlay/> Watch Video</li></ul>
          </div>
          <div className={styles.right}>
              <img src="/food.png"/>
          </div>
       </div>
       <div className={styles.healthy}>
          <p>Best way to eat healthy food</p>
          <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
          <div className={styles.flex}>
            <div className={styles.flexDiv}>
              <p><GiHotMeal/> </p>
              <p>Healthy Meal</p>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
            <div className={styles.flexDiv}> <p> <GiHamburger/> </p> <p>Fast Food</p> <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p> </div>
            <div className={styles.flexDiv}> <p> <CgCoffee/>  </p> <p>Delicious Coffee</p> <p> Making a reservation at Délicious restaurant is easy and takes just a couple of minutes. </p></div>
          </div>
       </div>
       <div className={styles.dish}>
          <div className={styles.dishtop}>
            <div>
              <p>Most Popular Dishes</p>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
            <div>
              <button>Full Menu</button>
            </div>
          </div>
          <div className={styles.foodSection}>
            <ul>
              <li className={styles.active}>Breakfast</li>
              <li>Lunches</li>
              <li>Dinner</li>
              <li>Drinks</li>
              <li>Fastfood</li>
            </ul>
          </div>
          <div className={styles.foodContainer}>
            <div className={styles.foodScroll}>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
            </div>
          </div>
       </div>
       <div className={styles.booking}>
           <div>
             <img src="/book.webp"/>
           </div>
           <div>
             <p>Book a table</p>
             <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
             <form>
               <input type="text" placeholder="Number of Guest" />
               <input type="date" placeholder="Date" className={styles.date}  />
              <select>
                <option>Lunch</option>
                <option>Break-Fast</option>
                <option>Dinner</option>
              </select>
               <input type="number" placeholder="Phone No." />
               <textarea placeholder="Message" />
               <button>Send Request</button>
             </form>
           </div>
       </div>
    </div>
  )
}
