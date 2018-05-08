import React, { Component } from "react"
import PropTypes from "prop-types"

export default class TemplateHeroImage extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.pageData)
		this.state = {
			meta: this.props.pageData.page_meta
		};
	}
	render() {
		const page = this.props.pageData
		const meta = this.props.pageData.page_meta
		return (
			<div><h1>{page.title}</h1></div>
		)
		
	}
}