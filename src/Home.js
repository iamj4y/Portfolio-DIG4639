import "./App.css";
import { Link } from "react-router-dom";
import { Header, Footer } from "./App";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="App">
      <Header />
      <div id="page">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-4 bg-white rounded-xl shadow-md"
      >
        <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center text-center">
          <div className="align-middle">
            <h1 className="display-4"><strong>Welcome!</strong></h1>
            <p className="lead">
              So, you have found my Portfolio website. Feel free to have a look
              around
            </p>
            <p className="lead">
              <Link to="/Projects" className="btn btn-primary btn-lg navbtn">
                Check Out My Work
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
