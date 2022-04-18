import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import NoSsr from "../components/NoSsr";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    
  }, []);
  return (
    <NoSsr>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoSsr>
  );
}

export default MyApp;
