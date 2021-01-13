import React from "react";
import ProfileImg from "../Arash_Zakeresfahani.png";
import Footer from "./Footer.js";

function Homepage() {
  return (
    <div
      className="container pt-5 mt-5 text-center"
      style={{ maxWidth: "75%" }}
    >
      <section className="card border-0 mx-auto">
        <div className="row">
          <span className="col-md-4 mx-auto">
            <div className="row">
              <img
                src={ProfileImg}
                className="card-img rounded-circle mx-auto pt-1"
                alt="Arash Zakeresfahani"
                style={{ maxWidth: "350px" }}
              />
            </div>
          </span>
          <span className="col-md-8">
            <div className="card-body">
              <h3 class="card-title text-left">Hi, I am Arash!</h3>
              <p className="card-text text-left">
                I am a third-year Ph.D. student at Indiana University. I study
                Health Informatics and Human-Computer Interaction. I am
                interested in designing tools and technologies that support
                healthcare journeys. Healthcare journeys are health-related life
                events that interrupt an individual's ordinary routines and
                could last from a few days to multiple years. The healthcare
                journey that I am currently interested in is pregnancy.
              </p>
              <p className="card-text text-left">
                The healthcare journey that I am currently interested in is
                pregnancy. Pregnancy is a unique health space that fits well in
                the concept of healthcare journeys. From the moment someone
                attempts to become pregnant or learns about their pregnancy,
                they are faced with serious decisions that could have lifelong
                impacts. These decisions occur in complex social ecologies that
                involve a variety of stakeholders including romantic partners,
                family, friends, formal and informal care providers, and even
                government agencies and policymakers. From fertility to
                postpartum and early parenthood, there are a variety of tools
                and technologies that assist users with decision making and
                their personal and social connections to other stakeholders. As
                an HCI researcher, my goal is to use human-center research, data
                science, and public health theories to develop a deep
                understanding of emotional, social, and functional requirements
                for pregnancy-related technologies.
              </p>
              <p className="card-text text-left">
                I am currently utilizing remote research methods such as the
                Asynchronous Remote Communications (ARC) method as well as
                online interviews to study the impacts of the COVID-19 pandemic
                on the communities of pregnancy healthcare providers who work
                mainly outside of the hospital systems including lactation
                support communities and doulas.
              </p>
            </div>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
