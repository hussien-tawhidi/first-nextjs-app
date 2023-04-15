import Hero from "@/components/hero";
import { Product } from "@/type";
import Products from "@/components/product";
import Layout from "@/components/Layout";

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  return (
    <Layout title='Nextjs | Ecommerce App'>
      <Hero />
      <div className='container mx-auto'>
        <Products productData={productData} />
      </div>
    </Layout>
  );
}

// FECTH DATA FROM API FOLDER
export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();
  return {
    props: { productData },
  };
};
