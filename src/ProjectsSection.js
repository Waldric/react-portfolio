import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./projects.css";

const projects = [
  {
    id: "project1Modal",
    title: "Autoflow - Algocom",
    desc: "A City Planning Web Application to Increase Road Efficiency in Lipa City, Batangas.",
    img: "/algocom.png",
  },
  {
    id: "project2Modal",
    title: "CookSmart - Hucoint",
    desc: "A personalized recipe and meal-planning app for effortless daily cooking.",
    img: "/cooksmart.png",
  },
  {
    id: "project3Modal",
    title: "CMS - Final Project (C++)",
    desc: "The Contact Management System is designed to simplify management and organization of personal and business contacts.",
    img: "/cms.png",
  },
];

export default function ProjectsSection() {
  useEffect(() => {
    ScrollReveal().reveal(".projects-title", {
      duration: 1000,
      origin: "top",
      distance: "50px",
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".project-card", {
      duration: 1000,
      origin: "bottom",
      distance: "60px",
      interval: 150,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container text-center">
        <h2 className="projects-title mb-5">Browse My Projects</h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <div className="card h-100 project-card d-flex flex-column">
                <img src={p.img} alt={p.title} className="project-thumb" />
                <hr className="project-divider" />
                <div className="project-body text-start d-flex flex-column">
                  <h5 className="fw-semibold mb-2">{p.title}</h5>
                  <p className="text-muted mb-4 flex-grow-1">{p.desc}</p>
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="btn btn-primary project-btn"
                      data-bs-toggle="modal"
                      data-bs-target={`#${p.id}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="modal fade"
          id="project1Modal"
          tabIndex="-1"
          aria-labelledby="project1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="project1Label">
                  Autoflow - Algocom
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="modal-description">
                  <strong>Autoflow</strong> is a city planning web application
                  designed to improve road efficiency in Lipa City, Batangas. It
                  leverages data analysis and visualization tools to help city
                  planners identify traffic bottlenecks, optimize road layouts,
                  and propose effective solutions.
                </p>
                <img
                  src="/autoflow.png"
                  alt="Autoflow Overview"
                  className="img-fluid"
                />
                <p className="modal-description mt-3">
                  For more information regarding Autoflow, you may visit:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1oHT7Hea0oSun4dOp_FCYAwnxOH6nHKQw-h9yRvwPRxY/edit?tab=t.her7xduuvlgh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Autoflow Research Paper
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/design/YNyU2Bm6ddVPR8t8TKqvFL/AlgoCom-UI?node-id=0-1&t=41sjW7m9z2j5ZrfC-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Autoflow Sample UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="project2Modal"
          tabIndex="-1"
          aria-labelledby="project2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="project2Label">
                  CookSmart - Hucoint
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="modal-description">
                  An overview of the <strong>CookSmart</strong> project,
                  including its features and functionalities.
                </p>
                <img
                  src="/cooksmart.png"
                  alt="CookSmart Project Details"
                  className="img-fluid"
                />
                <p className="modal-description mt-3">
                  For more information regarding CookSmart, you may visit:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.figma.com/proto/N9z2aljM1QaVX7aPdJTvYC/Hucoint-Final-Examination---Case-Study?node-id=2347-11455&t=Pb214Lv82mXygodk-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CookSmart Case Study
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/design/10LWpTCOels3Pr1CBrSxOC/GT2C---Mobile-Branding-Application---Prototype-Creation?node-id=0-1&t=fSUDEGNMpTL8REYN-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CookSmart UI Design / Prototype
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="project3Modal"
          tabIndex="-1"
          aria-labelledby="project3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="project3Label">
                  CMS - Final Project (C++)
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="modal-description">
                  Three members—Blanza Lycos, Garcia Waldric, and Medrano
                  Francis—were tasked with creating a{" "}
                  <strong>Contact Management System (CMS)</strong> program using
                  C++. A CMS helps users efficiently organize, store, and manage
                  their personal and business contacts.
                </p>
                <img
                  src="https://www.businessnewsdaily.com/_next/image?url=https%3A%2F%2Fimages.businessnewsdaily.com%2Fapp%2Fuploads%2F2021%2F07%2F08121505%2Fwhat-is-contact-management.png&w=1200&q=75"
                  alt="CMS"
                  className="img-fluid"
                />
                <p className="modal-description mt-3">
                  For more information regarding their CMS project, you may
                  visit:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1fKarggX_OLPQP89-5gsLSamXcC6kl0t8Wimgker_pfg/edit?tab=t.0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CMS Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Lycos-Blanza/final-project-group-4-ooprog.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CMS Code
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
