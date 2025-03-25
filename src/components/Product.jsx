import { useglobalContext } from "../hooks/useGlobalContext";
function Product({d}) {
  const {dispatch} = useglobalContext();
  const {id, category, name, price, image} = d;
  return (
    <div className="dessert-card">
      <picture>
        <source media="(min-width:998px )" srcSet={image.desktop} />  
        <source media="(min-width:800px )" srcSet={image.table} />  
        <source media="(min-width:400px )" srcSet={image.mobile} />  
        <img className="dessert-card-image" src="image.thumbnail" alt="" />
      </picture>
    </div>
  )
}

export default Product