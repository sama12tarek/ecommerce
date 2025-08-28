import React from 'react'

export default async function getProduct() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  const { data } = await res.json();
  
return data
}
