// this is client componet use in next.js

// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);

//   console.log("its working")

//   return (
//     <div>
//       <div>The count is {count}</div>
//       <button 
//         onClick={() => setCount(count + 1)}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }


// this is server side component by default
// we also use client component in server components

import React from 'react'
import fs from "fs/promises"
import Navbar from '@/components/Navbar';

const page = () => {
  console.log("Its working")

  const a = fs.readFile(".gitignore");
  a.then((e) => { console.log(e.toString()) })
  return (
    <div>
      <Navbar />
      <div>Hello World</div>
    </div>
  )
}

export default page
