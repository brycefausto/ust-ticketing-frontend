import axios from "axios";
import "styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
