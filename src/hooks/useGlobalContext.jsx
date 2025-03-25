import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useglobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalontextni ichida ishlatilishi kerak");
    };
    return context; 
};
