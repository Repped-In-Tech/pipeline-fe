/* eslint-disable react/prop-types */
import Head from 'next/head';
import { AuthProvider } from '../utils/context/authContext';
// import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Pipeline | Repped In Tech</title>
      </Head>
      <NavBar />
      <div className="mt-4 md:mt-8 mx-auto container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
