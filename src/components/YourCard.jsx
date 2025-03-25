function YourCard() {
  return (
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

        <p className="border"></p>

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

      <p className="border"></p>

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

      <p className="border"></p>

      <div>
        <div className="order-total">
          <p className="text-order">Order Total</p>
          <h2 className="order-price">$46.50</h2>
        </div>
        <button className="btn-1">This is a carbon-neutral  delivery</button>
        <button className="btn-2">Confirm Order</button>
      </div>

    </div>
  );
}

export default YourCard;
