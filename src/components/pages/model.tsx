import { useParams } from "react-router-dom";

import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";

export const Model = () => {
    const { model, id } = useParams<{ model: string; id: string }>();

    const normalizedModel = model?.replace('/', '');

    type CrossModelsType = {
        [key: string]: (AdidasItem | PumaItem)[]
    }

    const crossModels: CrossModelsType = {
        adidas: adidasArr,
        puma: pumaArr,
    }

    if (!normalizedModel || !crossModels[normalizedModel]) {
        return <p>Invalid model</p>;
    }

    const currentModel = crossModels[normalizedModel].find(
        (item) => item.id === Number(id)
    );

    return (
        <div>
            {currentModel ? (
                <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h4>{currentModel.price}</h4>
                    <img src={currentModel.picture} alt={currentModel.model} />
                </>
            ) : (
                <p>Model not found</p>
            )}
        </div>
    );
};