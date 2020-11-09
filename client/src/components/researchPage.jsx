import React from "react";
// import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns';
import vo2max from '../Images/vo2max.jpg';
import wser2019 from '../Images/wser2019.jpg';
import thaiIslands from '../Images/thaiislands.jpg';

export const ResearchPage = () => {
  return (
    <>
    <section className="text-center">
        <div class="col-md">
            <h1 class="projects" style={{fontSize: 36}}>Latest Research</h1>
            <p style={{fontSize: 26}}>Check out some of the things we are researching</p>
        </div>
    </section>
    <br />
    <div className="container">
        <div class="card-columns">
            
            <div class="card">
                <img class="card-img-top" src={wser2019} alt="view of the race course for the W.S.E.R 2019" />
                <div class="card-body">
                    <h3 class="card-title">Gut-Muscle-Axis 2019</h3>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/29989465/"><p class="card-text">Rapid gut microbiome changes in a world-class ultramarathon runner by Grosicki, Durk, & Bagley (2019).</p></a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={vo2max} alt="graded exercise test" />
                <div class="card-body">
                    <h3 class="card-title">Gut-Muscle-Axis 2018</h3>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/29989465/"><p class="card-text">Gut microbiota composition is related to cardiorespiratoy fitness in healthy young adults by Durk and colleagues (2018).</p></a>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={thaiIslands} alt="picture of the thai islands" />
                <div class="card-body">
                    <h3 class="card-title">More research is coming!</h3>
                    <p>Science doesn't happen alone, it is a team endeavour.  Check out some of the researchers I have worked with!</p>
                    <a href="https://www.musclephyslab.com/"><p>Muscle Physiology Lab</p></a>
                </div>
            </div>

        </div>
      </div>
    </>
    );
  };