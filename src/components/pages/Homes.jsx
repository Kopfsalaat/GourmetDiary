import NavBar from "components/Navigation/NavBar";
import Footer from "components/Navigation/Footer";
import Layout from "hocs/Layouts/Layout";

function Home(){
    return(
        <Layout>
            <NavBar/>
                <div className="pt-36 px-10">
                    Home
                </div>
            <Footer/>
        </Layout>
    )
}
export default Home;