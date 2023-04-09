import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const GetStarted = () => {
  return (
    <div>
      <Header />
      <section id="timeline">
        <h1>How does a subscription work?</h1>
        <p class="leader">
          Don't worry, we won't make you read a lot, but please go though how a
          subscription works :)
        </p>
        <div class="demo-card-wrapper">
          <div class="demo-card demo-card--step1">
            <div class="head">
              <div class="number-box">
                <span>01</span>
              </div>
              <h2>
                <span class="small">90 days</span> TRIAL PERIOD
              </h2>
            </div>
            <div class="body">
              <p>
                You register an admin account for your school with the button
                below. This should be done by a leader in your school.
              </p>
              <p>
                When the admin account is registered and your school is set up,
                you will get a code to share with your fellow teachers, which
                they can use to sign up.
              </p>
              <p>
                The teachers are free to register as many classes they would
                like and generate as many maps they want. The goal is for them
                to test our the product.
              </p>
            </div>
          </div>

          <div class="demo-card demo-card--step2">
            <div class="head">
              <div class="number-box">
                <span>02</span>
              </div>
              <h2>
                <span class="small">One week</span> before trial end
              </h2>
            </div>
            <div class="body">
              <p>
                One week before the trial ends, we will send you an email asking
                you if you want to continue with the subscription.
              </p>
              <p>
                You will get information on how many teachers have registered in
                the app, and how many maps have been created. With that, you
                will also see how many hours have been saved in manual work and
                the money saved.
              </p>
            </div>
          </div>

          <div class="demo-card demo-card--step3">
            <div class="head">
              <div class="number-box">
                <span>03</span>
              </div>
              <h2>
                <span class="small">6 months</span> Subscription
              </h2>
            </div>
            <div class="body">
              <p>
                Your subscription will continue running as long as you do not
                cancel.
              </p>
              <p>
                By defualt our subscription lasts 6 months, but they can of
                course be made to your preference.
              </p>
              <p>
                For the trial period, the first 3 months are only charged if you
                choose to continue with the subscription.
              </p>
            </div>
          </div>

          <div class="demo-card demo-card--step4">
            <div class="head">
              <div class="number-box">
                <span>04</span>
              </div>
              <h2>
                <span class="small">Subtitle</span> Invoice
              </h2>
            </div>
            <div class="body">
              <p>
                We will send you an invoice latest 1 week before the end of the
                subscription period. That gives you the chance to terminate the
                subscription before a new one is starting.
              </p>
              <p>
                Once a new period is started, the subscription will run for 6
                months unless otherwise specified.
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="reason-text">
            <a href="app.klassekartgenerator.no/signup">
              <button className="hero-button start">
                <p>Start free trial</p>
              </button>
            </a>
            <p className="reason-description">
              Start a 90 day free trial. Cancel at any time - and don't worry,
              we remind you before the trial expires!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
