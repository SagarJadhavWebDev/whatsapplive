import { useEffect } from 'react';
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if('contacts' in  navigator ){
      alert("yes")
    }
    else{
      alert("no")
    }
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
