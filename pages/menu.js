import { useState } from 'react';
import styles from '../styles/Menu.module.css';

const Menu = () => {
  const [i0,set0] = useState(true);
  const [i1,set1] = useState(false);
  const [i2,set2] = useState(false);
  const [i3,set3] = useState(false);
  const [i4,set4] = useState(false);
  const [i5,set5] = useState(false);
  const [i6,set6] = useState(false);
  const [i7,set7] = useState(false);
  const [i8,set8] = useState(false);
  const [i9,set9] = useState(false);
  const [i10,set10] = useState(false);
  const unset = () => {
    set0(false);
    set1(false);
    set2(false);
    set3(false);
    set4(false);
    set5(false);
    set6(false);
    set7(false);
    set8(false);
    set9(false);
    set10(false);

  } 
    return(
        <div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <p>Food Menu</p>
                    <p>Making a reservation at Delicious resturant is easy and takes just a couple of minutes.</p>
                </div>
                <div className={styles.right}>
                    <img src="/menu-back.webp"/>
                </div>
            </div>
            <div className={styles.dish}>
          <div className={styles.dishtop}>
            <div>
              <p>Most Popular Dishes</p>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
         
          </div>
        <div className={styles.menu}>
          {/* <div>
            <img src="/menu1.jpeg"/>
          </div>
          <div>
            <img src="/menu2.jpeg"/>
          </div>
        </div> */}
          <div className={styles.foodSection}>
            <ul>
              <li className={i0?styles.active:''}
              onClick={()=>{
                  unset();
                  set0(true);
              }} >Breads</li>
              <li className={i1?styles.active:''}
              onClick={()=>{
                  unset();
                  set1(true);
              }} >Rice and Biryani</li>
              <li className={i2?styles.active:''}
              onClick={()=>{
                  unset();
                  set2(true);
              }} >Desserts</li>
              <li className={i3?styles.active:''}
              onClick={()=>{
                  unset();
                  set3(true);
              }} >Beverage</li>
              <li className={i4?styles.active:''}
              onClick={()=>{
                  unset();
                  set4(true);
              }} >Sandwich</li>
              <li className={i5?styles.active:''}
              onClick={()=>{
                  unset();
                  set5(true);
              }} >Starter and Tandoor</li>
              <li className={i6?styles.active:''}
              onClick={()=>{
                  unset();
                  set6(true);
              }} >Chinese (Veg.)</li>
              <li className={i7?styles.active:''}
              onClick={()=>{
                  unset();
                  set7(true);
              }} >Chinese (Non Veg.)</li>
              <li className={i8?styles.active:''}
              onClick={()=>{
                  unset();
                  set8(true);
              }} >Soup</li>
              <li className={i9?styles.active:''}
              onClick={()=>{
                  unset();
                  set9(true);
              }} >Main Course</li>
              <li className={i10?styles.active:''}
              onClick={()=>{
                  unset();
                  set10(true);
              }} >Non-Veg</li>
            </ul>
          </div>
          <div className={styles.foodContainer}>
            {i0&&<div className={styles.foodScroll}>
              <div>
                  <img src="/troti.jpg"/>
                  <p>Tandoori Roti (Plain / Butter)</p>
                  <p>₹ 20/25</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/mroti.jpg"/>
                  <p>Missi Roti</p>
                  <p>₹ 35</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/rroti.jpg"/>
                  <p>Rumali Roti</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/nroti.jpg"/>
                  <p>Naan</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/bnan.jpg"/>
                  <p>Butter Naan</p>
                  <p>₹ 50</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/gnaan.jpg"/>
                  <p>Garlic Naan</p>
                  <p>₹ 60</p>
                  <button>Order Now</button>
              </div>
            </div>
          }
          {i1&&<div className={styles.foodScroll}>
              <div>
                  <img src="/price.jpg"/>
                  <p>Plain Rice</p>
                  <p>₹ 90</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/jrice.jpg"/>
                  <p>Jeera Rice</p>
                  <p>₹ 125</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/vpulao.jpg"/>
                  <p>Veg. Pulao</p>
                  <p>₹ 160</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/vbiryani.jpg"/>
                  <p>Veg. Biryani</p>
                  <p>₹ 160</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pbiryani.jpg"/>
                  <p>Paneer Biryani</p>
                  <p>₹ 195</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/ppulao.jpg"/>
                  <p>Peas Pulao</p>
                  <p>₹ 125</p>
                  <button>Order Now</button>
              </div>
            </div>
          }
          {i2&&<div className={styles.foodScroll}>
              <div>
                  <img src="/icecream.jpg"/>
                  <p>Ice Cream (Vanilla / Chocolate / Butter Scotch)</p>
                  <p>₹ 70</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/mixice.jpg"/>
                  <p>Mix Ice-Cream</p>
                  <p>₹ 90</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/rasgulla.png"/>
                  <p>Rosogulla</p>
                  <p>₹ 50</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/gulabjamun.jpg"/>
                  <p>Gulab Jamun</p>
                  <p>₹ 50</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/gice.jpg"/>
                  <p>Gulab Jamun with Ice-Cream</p>
                  <p>₹ 90</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/ghalwa.jpg"/>
                  <p>Gajar Halwa(Ocassionally)</p>
                  <p>₹ 90</p>
                  <button>Order Now</button>
              </div>
            </div>
          }
          {i3&&<div className={styles.foodScroll}>
              <div>
                  <img src="/thumsup.jpg"/>
                  <p>Thums Up</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/limca.jpg"/>
                  <p>Limca</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/mirinda.jpg"/>
                  <p>Mirinda</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/maza.png"/>
                  <p>Maza / Slice</p>
                  <p>₹ 40</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/masalacold.jpg"/>
                  <p>Masala Cold Drinks</p>
                  <p>₹ 45</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/limesoda.jpg"/>
                  <p>Fresh Lime Soda</p>
                  <p>₹ 45</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i4&&<div className={styles.foodScroll}>
              <div>
                  <img src="/cosandwich.jpg"/>
                  <p>Cucumber Onion</p>
                  <p>₹ 70</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pccsand.jpg"/>
                  <p>Paneer Chesse Corn</p>
                  <p>₹ 80</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pchsand.jpg"/>
                  <p>Paneer Chesse</p>
                  <p>₹ 100</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pocsand.jpg"/>
                  <p>Potato Chesse</p>
                  <p>₹ 80</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pcsand.jpg"/>
                  <p>Potato Chesse Corn</p>
                  <p>₹ 90</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/eggsand.jpeg"/>
                  <p>Egg Sandwich</p>
                  <p>₹ 80</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i5&&<div className={styles.foodScroll}>
              <div>
                  <img src="/paneerroll.jpg"/>
                  <p>Paneer Roll</p>
                  <p>₹ 110</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/paneerpakora.jpg"/>
                  <p>Panner Pakora</p>
                  <p>₹ 150</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/chanasalty.jpg"/>
                  <p>Chana Salty Paper</p>
                  <p>₹ 110</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/lollipop.jpg"/>
                  <p>Chicken Lollipop</p>
                  <p>₹ 225</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/tandorichicken.jpg"/>
                  <p>Tanduri Chicken (Half / Full)</p>
                  <p>₹ 225/400</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/cmalaitikka.jpg"/>
                  <p>Chicken Malai Tikka 8pcs</p>
                  <p>₹ 245</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i6&&<div className={styles.foodScroll}>
              <div>
                  <img src="/veg65.jpg"/>
                  <p>Veg 65</p>
                  <p>₹ 160</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/panner65.jpg"/>
                  <p>Panner 65</p>
                  <p>₹ 190</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/chillipaneer.jpg"/>
                  <p>Paneer Chilli (8pcs)</p>
                  <p>₹ 195</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/chillimushroom.jpg"/>
                  <p>Mashroom Chilli</p>
                  <p>₹ 195</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/manchurian.jpg"/>
                  <p>Veg Manchurian (8pcs)</p>
                  <p>₹ 180</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pannermanchurian.jpg"/>
                  <p>Paneer Manchurian</p>
                  <p>₹ 210</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i7&&<div className={styles.foodScroll}>
              <div>
                  <img src="/chicken65.jpg"/>
                  <p>Chicken 65</p>
                  <p>₹ 190</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/crispychi.jpg"/>
                  <p>Crispy Chicken</p>
                  <p>₹ 220</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/chillichicken.jpg"/>
                  <p>Chilli Chicken (Bone/Boneless)</p>
                  <p>₹ 190/210</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/gchickendry.jpg"/>
                  <p>Garlic Chicken Dry</p>
                  <p>₹ 240</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/noddles.jpg"/>
                  <p>Noodles (Egg/Chicken)</p>
                  <p>₹ 150/185</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/hakkanoodles.jpg"/>
                  <p>Hakka Noodles (Egg/Chicken)</p>
                  <p>₹ 160/190</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i8&&<div className={styles.foodScroll}>
              <div>
                  <img src="/tsoup.jpg"/>
                  <p>Tomato Soup</p>
                  <p>₹ 110</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/vsoup.jpg"/>
                  <p>Veg Hot and Sour Soup</p>
                  <p>₹ 120</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/ssoup.jpg"/>
                  <p>Sweet Corn Soup</p>
                  <p>₹ 125</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/masoup.jpg"/>
                  <p>Manchew Soup</p>
                  <p>₹ 125</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/msoup.jpg"/>
                  <p>Veg Mushroom Soup</p>
                  <p>₹ 130</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/csoup.jpg"/>
                  <p>Veg Clear Soup</p>
                  <p>₹ 125</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i9&&<div className={styles.foodScroll}>
              <div>
                  <img src="/vcurry.jpg"/>
                  <p>Seasonal Veg Curry</p>
                  <p>₹ 180</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/daloo.jpg"/>
                  <p>Aloo Dam (Banarsi)</p>
                  <p>₹ 180</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/jaloo.jpg"/>
                  <p>Jeera Aloo</p>
                  <p>₹ 160</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/mixveg.jpg"/>
                  <p>Mixed Vegetable</p>
                  <p>₹ 170</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/vegb.jpg"/>
                  <p>Veg Balti</p>
                  <p>₹ 170</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/mmasaala.jpg"/>
                  <p>Mushroom Butter Masala</p>
                  <p>₹ 195</p>
                  <button>Order Now</button>
              </div>
            </div>}
          {i10&&<div className={styles.foodScroll}>
              <div>
                  <img src="/chickencurry.jpg"/>
                  <p>Chicken Curry (4pcs)</p>
                  <p>₹ 240</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/pchicken.jpg"/>
                  <p>Chicken Punjabi (4pcs)</p>
                  <p>₹ 285</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/dochicken.jpg"/>
                  <p>Chicken Do Pyaza</p>
                  <p>₹ 260</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/chickenl.jpg"/>
                  <p>Chicken Lababdar</p>
                  <p>₹ 290</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/bchicken.jpg"/>
                  <p>Butter Chicken</p>
                  <p>₹ 290</p>
                  <button>Order Now</button>
              </div>
              <div>
                  <img src="/kchicken.jpg"/>
                  <p>Kadhai Chicken</p>
                  <p>₹ 270</p>
                  <button>Order Now</button>
              </div>
            </div>}
          </div>
        </div>
       </div>
        </div>
    )
}
export default Menu;