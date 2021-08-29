import GoogleMapReact from 'google-map-react';
import styles from '../styles/Contact.module.css';
import {AiFillHome} from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io'
const contact = () => {
    let defaultProps = {
        center: {
          lat: 26.142028937436898,
          lng: 85.89710834986371
        },
        zoom: 11
      };
      const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return(
        <div>
            <div className={styles.top}>
                <div className={styles.left}>
                    <p>Contact Us</p>
                    <p>Making a reservation at Delicious resturant is easy and takes just a couple of minutes.</p>
                </div>
                <div className={styles.right}>
                    <img src="/menu-back.webp"/>
                </div>
            </div>
            <div style={{ height: '100vh', width: '100%' }} className={styles.map} >
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyApm1mnCiwjkVfZIj5jAgdV0NQoTM6M-o0' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={26.142028937436898}
                    lng={85.89710834986371}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div>
           <ul className={styles.address}>
               <li><AiFillHome/> Naka No. 6, Darbhanga</li>
               <li><IoIosCall/> +91 94702 44400</li>
           </ul>

        </div>
    )
}

export default contact;