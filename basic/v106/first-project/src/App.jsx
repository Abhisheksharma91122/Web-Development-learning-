import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    <>
      <Navbar />
      <div className="card">
        <Card title = "this is 1 card" description = "card 1 desc" />
        <Card title = "this is 2 card" description = "card 2 desc" />
        <Card title = "this is 3 card" description = "card 3 desc" />
        
      </div>
      <Footer />
    </>
  )
}

export default App
