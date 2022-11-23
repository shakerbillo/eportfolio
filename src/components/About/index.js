import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import {
	faJava,
	faHtml5,
	faCss3,
	faJsSquare,
	faGitAlt,
	faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);
	}, []);
	return (
		<>
			<div className="container about-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
							idx={15}
						/>
					</h1>
					<p>
						I am a very ambitious front-end developer who's looking for a role
						an established IT company with the opportunity to work with the
						latest technologies on challenging and diverse projects and team and
						also to learn from my colleagues and senior developers.
					</p>
					<p>
						I am discipline, naturally curious and continuously learning and
						working on improving my skills on project at a time.
					</p>
					<p>
						I like to learn new technologies. My goal is to become a Fullstack
						developer.
					</p>
					<p>
						If I need to describe myself in one sentence, I will say confident,
						sport fanatic, music enthusiast and tech-obsessed.
					</p>
				</div>
				<div className="stage-cube-cont">
					<div className="cubespinner">
						<div className="face1">
							<FontAwesomeIcon icon={faHtml5} color="#F06529" />
						</div>
						<div className="face2">
							<FontAwesomeIcon icon={faJava} color="#166DD1" />
						</div>
						<div className="face3">
							<FontAwesomeIcon icon={faReact} color="#28A4D9" />
						</div>
						<div className="face4">
							<FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
						</div>
						<div className="face5">
							<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
						</div>
						<div className="face6">
							<FontAwesomeIcon icon={faGitAlt} color="#EC4D38" />
						</div>
					</div>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default About;
