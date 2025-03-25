import AddDessertButton from "./addBtn";

function ProdutList({ desserts, isPending, setProducts }) {
  return (
    <div className="desserts">
      <h1 className="desserts-title">Desserts</h1>
      {isPending && <h2>Loading...</h2>}
      <div className="desserts-list">
        {desserts &&
          desserts.map((p, index) => {
            return (
              <div key={p.name} className="dessert-item">
                {p.image.thumbnail && <img src={p.image.thumbnail} alt="" />}
                <AddDessertButton id={p} setProducts={setProducts} />
                {p.category && <span className="category">{p.category}</span>}
                {p.name && <h2 className="name">{p.name}</h2>}
                {p.price && <h2 className="name-p">{p.price} $</h2>}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProdutList;
