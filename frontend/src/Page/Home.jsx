import Navbar from "../Component/Navbar.jsx"
import Footer from "../Component/Footer.jsx"
import Content_1 from "../Component/content_1.jsx";
import Content_2 from "../Component/content_2.jsx";


function Home() {
  return (
    <div>
        <Navbar />
        <Content_1 />
        <Content_2 />
        <Footer />
    </div>
  )
}
export default Home