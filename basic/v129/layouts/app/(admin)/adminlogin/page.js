import React from 'react'

const adminlogin = () => {
  return (
    <div>
      this is login page
    </div>
  )
}

export default adminlogin


export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Abhi-login",
    description: "this is facebook login page",
  }
}
 
