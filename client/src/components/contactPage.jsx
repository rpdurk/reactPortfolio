import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";

export const ContactPage = () => {
  return (
    <>
    <section className="text-center">
        <div class="col-md">
            <h1 class="projects">Contact Me</h1>
            <p>If something here interests you or you would like to get in touch, contact me.</p>
        </div>
    </section>
    <br />
    <div class="container" className="text-center">
        <div class="row">
            <div class="col-md">
                <h3 >LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ryan-durk/" class="fa fa-linkedin"><FaLinkedin font-size="80px"  /></a>
            </div>
            <div class="col-md">
                <h3>Github</h3>
                <a href="https://github.com/rpdurk" class="fa fa-github"><FaGithub font-size="80px"/></a>
            </div>
            <div class="col-md">
                <h3>Facebook</h3>
                <a href="https://www.facebook.com/Ryan.P.Durk" class="fa fa-facebook"><FaFacebook font-size="80px"/></a>
            </div>
            <div class="col-md">
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/ryanpdurk/?hl=en" class="fa fa-instagram"><FaInstagram font-size="80px"/></a>
            </div>
        </div>
    </div>
    </>
    );
  };