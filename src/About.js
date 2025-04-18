import "./App.css";
import { Header, Footer } from "./App";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="App">
      <Header />
      <div className="container" id="page">
        <div>
          <h1 className="pageTitle">
            <strong>About</strong>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 bg-white rounded-xl shadow-md"
        >
          <div className="bio">
            <h2 className="sectionTitle">Bio</h2>
            <p>
              As a multidisciplinary creative, my work bridges the worlds of
              design, film, and art—each informing and enriching the other.
              Whether I’m crafting visual narratives through motion or building
              immersive experiences with thoughtful layouts, my approach is
              always driven by storytelling and aesthetics. I have a deep
              appreciation for form and function, and I’m constantly exploring
              how visuals can evoke emotion and meaning. While my foundation
              lies in the creative arts, I also bring some technical fluency to
              the table, with experience in JavaScript, SQL, and React—tools
              I’ve used to bring interactive elements and data-driven components
              into my projects when needed.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="p-4 bg-white rounded-xl shadow-md"
        >
          <div className="row">
            <div className="card col my-2">
              <div className="card-body">
                <h2 className="sectionTitle">Skills</h2>
                <ul className="list-group list-group-flush sections">
                  <li className="list-group-item">Adobe Photoshop</li>
                  <li className="list-group-item">Adobe Illustrator</li>
                  <li className="list-group-item">Adobe Premiere Pro</li>
                  <li className="list-group-item">DaVinci Resolve</li>
                  <li className="list-group-item">HTML</li>
                  <li className="list-group-item">CSS</li>
                </ul>
              </div>
            </div>
            <div className="card col my-2 sections">
              <div className="card-body">
                <h2 className="sectionTitle">Interests</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Animation</li>
                  <li className="list-group-item">Film</li>
                  <li className="list-group-item">Illustration</li>
                  <li className="list-group-item">Photography</li>
                  <li className="list-group-item">Illustration</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
