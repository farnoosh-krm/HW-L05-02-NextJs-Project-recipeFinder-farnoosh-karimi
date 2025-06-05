import Layout from "@/components/Layout/Layout";
import React from "react";
import Image from "next/image";
import styled from "../assets/notFound.module.scss";
import pic404 from "../assets/images/404error2.png";

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <div className={styled.mainContainer}>
          <div className={styled.textContainer}>
            <p className={styled.text1}>PAGE NOT FOUND!!!</p>
            <p className={styled.text2}>Looks Like You Have Got Lost</p>
            <p className={styled.text3}>
              The Page You Are Looking For Does Not Exist or Has Been Moved.
            </p>
          </div>
          <Image src={pic404} alt="404 pic" width={450} height={450} />
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
