import axios from "axios";
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from "../components/Product/ProductAttributes";

// This is the Product page when you click on an individual card
// Notice the Summary goes first before the Attribute
function Product({ product }) {
  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  );
}

Product.getInitialProps = async ({ query: { _id }}) => {
  const url = "http://localhost:3000/api/`product"
  const payload = { params: { _id} }
  const response = await axios.get(url, payload)      // Use axios to make async calls to the product api
  return { product: response.data }
}

export default Product;
