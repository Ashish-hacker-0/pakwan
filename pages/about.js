import styles from '../styles/About.module.css';

const About = () => {
    return(
        <div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <p>About Us</p>
                    <p>Making a reservation at Delicious resturant is easy and takes just a couple of minutes.</p>
                </div>
                <div className={styles.right}>
                    <img src="/menu-back.webp"/>
                </div>
            </div>
          <div className={styles.about}>
            <div className={styles.certificate}>
                <img src="/certificate.jpeg"/>
            </div>
            <div className={styles.owner}>
                <div>
                    <img src="/owner.jpeg"/>
                </div>
                <div>
                    <p>Amit Kumar Mahto</p>
                    <p>Managing Director of Celebration Event</p>
                    <p>Bachelor of Science Hospitality and Hotel Administration</p>
                    <p>from</p>
                    <p>INDIRA GANDHI NATIONAL OPEN UNIVERSITY</p>
                </div>
            </div>
            <form method="get" action="/license.pdf">
            <p>Checkout Our fssai certificate</p>
               <button type="submit">Download!</button>
            </form>
          </div>
        </div>
    )
}
export default About;