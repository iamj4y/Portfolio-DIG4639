import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./App";
import { motion } from "framer-motion";

export function Contact() {
  var emailChars = /[a-zA-Z0-9!#$%.&'*+-/=?^_`{|}~]+@[a-zA-Z.]+(.edu|.com)/;
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [color, setColor] = useState("black");

  const handleSend = (event) => {
    event.preventDefault();
    if (emailChars.test(email) && emailContent !== "") {
      setEmail("");
      setSubject("");
      setEmailContent("");
      setErrorContent("Sent");
      setColor("#13a818")
    } else {
      setErrorContent(
        "One or more fields have been filled out incorrectly or not at all."
      );
      setColor("#940d0d")
  }}

  return (
    <div className="App">
      <Header />
      <div id="page">
        <div>
          <h1 className="pageTitle">
            <strong>Interested In Any of My Work?</strong>
          </h1>
          <h3>Contact me through any of the methods below.</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 bg-white rounded-xl shadow-md"
        >
          <div className="row">
            <div className="card col my-2 sections">
              <div className="card-body">
                <img
                  src="\email.png"
                  alt="a black rectangle with discenrable envelope features"
                  width="48"
                />
                <h3 className="column">Email Me</h3>
                <form>
                  <label htmlFor="email">Email Address:</label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    size="50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <br></br>
                  <label htmlFor="subject">Subject:</label>
                  <br></br>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    size="50"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  ></input>
                  <br></br>
                  <label htmlFor="emailContent">Body:</label>
                  <br></br>
                  <textarea
                    id="emailContent"
                    name="emailContent"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                  ></textarea>
                  <br></br>
                  <input
                    type="submit"
                    value="Send"
                    id="submitBtn"
                    onClick={handleSend}
                  ></input>
                </form>
                <div
                  id="isError"
                  style={{
                    color: color,
                  }}
                >
                  {errorContent}
                </div>
              </div>
            </div>
            <div className="card col my-2 sections">
              <div className="card-body">
                <img
                  src="\linkedin.png"
                  alt="white 'i' and 'n' in black box with rounded corners"
                  width="48"
                />
                <h3 className="column">LinkedIn</h3>
                <h4>
                  <a href="https://www.linkedin.com/in/jason-phan-8a7276241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKizgGa4SQiaRwS7CQ4jxMg%3D%3D">
                    My Profile
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}