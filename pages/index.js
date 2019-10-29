import React from 'react'
import axios from 'axios'

function Home() {
  React.useEffect(() => {
    getProducts()
  }, [])

  // This is how you resolve most request from the SERVER !!! HOLY SHIT
  // You need to do a get api call and it returns a promise
  // The returned promise you can put in a const
  // Note because this is happening on the back end, we do not know when request will be finished
  // Hence we use a async to wait for the request to finish before proceeding
  async function getProducts() {
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    console.log(response.data);
  }
  
  return <>home</>;
}



export default Home;
