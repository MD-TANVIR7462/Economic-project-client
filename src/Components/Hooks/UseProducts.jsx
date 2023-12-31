// Tanstack Query
import { useQuery } from "@tanstack/react-query";

const FetchData = async () => {
  const res = await fetch(
    "https://ecommerce-projects-server.vercel.app/allProducts"
  );
  const data = await res.json();
  return data;
};

// Query Function==>

const UseProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["products"], FetchData);
  return { products, isLoading, refetch };
};

export default UseProducts;
