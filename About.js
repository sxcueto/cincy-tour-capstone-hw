import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub, FaDiceD20 } from 'react-icons/fa';

const About = () =>{
return (
    <div>
        {/* //section one "about" landing page */}
        <section id="section-one">
            <header className="jumbotron jumbotron-fluid">
                <div className="container-fluid text-center text-black">
                    <br />
                    <h1 className="display-3" id="about-header"></h1>
                    <br />
                    <a href="/about#section-two">
                        <FaArrowDown />
                    </a>
                </div>
            </header>
        </section>
        <br />
        { /* section two: info about Cincy */}
        <section id="section-two">
            <div className="container-fluid text-center" id="content-two">
                <a href="/about#section-one">
                    <FaArrowUp />
                </a>
                <br />
                <h2>Cincinnati</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque.</p>
                <br />
                {/* {/* dice for fun fact generator will go here (add sound effect?)  */}
                {/* <div>
                 
                    <button onClick={newFact}><FaDiceD20 /></button>
                    <div id="factDisplay">{displayedFact}</div>
                </div> <br /> */}

                <a href="/about#section-three">
                    <FaArrowDown />
                </a>
            </div>
        </section>
        <br /> <br /> <br />
        {/* //section three: info about group */}
        <section id="section-three">
            <div className="row row-cols-sm g-0 container-fluid text-center" id="card-group">
                <a href="/about#section-two">
                    <FaArrowUp />
                </a>
                <h2>Capstone Team</h2>

                <div className="card h-40 w-25" id="card-inside">
                    <img className="card-img-top" src="/" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Eliane Bettocchi</h5>
                        <br />
                        <div className="container" id="social">
                            <a href="https://www.linkedin.com/in/lilith/">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/elianebettocchi">
                                <FaGithub />
                            </a>
                            <FaLink />
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
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/sxcueto">
                                <FaGithub />
                            </a>
                            <FaLink />

                        </div>
                    </div>
                </div>

                <div className="card h-40 w-25" id="card-inside">
                    <img className="card-img-top" src="/" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Robert Head</h5>
                        <br />
                        <div className="container" id="social">
                            <FaLinkedin />
                            <a href="https://github.com/PinusStrobus77">
                                <FaGithub />
                            </a>
                            <FaLink />
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
