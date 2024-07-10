import './AllProducts.css'
// import ProductList from './ProductList'
// import { useState, useEffect } from 'react';
// function AllProducts(){
//     const [products,updateProducts] = useState([]);
//     useEffect(()=>{
//       getProducts()},[]
//     )
//     async function getProducts(){
//       let res=await fetch("http://localhost:5555/Products");
//       let productList =await res.json();
//       updateProducts(productList)
//     }
  
//     if(products.length ===0){
//       return (<h1>Fetching....... </h1>)
//     }
//     return(
//       <>
      
//       <div className = "Product-list container">
//         {
//           products.map((p)=><ProductList {...p} key={p.id}/>)
//         }
//       </div>
//       </>
//     )
  
//   }

import pic1 from './images/papa1.jpg'
import pic2 from './images/papa2.jpg'
import pic3 from './images/papa3.jpg'
import pic4 from './images/papa4.jpg'
import pic5 from './images/papa5.jpg'
import pic6 from './images/papa6.jpg'
import pic7  from './images/papa7.jpg'
import pic8 from './images/papa8.jpg'
import pic9 from './images/papa9.jpg'


function AllProducts(){

  return(
    <>
    <div className='container '>
  <h2 className='text-danger'>Introduction</h2>
  <img src={pic1} className='w-100' alt='pic1'/>
  <img src={pic2} className="w-100" alt='pic2'/>
  <img src={pic3}  className="w-100" alt='pic3'/>
  <img src={pic4}  className="w-100" alt='pic4'/>
  <img src={pic5}  className="w-100" alt='pic5'/>
  <img src={pic6}  className="w-100" alt='pic6'/>
  <img src={pic7}   className="w-100"alt='pic7'/>
  <img src={pic8}  className="w-100" alt='pic8'/>
  <img src={pic9} className="w-100" alt='pic9'/>
 
  </div>

    </>
  )
}
  export default AllProducts