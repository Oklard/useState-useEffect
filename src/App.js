import React, { useEffect, useState } from "react";

// interface Item {
//   id : Number
// }

export default function App(){
  const [resourceType, setResourceType] = useState('')
  const [items, setItems] = useState([])

  useEffect(()=>{
    if(!resourceType) return
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])
  
  return(
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('Comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map((item) =>{
      return <pre key={item.id}>{JSON.stringify(item)}</pre>
    })}
     {/* <h1>{resourceType}</h1>
    {items.map<Item>((item) =>{
      return <pre key={item.id}>{JSON.stringify(item)}</pre>
    })} */}
    </>
  )
}
