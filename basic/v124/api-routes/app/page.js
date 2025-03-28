"use client"

export default function Home() {

  const handleClick = async () => {
    let data = {
      name: "Abhishek",
      role: "coder"
    };

    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // ...
    });
    const result = await response.json();
    console.log(result)
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Next.js Api routes demo</h1>
      <button className="bg-blue-600 rounded-2xl text-white p-2" onClick={handleClick}>click me</button>
    </div>
  );
}
