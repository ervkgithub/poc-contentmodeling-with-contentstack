import { Inter } from "@next/font/google";
import Stack from "../sdk-plugins/index";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function FAQ({ pagedata }) {
  console.log(pagedata);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 {pagedata.faq.title}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {pagedata.faq.description}
                </div>
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
