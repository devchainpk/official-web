import React from 'react';
import { Link } from 'react-router';
import { Header as FullPageHeader } from 'react-fullpage';

export default class Header extends React.Component {

	static propTypes = {
		showLoginModal: React.PropTypes.func.isRequired
	}

	constructor() {
		super();
	}

	showLoginModal = () => {
		this.props.showLoginModal(true);
	}

	render() {
		return (
			<FullPageHeader>
				<div className="header">
					<Link to="/#" className="headerItem logo">DevChain Pakistan</Link>
				</div>
			</FullPageHeader>
		)
	}
}
