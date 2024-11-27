import { useParams, useNavigate } from "react-router-dom";

import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";

import { S } from "./model.styled";

export const Model = () => {
  const { model, id } = useParams<{ model: string; id: string }>();
  const navigate = useNavigate();

  const normalizedModel = model?.replace("/", "");

  type CrossModelsType = {
    [key: string]: (AdidasItem | PumaItem)[];
  };

  const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr,
  };

  if (!normalizedModel || !crossModels[normalizedModel]) {
    return (
      <S.Container>
        <S.Message>Invalid model</S.Message>
        <S.Button onClick={() => navigate("/")}>Go Back to Home</S.Button>
      </S.Container>
    );
  }

  const currentModel = crossModels[normalizedModel].find(
    (item) => item.id === Number(id),
  );

  return (
    <S.Container>
      {currentModel ? (
        <>
          <S.Title>{currentModel.model}</S.Title>
          <S.Subtitle>{currentModel.collection}</S.Subtitle>
          <S.Subtitle>{currentModel.price}</S.Subtitle>
          <S.Image src={currentModel.picture} alt={currentModel.model} />
        </>
      ) : (
        <>
          <S.Message>Model not found</S.Message>
          <S.Button onClick={() => navigate("/")}>Go Back to Home</S.Button>
        </>
      )}
    </S.Container>
  );
};
