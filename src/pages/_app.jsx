import { Provider } from "react-redux";
import { store } from "../store";
import "../libs/themify-icons/style.css";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
