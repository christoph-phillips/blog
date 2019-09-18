
import PropTypes from "prop-types"
import React from "react"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled, { css } from 'styled-components'


const PostBackground = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100px;
  width: 200px;
  margin: 0px auto;
`

const portfolioData = [
  {
    name: 'Arctic Intelligence',
    id: 'arcticintelligence',
    title: 'Wordpress Developer',
    details: 'Design, CSS, SASS, PHP'
  },
  {
    name: 'Peak Studios',
    id: 'peakstudios',
    title: 'Full Stack Developer',
    details: 'Project Management, React, Node'
  },
  {
    name: 'GGS Drive Inn',
    id: 'ggsdriveinn',
    title: 'Wordpress Developer',
    details: 'Design, SASS, Hosting'
  },
  {
    name: 'IGLU',
    id: 'iglu',
    title: 'Full Stack Developer',
    details: 'React, Node, SASS'
  },
  {
    name: 'Fun Academy',
    id: 'funacademy',
    title: 'Lead Full Stack Developer',
    details: 'React, Node, Animation, Sound'
  },
  {
    name: 'Moreyes Finland',
    id: 'moreyes',
    title: 'CTO',
    details: 'Project Management, Recruitment, Technical Lead'
  },
  {
    name: 'Sumo Paint',
    id: 'sumopaint',
    title: 'Backend Developer',
    details: 'Node, Socket.io'
  },
  {
    name: 'Songhi',
    id: 'songhi',
    title: 'Lead Full Stack Developer',
    details: 'React, Node, GraphQL, Web Audio API'
  },
  {
    name: 'Sumo Tunes',
    id: 'sumotunes',
    title: 'Full Stack Developer',
    details: 'Web Audio API, React, Node'
  }
]

const portfolioItem = item => (
  <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="5th August 2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
    <div style={{ width: '150px', height: '100px'}}>
    <PostBackground
      Tag="div"
      className={'test'}
      fluid={item.image}
      backgroundColor={`#040e18`}
      style={{ height: '100%', width: '100%'}}
    >
    </PostBackground>
    </div>
    <h4 className="vertical-timeline-element-title">{`${item.title} @${item.id}`}</h4>
    <p>
     {item.details}
    </p>
  </VerticalTimelineElement>
)

const Portfolio = (props) => {  return (
  <VerticalTimeline>
  {portfolioData.reverse().map(portfolioItem)}
</VerticalTimeline>
)
}

Portfolio.propTypes = {
  siteTitle: PropTypes.string,
}

Portfolio.defaultProps = {
  siteTitle: ``,
}



export default Portfolio

export const query = graphql`
  {
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`
