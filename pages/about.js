import { Inter } from "@next/font/google";
import Stack from "../sdk-plugins/index";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function About() {
  // console.log(pagedata);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <h3 className="text-primary">About us</h3>
          <img src="/about.jpg" />
          <div>
            <p>
              <u>
                <strong>MISSION</strong>
              </u>
              <br />
              To inculcate confidence and competency in learners to become
              determinant professionals with highest integrity and a rewarding
              career.
            </p>

            <p>
              <u>
                <strong>VISION</strong>
              </u>
              <br />
              To achieve and sustain leadership in the field of Education,
              Research, Consultancy, Management, Mass Communication and overall
              development for improving the quality of life and ensuring the
              betterment of an individual.
            </p>

            <h3>
              <strong>Founders</strong>
            </h3>

            <p>
              <img
                alt=""
                height="281"
                src="https://krcollege.in/uploads/images/founder.jpg"
                width="846"
              />
            </p>

            <p>
              <strong>Best B.ed College in IP University</strong>
            </p>

            <p>
              <strong>Late Shri Ram Chander Aggarwal</strong> and{" "}
              <strong>Smt. Kasturi Devi </strong>of Narela, Delhi-40, cherished
              the dream of establishing a modern educational institute for the
              youth of this semi urban area with the motto of upliftment of the
              down trodden. Keeping in mind the ups and downs of life and the
              unexpected changes that may happen, late Sh. Ram Chander Aggarwal
              entrusted this job to his sons Shri Mahender Kumar Aggarwal and
              Shri Ravinder Aggarwal to fulfill his mission before leaving for
              his heavenly abode. Fulfilling the pledge of their parents along
              with a desire to contribute towards the betterment of society,
              Shri Mahender Kumar Aggarwal &amp; Shri Ravinder Kumar Aggarwal
              established{" "}
              <strong>Kasturi Ram College of Higher Education</strong> in this
              education deficient area of Delhi in the year 2005. And, thus the
              journey began.
            </p>

            <p>
              <strong>Kasturi Ram College of Higher Education</strong>,
              affiliated to Guru Gobind Singh Indraprastha University, Delhi.
              The college was established in the year 2005 by Hon&rsquo;ble Vice
              Chancellor of GGSIP University, Prof. K. K. Aggarwal under the
              aegis of{" "}
              <strong>
                Kasturi Ram Research Centre for Science and Management
              </strong>
              , a body registered under the Society Registration Act XXI, 1860
              with the mission of promoting quality education and building
              competent professionals. The College has been awarded highest
              Category &lsquo;A&rsquo; grading by Joint Assessment Committee of
              GGSIPU and SFRC, Department of Higher Education, Govt. of NCT of
              Delhi. The college is accredited by NAAC &amp; an ISO 9001:2015
              Certified.&nbsp;
            </p>

            <p>
              It is an active member of DELNET (Developing Library Network) and
              British Council Library. The college is also associated with
              Jagran Institute of Management &amp; Mass Communication.
            </p>

            <p>
              KRCHE is situated at sub-city Narela in calm, serene &amp;
              academically enthralling environment. Although, Narela is thickly
              populated, there was no facility of higher education in this area
              before the establishment of this college. To meet the aspirations
              of the students desirous of achieving higher professional
              education, the Society,{" "}
              <strong>Kasturi Ram Research for Science &amp; Management</strong>{" "}
              set up the college to groom competitive and high quality
              professionals through intensive training under dedicated,
              experienced and competent faculty in the discipline of Mass
              Communication, Management &amp; Teacher Education.
            </p>

            <p>
              <strong>KRCHE </strong>aims to be at the forefront in advancing
              Management, Journalism &amp; Education by promoting excellence in
              teaching &amp; research and providing the best possible
              professional education that develops students as managers &amp;
              leaders with values, vision &amp; versatility.
            </p>

            <h3>
              Kasturi Ram College of Higher Education is running the following
              programmes :
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
