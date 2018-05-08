import React, { Component } from "react"
import PropTypes from "prop-types"
// import PostIcons from "../components/PostIcons"

import { rhythm } from "../utils/typography"

import Helmet from "react-helmet"
//*********************************************************************************************************************
//
//In PageRouter we actually create a Page Router that determines
//the template of each queried page.  We would set the template variable in the state
//in the component's constructor.  The render function, based on the current state variable, ie. currentTemplate, would
//render our pages with the appropriate component.  We would pass in the current page id
//to that component's props.  This would then be used to query the page's data on the appropriate
//template component page.
//
//*******************************************************
// Example of a single page query with id 1fef4d6c-9c53-57ea-a90a-0c64555a1a5a:
// {
//   wordpressPage(id: {eq: "1fef4d6c-9c53-57ea-a90a-0c64555a1a5a"}) {
//     title
//     content
//     date(formatString: "MMMM DD, YYYY")
//     template
//   page_meta {
//     _UMA_h3_alt
//     _UMA_h1_main
//     _UMA_program
//     _ET_hero_image
//   }
//   }
//   site {
//     id
//     siteMetadata {
//       title
//       subtitle
//     }
//   }
// }
//
//See rough architecture below...


import TemplateHeroImage from "../templates/HeroImage.js"
import TemplateWideLayout from "../templates/WideLayout"
import TemplateStandardLayout from "../templates/StandardLayout"
import TemplateConfirmation from "../templates/Confirmation"
import TemplateDefault from "../templates/Default.js"
import TemplateCancels from "../templates/Cancels.js"

class PageRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.data.wordpressPage,
      currentTemplate: this.props.data.wordpressPage.template,
      content: this.props.data.wordpressPage.content
    }
    this.renderHeroImageTemplate = this.renderHeroImageTemplate.bind(this);
    this.renderWideLayoutTemplate = this.renderWideLayoutTemplate.bind(this);
    this.renderStandardLayoutTemplate = this.renderStandardLayoutTemplate.bind(this);
    this.renderConfirmationTemplate = this.renderConfirmationTemplate.bind(this);
    this.renderDefaultTemplate = this.renderDefaultTemplate.bind(this);
    this.renderCancelsCampaignTemplate = this.renderCancelsCampaignTemplate.bind(this);
  }
  renderHeroImageTemplate() {
    return (
      <TemplateHeroImage pageData={this.state.currentPage}
                         dangerouslySetInnerHTML={{ __html: this.state.content }} ></TemplateHeroImage>
    )
  }
  renderWideLayoutTemplate() {
    return (
      <TemplateWideLayout pageData={this.state.currentPage}
                          dangerouslySetInnerHTML={{ __html: this.state.content }}></TemplateWideLayout>
    )
  }
  renderStandardLayoutTemplate() {
    return (
      <TemplateStandardLayout pageData={this.state.currentPage}
                              dangerouslySetInnerHTML={{ __html: this.state.content }}></TemplateStandardLayout>
    )
  }
  renderConfirmationTemplate() {
    return (
      <TemplateConfirmation pageData={this.state.currentPage}
                            dangerouslySetInnerHTML={{ __html: this.state.content }}></TemplateConfirmation>
    )
  }
  renderDefaultTemplate() {
    return (
      <TemplateDefault pageData={this.state.currentPage}
                       dangerouslySetInnerHTML={{ __html: this.state.content }}></TemplateDefault>
    )
  }
  renderCancelsCampaignTemplate() {
    return (
      <TemplateCancels pageData={this.state.currentPage}
                       dangerouslySetInnerHTML={{ __html: this.state.content }}></TemplateCancels>
    )
  }
  render() {
    if (this.state.currentTemplate == 'template-hero-image.php') {
      return this.renderHeroImageTemplate();
    } else if (this.state.currentTemplate == 'template-wide-layout.php') {
      return this.renderWideLayoutTemplate();
    } else if (this.state.currentTemplate == 'template-standard-layout.php') {
      return this.renderStandardLayoutTemplate();
    } else if (this.state.currentTemplate == 'template-confirmation-template.php') {
      return this.renderConfirmationTemplate();
    } else if (this.state.currentTemplate == 'template-cancels-campaign.php') {
      return this.renderCancelsCampaignTemplate();
    } else {
      return this.renderDefaultTemplate();
    }
  }
}

//******************************************************************************************************************


// class PageTemplate extends Component {
//   render() {
//     const siteMetadata = this.props.data.site.siteMetadata
//     const currentPage = this.props.data.wordpressPage

//     return (
//       <div>
//         <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
//         <p>{currentPage.template }</p>
//         <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
//       </div>
//     )
//   }
// }

export default PageRouter;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "MMMM DD, YYYY")
      template
      page_meta {
        _UMA_module_list
        _UMA_leadVendor
        _UMA_disclaimers
        _UMA_youtube_url
        _UMA_testimonial
        _UMA_header_image
      }
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
