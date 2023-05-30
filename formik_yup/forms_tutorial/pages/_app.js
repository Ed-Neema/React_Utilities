import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion';

function MyApp({ Component, pageProps,router }) {
  return (
    <AnimatePresence>
      {/*  //dynamically updates to whatever page we are on */}
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp
