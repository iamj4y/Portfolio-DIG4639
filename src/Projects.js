import "./App.css";
import { Header, Footer } from "./App";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <div className="App">
      <Header />
      <div id="page">
        <div>
          <h1 className="pageTitle">
            <strong>Projects</strong>
          </h1>
          <h3>
            All projects I have worked on, whether personal or professional.
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 bg-white rounded-xl shadow-md"
        >
          <div className="row">
            <div className="project card col my-2 projectDisplay sections">
              <div className="card-body">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0T6-X2onTec?si=YIZusUA9M-MVcAfV"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <h3>To-Do App</h3>
                <p>
                  Simply put, this is an application that can log tasks a user
                  enters in and allows to the user to keep track of whether or
                  not the tasks have been completed. Task checking can be
                  accomplished through clicking the checkboxes, which change the
                  display to fit with the task's status: completion or
                  incompletion
                </p>
              </div>
            </div>
            <div className="project card col my-2 projectDisplay sections">
              <div className="card-body">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mTFY58Wd1pc?si=hz8zv8cJcn-lBkkC"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <h3>Exercise App</h3>
                <p>
                  This is a simple app that allows users to keep track of a list
                  of exercises either involving repetition or duration.
                  Exercises involving repetition have a counter that the user
                  can manually increment every time they complete a rep.
                  Exercises involving duration have a timer that the user can
                  use to track the duration of the activity.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="project card col my-2 projectDisplay sections">
              <div className="card-body">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wN-bqY-7H9k?si=CPLQJVG3iCOoYzZO"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <h3>Quiz App</h3>
                <p>
                  As the name implies, this is a simple quiz app that asks the
                  user three questions, with each being a different type:
                  multiple choice, multiple question, and true or false. After
                  completing the quiz, the results of the quiz are displayed for
                  the user: the correct answer count and a display of the chosen
                  questions, whether they be correct or not.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}
