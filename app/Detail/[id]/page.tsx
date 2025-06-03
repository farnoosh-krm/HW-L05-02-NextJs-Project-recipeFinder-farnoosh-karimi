import DetailRecipeById from "./DetailRecipeById";

interface Props {
  params: {
    id: string;
  };
}

const DetailPage = ({ params }: Props) => {
  return <DetailRecipeById recipeId={params.id} />;
};

export default DetailPage;
