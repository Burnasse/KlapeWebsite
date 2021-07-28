import * as React from "react";
import Seo from "./SEO/seo";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, description, children }) => {
  return (
    <main className="bg-trueGray-900">
      <Seo title={title} description={description} />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;