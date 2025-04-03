export default async function Page({ params }) {
    const { val } = await params
    console.log(val)
    return <div>My Post: {val}</div>
  }