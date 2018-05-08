import React, { Component } from "react"
import PropTypes from "prop-types"

export default class TemplateCancels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		const page = this.props.pageData
		const meta = this.props.pageData.page_meta
		console.log(meta);
		return (
			<div>
				<h1>{page.title}</h1>
				<img src={meta._UMA_header_image} width={'100%'} />
				<h5>{'I am a Cancels Campaign Layout'}</h5>
				<div>{this.props.children}</div>
			</div>
		)
	}
}