import Categories from "@/components/Categories/Categories";
import Slider from "@/components/HomePage/Slider/Slider";
import ProductsPage from "@/components/ProductsPage/ProductsPage";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Slider />
        <Categories />
        <ProductsPage />
      </div>
    </>
  );
};
export default HomePage;
