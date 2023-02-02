import Stack from "../../sdk-plugins/index";
import React from "react";
import Header from "../..//common/header";
import Footer from "../..//common/footer";

export default function CoursesDetail() {
  // console.log(pagedata);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <h3 className="text-primary mb-4">Course Detail</h3>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.contentstack.io/v3/assets/blt36a1219227d507fa/bltfe05e427223b09b0/63da1b06aaf5cc62cfa6653e/btech.jpg"
                alt="Card image cap"
                width="250"
                height="250"
              />
              <div className="card-body">
                <h5 className="card-title">B. Tech</h5>
                <p className="card-text">
                  B.Tech Colleges in Delhi - Bachelor of Technology is the most
                  aimed option for candidates who graduate schools through PCM
                  stream.
                </p>
                <a href="/courses/course_id" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const result = await Stack.getEntry("educational_course", "en-us");
  return {
    props: {
      pagedata: result[0][0] || [],
    },
  };
}
