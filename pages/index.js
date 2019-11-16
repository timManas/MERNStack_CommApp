import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination";
import baseUrl from "../utils/baseUrl";

// This is final place after 'render' in the _app.js
function Home({ products, totalPages }) {
  return (
    <>
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

// This is how you resolve most request from the SERVER !!! HOLY SHIT
// You need to do a get api call and it returns a promise
// The returned promise you can put in a const
// Note because this is happening on the back end, we do not know when request will be finished
// Hence we use a async to wait for the request to finish before proceeding

// Code present here is suited for SSR (Server side rendering)
// This gets some initial data which will be added to the props pf the component itself

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;
  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };
  // 1. fetch data on server
  const response = await axios.get(url, payload);
  // 2. return response data as an object
  return response.data;
  // note: this object will be merged with existing props
};

export default Home;
