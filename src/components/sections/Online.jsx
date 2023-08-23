import React from 'react'
import { Container } from "react-bootstrap";
import { dataPerson } from "../../contants";

const Online = () => {
	return (
		<>
			<section className='sect-online'>
				<Container>
					<div className="title">
						<h1>Online</h1>
					</div>
					<div className='d-flex align-items-center justify-content-center item-cards'>
						{dataPerson?.map((item, i) => (
							<div className="card-person d-flex align-items-center" key={i}>
								<div className="item-card text-center">
									<div className="profile">
										<img src={item.imgUrl} alt="" className="" />
									</div>
									<div className='item-text'>
										<p>{item.name}</p>
										<span>{item.position}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	)
}

export default Online
