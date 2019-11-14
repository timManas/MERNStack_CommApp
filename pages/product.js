import axios from "axios";
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from "../components/Product/ProductAttributes";
import baseUrl from "../utils/baseUrl";

// This is the Product page when you click on an individual card
// Notice the Summary goes first before the Attribute
function Product({ product, user }) {
  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes user={user} {...product} />
    </>
  );
}

Product.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/product`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { product: response.data };
};

export default Product;
