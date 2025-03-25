import { useState, useEffect } from "react";

function AddDessertButton({ id, setProducts }) {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const foundItem = storedItems.find((item) => item.id === id);
    if (foundItem) {
      setCount(foundItem.count);
    }
  }, [id]);

  const updateStorage = (newCount) => {
    let storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const index = storedItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      storedItems[index].count = newCount;
    } else {
      storedItems.push({ id, count: newCount });
    }

    localStorage.setItem("items", JSON.stringify(storedItems));

    setProducts([...storedItems]);
  };

  return (
    <button onClick={() => setClicked(!clicked)} className={`addDessert ${clicked ? "back" : "clicked"}`}>
      <img className="btn_buy" src="../images/karzinka.svg" alt="" />
      {clicked ? (
        <div className="counter">
          <button className="minus" onClick={(e) => {
              e.stopPropagation();
              setCount((prevCount) => {
                const newCount = Math.max(prevCount - 1, 1);
                updateStorage(newCount);
                return newCount;
              });
            }}>
            -
          </button>
          <span>{count}</span>
          <button className="plus" onClick={(e) => {
              e.stopPropagation();
              setCount((prevCount) => {
                const newCount = prevCount + 1;
                updateStorage(newCount);
                return newCount;
              });
            }}>
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
