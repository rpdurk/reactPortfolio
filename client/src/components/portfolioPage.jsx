import React from "react";
import sfWatch from '../Images/sfWatch.png';
import weatherDashboard from '../Images/weatherDashboard.png';
import passwordGenerator from '../Images/passwordGenerator.png';
import dayPlanner from '../Images/dayPlanner.png';
import codingQuizGame from '../Images/codingQuizGame.png';
import horiseon from '../Images/Horiseon.png';
import berlinPark from '../Images/berlinpark.jpeg';
import ccs2 from '../Images/ccs2.JPG';

export const PortfolioPage = () => {
  return (
    <>
    <section className="text-center">
        <div class="col-md">
            <h1 class="projects" style={{fontSize: 36}}>Latest Projects</h1>
            <p style={{fontSize: 26}}>Here are the latest projects I have been working on.</p>
        </div>
    </section>
    <br />
    <div className="container">
        <div class="card-columns">
            
            <div class="card">
                <img class="card-img-top" src={sfWatch} alt="Cover page of sf watch web app" />
                <div class="card-body">
                    <h3 class="card-title">SF Watch</h3>
                    <a href="https://rpdurk.github.io/SFWatch/"><p class="card-text">A web app that allows for the visualization of crime, fire, and COVID-19 related data in San Francisco.</p></a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={weatherDashboard} alt="landing page of the weather dashboard asking to search for a city" />
                <div class="card-body">
                    <h3 class="card-title">Weather Dashboard</h3>
                    <a href="https://rpdurk.github.io/WeatherDashboard/"><p class="card-text">Simple web app that allows you to search for the current weather and a 5 day forecast.</p></a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={passwordGenerator} alt="landing page with a button to generate a password" />
                <div class="card-body">
                    <h3 class="card-title">Password Generator</h3>
                    <a href="https://rpdurk.github.io/PasswordGeneratorWebApplication/"><p class="card-text">A web application that allows you to generate a password with a variety of character inputs choices.</p></a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={dayPlanner} alt="page with hours and places to save daily itinerary" />
                <div class="card-body">
                    <h3 class="card-title">Day Planner</h3>
                    <a href="https://rpdurk.github.io/DaySchedulePlanner/"><p class="card-text">Plan your day by saving tasks into local storage with this web app.</p></a>
                </div>
            </div>
 
            <div class="card">
              <img class="card-img-top" src={codingQuizGame} alt="Start of a coding quiz" />
                <div class="card-body">
                    <h3 class="card-title">Coding Quiz Game</h3>
                    <a href="https://rpdurk.github.io/CodingQuizGame/"><p class="card-text">Dynamic time based quiz game to test your coding knowledge.</p></a>
                </div>
            </div>
 
            <div class="card">
                    <img class="card-img-top" src={horiseon} alt="home page of horesion" />
                    <div class="card-body">
                        <a href="https://rpdurk.github.io/Code-Refactor/"><h3 class="card-title">Code Refactor</h3></a>
                        <p class="card-text">Website with improved SEO for accessibility by the differently-abled.</p>
                    </div>
                </div>

                <div class="card">
                    < img class="card-img-top" src={berlinPark} alt="friends gathering in a park" />
                    <div class="card-body">
                        <h3 className="card-title"> Who Said That? </h3>
                        <p className="card-text">Web app that allows friends to interact via video-call or in-person and play a semi-structured game that fosters creativity.  Stay in touch, learn about your friends, and make memories. (Will Launch Soon!)</p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={ccs2} alt="hiking around the corner in the snow" />
                    <div className="card-body">
                        <h3 className="card-title">More Projects Around the Corner!</h3>
                        <a href="contact.html"><p className="card-text">In the meantime, reach out if you want to continue the conversation.</p></a>
                    </div>
                </div>
        </div>
      </div>
    </>
    );
  };