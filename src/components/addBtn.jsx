import { useState } from "react";

function AddDessertButton({ id }) {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <button
    
    onClick={() => setClicked(!clicked)}
    className={`addDessert ${clicked ? "back" : "clicked"}`}
    >
    <img className="btn_buy" src="../images/karzinka.svg" alt="" />
      {clicked ? (
        <div className="counter">
          <button
            className="minus"
            onClick={(e) => {
              e.stopPropagation();  
              setCount((prevCount) => Math.max(prevCount - 1, 1));
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="plus"
            onClick={(e) => {
              e.stopPropagation();
              setCount((prevCount) => prevCount + 1);
            }}
          >
            +
          </button>

        </div>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}

export default AddDessertButton;