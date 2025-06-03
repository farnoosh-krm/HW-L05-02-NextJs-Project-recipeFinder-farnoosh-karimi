"use client";
import { Analyzed, Ingredient, Recipe } from "@/constant/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import styled from "./detailRecipe.module.scss";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

const DetailRecipeById = ({ recipeId }) => {
  const [data, setData] = useState<Recipe | null>(null);
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [analyzedInstructions, setAnalyzedInstructions] = useState<
    Analyzed[] | null
  >(null);

  const cleanContentSummary = DOMPurify.sanitize(data?.summary || "");

  useEffect(() => {
    const getFoodRecipe = async () => {
      try {
        const response =
          await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}
`);
        const ingredientResponse =
          await fetch(`https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${process.env.NEXT_PUBLIC_API_KEY}
`);
        const analyzeResponse =
          await fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.NEXT_PUBLIC_API_KEY}
`);
        const result = await response.json();
        const ingredientResult = await ingredientResponse.json();
        const analyzed = await analyzeResponse.json();

        console.log("Fetched:", result);

        setData(result);
        setIngredient(ingredientResult);
        setAnalyzedInstructions(analyzed);
      } catch (e) {
        console.log("Error fetching data:", e);
      }
    };
    console.log("data:", data);

    if (recipeId) getFoodRecipe();
  }, [recipeId]);

  if (!data || !ingredient || !analyzedInstructions) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styled.main}>
      <Layout>
        <div className={styled.mainContainer}>
          <h1>{data.title}</h1>
          <Image src={data.image} alt={data.image} width={500} height={450} />
          <div className={styled.additionalInfo}>
            <p>
              Ready Time:<strong> {data.readyInMinutes}</strong> minutes
            </p>
            <p>
              Serving: <strong> {data.servings} </strong> persons
            </p>
            <p>
              Price Per Serving: <strong>{data.pricePerServing}</strong> USD
            </p>
          </div>

          <table className={styled.nutritionContainer}>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className={styled.ingredientTable}>
              {ingredient?.ingredients?.length > 0
                ? ingredient.ingredients.map((ing) => (
                    <tr key={ing.name}>
                      <td>{ing.name}</td>
                      <td>
                        <strong>{ing.amount.metric.value}</strong>{" "}
                        {ing?.amount?.metric?.unit}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>

          <div
            className={[styled.instructionsContainer, styled.groupItems].join(
              " "
            )}
          >
            <h4>Instructions</h4>
            <ul>
              {analyzedInstructions.length > 0
                ? analyzedInstructions.map((instruction, index) =>
                    instruction.steps.map((step, index2) => (
                      <li key={`${index}-${index2}`}>{step.step}</li>
                    ))
                  )
                : null}
            </ul>
          </div>

          <div className={styled.groupItems}>
            <h4>Summarize Recipe</h4>
            <p
              dangerouslySetInnerHTML={{ __html: cleanContentSummary }}
              className={styled.summaryContainer}
            />
          </div>
          {data?.sourceUrl && (
            <button className={styled.buttonMoreInfo}>
              <Link href={data.sourceUrl} target="_blank">
                More Information
              </Link>
            </button>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default DetailRecipeById;
