function YourCard() {
  return (
    // <div className="your-card">
    //   <span className="text">Your Card(0)</span>
    //   <img className="deffault-img" src="../public/images/deffault.png" alt="" />
    //   <p className="p-text">Your added items will appear here</p>
    // </div>

    <div className="your-card-2">
      <span className="text-2">Your Card(0)</span>
      <div className="wrap-card">
        <div>
          <div className="product-name">
            <p>Classic Tiramisu</p>
          </div>
          <div className="product-price">
            <p className="p-color">1x</p> <p>@$5.50</p> <p>$5.50</p>
          </div>
        </div>
        <div>
        <button className="delete-button">x</button>

        </div>
      </div>
    </div>
  );
}

export default YourCard;
