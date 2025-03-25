import { useEffect, useState } from "react";
import EmptyCard from "./components/EmptyCard";
import ProdutList from "./components/ProdutList";
import YourCard from "./components/YourCard";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: desserts, error, isPending } = useFetch("http://localhost:3000/desserts");

  // **LocalStorage'dan mahsulotlarni o‘qib olish va holatga o‘rnatish**
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });

  // **LocalStorage yangilanganda mahsulotlarni qayta yuklash**
  useEffect(() => {
    const updateProducts = () => {
      setProducts(JSON.parse(localStorage.getItem("items")) || []);
    };

    window.addEventListener("storage", updateProducts);
    return () => window.removeEventListener("storage", updateProducts);
  }, []);

  return (
    <div className="container grid-container">
      <ProdutList desserts={desserts} isPending={isPending} setProducts={setProducts} />
      {products.length > 0 ? <YourCard products={products} /> : <EmptyCard />}
    </div>
  );
}

export default App;
