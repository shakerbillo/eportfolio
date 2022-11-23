import "./index.scss";
import React from "react";
import Players from "../../../assets/images/emma.png";
import { useRef } from "react";

const Logo = () => {
	const bgRef = useRef();

	const solidLogoRef = useRef();

	return (
		<div className="logo-container" ref={bgRef}>
			<img ref={solidLogoRef} className="solid-logo" src={Players} alt="E" />
		</div>
	);
};

export default Logo;
