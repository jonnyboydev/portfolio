import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  <style jsx global>{`
    body {
    margin: 0px,
      background: "#111";
    }
  `}</style>;
}

export default MyApp;
