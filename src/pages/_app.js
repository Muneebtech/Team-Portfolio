import { ToastContainer } from 'react-toastify';
import Theme from '../styles/theme';
import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      </Theme>
    </>
  );
}
 