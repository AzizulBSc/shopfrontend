import '../styles/globals.css'
import '../styles/animate.css'
import '../styles/bootstrap.min.css'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {

  return (
      <div>
          <NextNProgress
        color="#CB4D85"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
       />
     <Component {...pageProps} />
  </div>
  );
}
