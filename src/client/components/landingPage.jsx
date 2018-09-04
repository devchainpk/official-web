import React from 'react';
import { Link } from 'react-router'
import '../css/grid';
import '../css/landingPage';
import { SectionsContainer, Section, Footer } from 'react-fullpage';
import Slider from 'react-slick'

export default class extends React.Component {
	constructor() {
		super();
		var placeholder = 'https://avatars2.githubusercontent.com/u/25576425?s=400&u=0d50ddc58687156c38865a392be6413c741e3e59&v=4';

		this.state = {
			sections: [
				{
					bg: '',
					id: 'main',
					title: 'DevChain Pakistan',
					slogan: 'Educate People all over the Pakistan'
				},
				{
					bg: '',
					id: 'about-us',
					title: 'About Us',
					description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				}
			],
			team: {
				id: 'Team',
				title: 'Our Team',
				members: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			}
		};
	}

	animateAndScroll(e) {
		$('html, body').animate({
			scrollTop: $(e.target.id).offset().top
		}, 1000);
	}

	renderTeam() {
		const settings = {
			className: "center",
			centerMode: true,
			// infinite: true,
			centerPadding: "60px",
			slidesToShow: 1,
			speed: 500,
			dots: true
		};
		return (
			<div
				id={this.state.team.id}
				className={"grid-row-item-row section-header event"}
			>
				<div className="grid-item subtitle">{this.state.team.title}</div>
				<div className="grid">
					<div className="grid-row-item-col">
						<Slider {...settings}>
							{
								this.state.team.members.map(item => (
									<div style={{ position: 'relative' }}>
										<img src={item.img} style={{
											width: '100%',
											height: '100%',
											position: "absolute",
											top: 0,
											right: 0
										}} />
										<div style={{
											padding: 10,
											backgroundColor: 'rgba(0,0,0,.5)',
											zIndex: 1,
											position: "absolute",
											bottom:0,
											right:0,
											left:0,
											color: '#fff',
											textShadow: '1px 1px 5px #000'
										}}>
											<h3>{item.title}</h3>
											<h3>{item.description}</h3>
										</div>
									</div>
								))
							}
						</Slider>
					</div>
				</div>
			</div>
		)
	}
	render() {
		let options = {
			sectionClassName: 'section',
			anchors: this.state.sections.map(section => section.id).concat(['our-team']),
			scrollBar: false,
			navigation: true,
			verticalAlign: true,
			arrowNavigation: true
		};
		let titles = this.state.sections.map(({ id, title }) => ({ id, title })).concat([({ id: 'our-team', title: 'Our Team' })])
		return (
			<div className="landing-page grid">
				<SectionsContainer  {...options}>
					{this.state.sections.map(item => (
						<Section color={item.bg || '#18bc9c'}>
							<div className="main-title-container">
								<div className="grid-row-item-row title-row">
									{item.title && <div className="grid-item title">{item.title}</div>}
									{item.slogan && <div className="grid-item slogan">{item.slogan}</div>}
									{item.subtitle && <div className="grid-item subtitle">{item.subtitle}</div>}
									{item.description && <div className="grid-item description">{item.description}</div>}
								</div>
							</div>
						</Section>
					))}
					<Section color="#A7DBD8">
						{this.renderTeam()}
					</Section>
				</SectionsContainer>
				<Footer>
					<div className="grid-row-item-row footer">
						<div className="grid-row-item-col subfooter">
							{titles.map(
								({ title, id }) => (
									<div className="grid-item"><a href={"#" + id}>{title}</a></div>
								)
							)}
							<div className="grid-item"><Link to="/help">Help</Link></div>
						</div>
						<div className="grid-item">Copyright <a href="https://github.com/devchainpk">@DevChainPK</a> {new Date().getFullYear()}</div>
					</div>
				</Footer>
			</div>
		);
	}
}