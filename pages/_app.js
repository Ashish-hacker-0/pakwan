import MainNavigation from '../components/MainNavigation/MainNavigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <MainNavigation>
    <Component {...pageProps} />
  </MainNavigation>
    )
}

export default MyApp
