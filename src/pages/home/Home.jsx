
import Footer from "../Footer";
import About from "./About";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import TabBase from "./Tabs";




const Home = () => {
  
    return (
        <div className="mx-auto">
            <Banner1></Banner1>
            <About></About>
            <Banner2></Banner2>
            <TabBase></TabBase>
            <Footer></Footer>
        </div>
    );
};

export default Home;