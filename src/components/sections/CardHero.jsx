import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import imgProfile from "../../assets/images/user.webp";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { dataNotification } from "../../contants";
import { BiArrowBack } from "react-icons/bi";


const CardHero = () => {

	const [dataNotif, setDataNotif] = useState(false);


	const handleNotif = () => {
		setDataNotif(!dataNotif);
	};

	return (
		<>

			<section className='sect-title-hero'>
				<Container>
					<div className="items-title d-flex align-items-center justify-content-between">
						<h1>KerjaYuk</h1>
						<button aria-label="button notifcation" className='border-0 bg-transparent' onClick={handleNotif}>
							<span><MdOutlineNotificationsNone /></span>
						</button>
						<div className="block-notif">
							{dataNotif && dataNotification.map((item, i) => (
								<div key={i}>
									<div className="title-notif">
										<h3 className='d-flex align-items-center gap-2'><span onClick={handleNotif}><BiArrowBack /> </span>{item.title}</h3>
									</div>
									{item.notif?.map((item, i) => (
										<div className="d-flex justify-content-between item-notif" key={i} style={{ backgroundColor: `${item.bgColor}` }}>

											<div className="img-profile">
												<img src={item.imgUrl} alt="icon" className='img-fluid' />
											</div>
											<div className="items-text">
												<h5>{item.title}</h5>
												<p>{item.desc}</p>
											</div>
											<div className="date">
												<p>{item.date}</p>
											</div>
										</div>
									))
									}
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			<section className='sect-cardHero'>
				<Container>
					<p>Hi, Good Morning</p>
					<div className="card-hero">
						<div className="header-card d-flex align-items-center justify-content-between">
							<div className="content-left-header d-flex align-items-center">
								<img src={imgProfile} alt="icon user" className='img-fluid' />
								<div className="title-card">
									<h1>Tabay</h1>
									<p>UI/UX Designer</p>
								</div>
							</div>
							<div className="content-right-header text-end">
								<p>Member since</p>
								<p>01 Juni 2021</p>
							</div>
						</div>
						<div className="body-card d-flex justify-content-between align-items-center">
							<div className="content-left-body">
								<span>Location</span>
								<p>Kantor Sahid</p>
							</div>
							<div className="content-right-body d-flex justify-content-end align-items-end">
								<p>ICO</p>
							</div>
						</div>
					</div>

				</Container>
			</section >

		</>
	)
}

export default CardHero
