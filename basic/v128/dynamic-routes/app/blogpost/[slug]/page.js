export default async function Page({ params }) {
    throw new Error("error a gaya bhai")
    const { slug } = await params
    console.log(slug)
    let languages = ["python", "java", "cpp", "c", "javascript"]
    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    } else {
        return <div>Post not found</div>
    }
}