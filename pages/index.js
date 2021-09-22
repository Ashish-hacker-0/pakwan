import styles from '../styles/Home.module.css'
import {AiOutlineClose} from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';
import {GiHamburger,GiHotMeal} from 'react-icons/gi';
import {CgCoffee} from 'react-icons/cg';
import { useState } from 'react';
import Link from 'next/link'
export default function Home() {
  const [breakfast,setBreakfast] = useState(true);
  const [lunch,setLunch] = useState(false);
  const [dinner,setDinner] = useState(false);
  const [drinks,setDrinks] = useState(false);
  const [video,setVideo] = useState(false);
  const unset = () => {
    setBreakfast(false);
    setDinner(false);
    setDrinks(false);
    setLunch(false);
  }

  return (
    <div className={styles.home}>
    {video&&<div className={styles.video}  >
      <div className={styles.close}  onClick={()=>setVideo(false)} ></div>
      <video src="/video.mp4" autoPlay controls onClick={()=>setVideo(true)} />
    </div>}
       <div className={styles.top}>
          <div className={styles.left}>
             <p>Meet, Eat & Enjoy the true taste</p>
             <p>Making a reservation at Delicious resturant is easy and takes just a couple of minutes.</p>
             <ul><li><Link href="/menu">Our Menu</Link></li><li onClick={()=>setVideo(true)} > <FaPlay/> Watch Video</li></ul>
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
              <button><Link href="/menu">Full Menu</Link></button>
            </div>
          </div>
          <div className={styles.foodSection}>
            <ul>
              <li className={breakfast?styles.active:''} onClick={()=>{
                unset();
                setBreakfast(true);
              }}>Breakfast</li>
              <li className={lunch?styles.active:''} onClick={()=>{
                unset();
                setLunch(true);
              }} >Lunches</li>
              <li className={dinner?styles.active:''} onClick={()=>{
                unset();
                setDinner(true);
              }}  >Dinner</li>
              <li className={drinks?styles.active:''} onClick={()=>{
                unset();
                setDrinks(true);
              }} >Drinks</li>
            </ul>
          </div>
          <div className={styles.foodContainer}>
            {breakfast&&<div className={styles.foodScroll}>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pasta.jpg"/>
                 <p>Delicious Pasta</p>
                 <p>Delicious Pasta at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/soup.jpg"/>
                 <p>Delicious Soup</p>
                 <p>Delicious Soup at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/rasgulla.png"/>
                 <p>Delicious Rosogulla</p>
                 <p>Delicious Rosogulla at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/gulabjamun.jpg"/>
                 <p>Delicious Gulab Jamun</p>
                 <p>Delicious Gulab Jamun at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/pizza.jpg"/>
                 <p>Delicious Pizza</p>
                 <p>Delicious Pizza at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
            </div>}
            {lunch&&<div className={styles.foodScroll}>
              <div>
                 <img src="/nonveg.jpg"/>
                 <p>Delicious Non Veg Thali</p>
                 <p>Delicious Non Veg Thali at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/veg.jpg"/>
                 <p>Delicious Veg Thali</p>
                 <p>Delicious Veg Thali at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/MushrromFriedRice.jpg"/>
                 <p>Delicious Mushrrom Fried Rice</p>
                 <p>Delicious Mushrrom Fried Rice at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/paneer-fried-rice.jpg"/>
                 <p>Delicious Paneer Fried Rice</p>
                 <p>Delicious Paneer Fried Rice at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/biryani.jpg"/>
                 <p>Delicious Biryani</p>
                 <p>Delicious Biryani at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/nonveg.jpg"/>
                 <p>Delicious Non Veg Thali</p>
                 <p>Delicious Non Veg Thali at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
            </div>}
            {dinner&&<div className={styles.foodScroll}>
              <div>
                 <img src="/lollipop.jpg"/>
                 <p>Delicious Chicken Lollipop</p>
                 <p>Delicious Chicken Lollipop at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/MuttonKebab.jpg"/>
                 <p>Delicious Mutton Kebab</p>
                 <p>Delicious Mutton Kebab at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/Chillipaneer.jpg"/>
                 <p>Delicious Chilli Paneer</p>
                 <p>Delicious Chilli Paneer at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/chillimushroom.jpg"/>
                 <p>Delicious Chilli Mushroom</p>
                 <p>Delicious Chilli Mushroom at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/VegKofta.jpg"/>
                 <p>Delicious Veg Kofta</p>
                 <p>Delicious Veg Kofta at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/lollipop.jpg"/>
                 <p>Delicious Chicken Lollipop</p>
                 <p>Delicious Chicken Lollipop at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
            </div>}
            {drinks&&<div className={styles.foodScroll}>
              <div>
                 <img src="/chocolate.jpg"/>
                 <p>Delicious Chocolate Shake</p>
                 <p>Delicious Chocolate Shake at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/lassi.jpg"/>
                 <p>Delicious Lassi</p>
                 <p>Delicious Lassi at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/moctail.jpg"/>
                 <p>Delicious Moctail</p>
                 <p>Delicious Moctail at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/Oreo.jpg"/>
                 <p>Delicious Oreo Shake</p>
                 <p>Delicious Oreo Shake at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/Vanilla-Shake.jpg"/>
                 <p>Delicious Vanilla Shake</p>
                 <p>Delicious Vanilla Shake at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
              <div>
                 <img src="/chocolate.jpg"/>
                 <p>Delicious Chocolate Shake</p>
                 <p>Delicious Chocolate Shake at your doorstep in one call.</p>
                 <button>Order Now</button>
              </div>
            </div>}
            
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
