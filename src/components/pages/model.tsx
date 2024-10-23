import { useParams } from "react-router-dom";
import { adidasArr } from "./Adidas";

export const Model = () => {
    const { id } = useParams();
    const model = adidasArr.find((item) => item.id === Number(id));

    if (!model) return <p>Model not found</p>;

    return (
        <div>
            <h2>{model.model}</h2>
            <h4>{model.collection}</h4>
            <h4>{model.price}</h4>
            <img src={model.picture} alt={model.model} />
        </div>
    );
};