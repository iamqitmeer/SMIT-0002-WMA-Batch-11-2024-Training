import React from 'react'

async function page({params}) {
  console.log(params.id);
  
  let response = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-cache",
  });

 let blogs = await response.json();
 blogs = blogs.find

  return (
    <div>Detail Page</div>
  )
}

export default page