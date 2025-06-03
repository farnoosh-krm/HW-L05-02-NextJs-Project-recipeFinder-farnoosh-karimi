import Layout from "@/components/Layout/Layout";
import React from "react";
import styled from "./AboutUs.module.scss";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div>
      <Layout>
        <div className={styled.textContainer}>
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Recipe Finder</strong>! This website explores the
            amazing world of cooking. It has been designed as a final project to
            assist users in discovering a variety of delicious recipes.
          </p>
          <p>
            With the help of the{" "}
            <strong>
              <Link href={`https://spoonacular.com/food-api`} target="_blank">
                <u>Spoonacular API</u>
              </Link>
            </strong>
            , you can easily access thousands of recipes, cooking tips, and
            nutritional information. Whether you are a professional chef or a
            beginner, the resources and ideas needed to create tasty and healthy
            meals are provided here.
          </p>
          <p>
            At <strong>Recipe Finder</strong>, cooking is not just a daily
            necessity, but also an art and an opportunity for creative
            expression. The goal of creating this platform was to establish a
            simple, user-friendly, and inspiring environment so that everyone
            can benefit from it and enjoy their cooking experience.
          </p>
          <br />
          <p>I hope you enjoy visiting and using Recipe Finder!</p>
          <p>
            If you have any questions or suggestions, please feel free to reach
            out.
          </p>
          <br />
          <p>With respect,</p>
          <p>
            <strong> Farnoosh Karimi</strong>
          </p>

          <br />
          <p>farnoosh.karimi99@gmail.com</p>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUsPage;
