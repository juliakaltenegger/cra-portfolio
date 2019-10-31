import React from "react";

let data = {
  linkedinId: "julia-e-kaltenegger",
};

export default function ContactUs() {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">Feel free to get in touch!</p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/julia-e-kaltenegger/">
                {data.linkedinId}
              </a>
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
}
