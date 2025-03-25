function YourCard() {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  const handleRemove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    window.location.reload(); 
  };

  return (
    <div className="your-card-2">
      <span className="text-2">Your Card ({items.length})</span>
      {items.map((item) => (
        <div key={item.id} className="wrap-card">
          <div>
            <div className="product-name">
              <p>{item.id.name}</p>
            </div>
            <div className="product-price">
              <p className="p-color">{item.count}x</p> <p>@$5.50</p> 
              <p>${item.id.price}</p>
            </div>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)} className="delete-button">x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default YourCard;
