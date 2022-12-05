import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next ulbi " + keywords}></meta>
      </Head>
      <div className="navbar">
        <A href={`/`} text="main" />
        <A href={`/users`} text="users" />
      </div>
      <div>{children} </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};
export default MainContainer;
