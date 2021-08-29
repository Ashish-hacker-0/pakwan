import styles from '../styles/Menu.module.css';

const Menu = () => {
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
            <div>
              <img src="/menu1.jpeg"/>
            </div>
            <div>
              <img src="/menu2.jpeg"/>
            </div>
          </div>
          {/* <div className={styles.foodSection}>
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
       </div> */}
       </div>
        </div>
    )
}
export default Menu;