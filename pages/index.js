import { Inter } from "@next/font/google";
import Stack from "../sdk-plugins/index";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function Home({ pagedata }) {
  console.log(pagedata);
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-5">
          <img src={pagedata.page_banner.url} />
        </div>
        <div className="row">
          <h2 className="text-primary text-center mt-4 mb-4">
            {pagedata.title}
          </h2>
          <br />
          <p>{pagedata.page_description}</p>
        </div>
        <div className="row mt-4">
          {pagedata.courses_list.map((course_list, index) => {
            console.log("index", index)
            return (
              <>
                <div className="col-md-3" id={index} key={index.toString()}>
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
                        ...
                      </p>
                      <a href="/courses" className="btn btn-primary">
                        Course Detail
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
