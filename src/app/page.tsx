import Image from "next/image";
import Hero from "./component/Hero";
import ProductsPage from "./component/productDetails";

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    // <h1>hello abhishek</h1>
    <div><Hero></Hero>
    <ProductsPage></ProductsPage>
    </div>

    // </div>
  );
}
