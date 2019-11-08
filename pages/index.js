import React from 'react'
import axios from 'axios'
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'

// This is final place after 'render' in the _app.js
function Home({ products }) {
  return <ProductList products={products} />
}


// This is how you resolve most request from the SERVER !!! HOLY SHIT
// You need to do a get api call and it returns a promise
// The returned promise you can put in a const
// Note because this is happening on the back end, we do not know when request will be finished
// Hence we use a async to wait for the request to finish before proceeding

// Code present here is suited for SSR (Server side rendering)
// This gets some initial data which will be added to the props pf the component itself

Home.getInitialProps = async () => {

  // 1. fetch data on server
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  
  // 2. return response data as an object
  // note: this object will be merged with existing props
  return { products: response.data };
  
  // Note flow is from indexjs -> _app.js for the initialProps
};

export default Home;

