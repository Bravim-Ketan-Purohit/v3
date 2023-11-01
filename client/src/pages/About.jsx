import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div id="navbar">navbar</div>
      <div className="aboutContainer">
        <h1 id="gtku">GET TO KNOW US</h1>
        <h2 id="data">
          Testing and diagnosis make up about 50% of the medical sector. While
          testing for various diseases is very important, we must always seek
          the assistance of a medical professional when results are received.
          When someone is aware of what is normal or not but is unsure of what
          to do next or what is abnormal and why it occurs, they wind up paying
          a lot of money to doctors as well as giving a significant amount of
          time.
          <br />
          <br />
          So, here we are proposing a solution to the above problem by
          developing a Smart Report system. Patient’s sample will be collected
          at the lab, then the sample will be processed. The patient after
          receiving the report will be able to generate smart diagnostic report.
        </h2>
        <img
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1520x800.webp"
          id="img"
        />
      </div>
      <br /> <br />
      <br /> <br />
      <div className="aboutContainer">
        <h1 id="gtku">WHAT DO WE DO</h1>
        <img
          src="https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration-official-company-website-business-online-representation-corporate-vision-page-web-development-graphic-design-service_335657-354.jpg?w=740&t=st=1697734070~exp=1697734670~hmac=03cbfc89cfa8fc09a962dcf3d18cd0a23f55af1d92111ca8a0d0c08cc830980d"
          id="img"
        />
        <h2 id="data">
          The Smart Report represents a groundbreaking fusion of artificial
          intelligence and healthcare, offering patients a personalized AI
          interface to better understand and manage their health. It addresses
          the longstanding challenge of medical jargon, making healthcare
          information more accessible. Moreover, it saves time by eliminating
          the need for in-person doctor visits and significantly improves the
          patient experience. <br /> <br />
          Beyond patient-centric benefits, Smart Report enhances healthcare
          professionals' knowledge and efficiency and serves as a comprehensive
          repository of patient data, aiding industry analysts in identifying
          trends and optimizing treatment strategies. In essence, Smart Report
          embodies a transformative leap in healthcare technology, promising
          enhanced patient care, efficiency, and data-driven insights.
        </h2>
      </div>
      <div className="wrv">
        <h1 id="gtku2">WHO ARE WE</h1>
        <span className="card">
          <img
            className="profileImg"
            src="https://i.ibb.co/M7CLHp2/bkp-img.jpg"
          />
          <h2 id="data">
            Bravim Purohit
            <br />
            <span id="grey">Full stack Developer</span>
          </h2>
        </span>
        <span className="card">
          <img
            className="profileImg"
            src="https://i.ibb.co/ZfKgW3F/photo-2022-12-09-22-06-17-edited.jpg"
          />
          <h2 id="data">
            Swayam Pandya
            <br />
            <span id="grey">Full Stack Developer</span>
          </h2>
        </span>
        <span className="card">
          <img
            className="profileImg"
            src="https://i.ibb.co/CHPmWhp/sparsh-cover.jpg"
          />
          <h2 id="data">
            Sparsh Pathak
            <br />
            <span id="grey">Resource Gatherer</span>
          </h2>
        </span>
      </div>
    </>
  );
};

export default About;
