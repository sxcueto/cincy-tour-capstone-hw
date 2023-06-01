import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub } from 'react-icons/fa';
import FunFact from './FunFact';

const About = () => {
    return (
        <div className="scroll-container">
            {/* //section one "about" landing page */}
            <section id="section-one">
                <header className="container-fluid" id="jumbo">
                    <div className="container-fluid text-center">
                        <br />
                        <a href="/about#section-two">
                            <FaArrowDown className="icons" />
                        </a>
                    </div>
                </header>
            </section>
            <br />

            { /* section two: info about Cincy */}
            <section id="section-two">
                <div className="container-fluid text-center" id="content-two">
                    <a href="/about#section-one">
                        <FaArrowUp className="icons" />
                    </a>
                    <br /> <br />
                    {/* <h3>Cincinnati</h3> */}
                    <p>Known for it's spaghetti chili, flying pigs, and world-famous hippos, Cincinnati is the place to be to experience a variety of cultures, art, food, and history. Click the dice below to learn some fun facts about our city. </p>
                    <br />
                    {/* dice for fun fact generator*/}
                    <div><FunFact /></div>
                    <a href="/about#section-three">
                        <FaArrowDown className="icons" />
                    </a>
                </div>
            </section>
            <br /> <br /> <br />

            {/* //section three: info about group */}
            <section id="section-three">
                <div className="row row-cols-sm g-0 container-fluid text-center" id="card-group">
                    <a href="/about#section-two">
                        <FaArrowUp className="icons" />
                    </a>
                    <h2 className="team-header">Capstone Team</h2>
                    <br />
                    <div className="card h-40 w-25" id="card-inside">
                        <img className="card-img-top" src="/" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Eliane Bettocchi</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="https://www.linkedin.com/in/lilith/">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/elianebettocchi">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="/">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card h-40 w-25" id="card-inside">
                        <img className="card-img-top" src="/" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Stephanie Cueto</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="https://www.linkedin.com/in/stephanie-cueto/">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/sxcueto">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="/">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card h-40 w-25" id="card-inside">
                        <img className="card-img-top" src="/" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Robert Head</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="/">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/PinusStrobus77">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="/">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />


        </div>
    )
}

export default About;