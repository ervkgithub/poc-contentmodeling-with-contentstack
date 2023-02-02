import { Inter } from "@next/font/google";
import Stack from "../sdk-plugins/index";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function Courses({ pagedata }) {
  console.log(pagedata);
  return (
    <>
      <Header />
      <div className="container">
          <div className="row mt-5">
            <h3 className="text-primary mb-4">All Course List</h3>
            {pagedata.courses_list.map((course_list) => {
              return (
                <>
                  <div className="col-md-3" key={course_list.course_title}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={course_list.courses.course_image.url}
                        alt="Card image cap"
                        width="250"
                        height={250}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {course_list.courses.course_title}
                        </h5>
                        <p className="card-text">
                          {course_list.courses.course_description.substr(0, 130)}
                        </p>
                        <a href="/courses/course_id" className="btn btn-primary">
                          Enroll Now
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
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
