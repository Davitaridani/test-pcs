import React from 'react'
import { Container, Row } from "react-bootstrap";
import { BsStopwatch } from "react-icons/bs";
import { RxCountdownTimer, RxStopwatch } from "react-icons/rx";

const Activity = () => {

	const dataActivity = [
		{
			icon: <BsStopwatch />,
			time: "08:30",
			text: "Check In"
		},
		{
			icon: <RxCountdownTimer />,
			time: "03:00:00",
			text: "Working Hours"
		},
		{
			icon: <RxStopwatch />,
			time: "--;--",
			text: "Check Out"
		},
	]

	return (
		<>

			<section className='sect-activity'>
				<Container>
					<div className="title">
						<h1>Today's activity</h1>
					</div>
					<Row>
						{dataActivity?.map((item, i) => (
							<div className="col-4" key={i}>
								<div className="item-activity text-center">
									<span>{item.icon}</span>
									<div className="text">
										<p className=''>{item.time}</p>
										<span>{item.text}</span>
									</div>
								</div>
							</div>
						))}
					</Row>
				</Container>
			</section>

		</>
	)
}

export default Activity
