import React from 'react'
import { Container } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { FaRegCalendarCheck, FaBook } from "react-icons/fa";
import { BsDoorOpenFill, BsFillGearFill } from "react-icons/bs";


const Navbar = () => {
	return (
		<>
			<nav className='fixed-bottom'>
				<Container>
					<div className="block-link d-flex align-items-center justify-content-between">
						<a href='#' className="link text-center active">
							<span className='d-block'><ImHome /></span>
							<p>Home</p>
						</a>
						<a href='#' className="link text-center">
							<span className='d-block'><FaRegCalendarCheck /></span>
							<p>Attendance</p>
						</a>
						<a href='#' className="link text-center">
							<span className='d-block'><BsDoorOpenFill /></span>
							<p>Check Out</p>
						</a>
						<a href='#' className="link text-center">
							<span className='d-block'><FaBook /></span>
							<p>Form</p>
						</a>
						<a href='#' className="link text-center">
							<span className='d-block'><BsFillGearFill /></span>
							<p>Setting</p>
						</a>
					</div>
				</Container>
			</nav>
		</>
	)
}

export default Navbar
