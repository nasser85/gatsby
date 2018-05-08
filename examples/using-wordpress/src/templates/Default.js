import React, { Component } from "react"
import PropTypes from "prop-types"

export default class TemplateDefault extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<h1 dangerouslySetInnerHTML={{ __html: this.props.pageData.title }}></h1>
				<h3>{this.props.pageData.date}</h3>
				<div>{this.props.children}</div>
			</div>
		)
		
	}
}