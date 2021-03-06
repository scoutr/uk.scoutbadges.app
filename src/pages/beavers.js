import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class BeaversPage extends React.Component {
    render() {
        const coreBadges = this.props.data.coreBadges.edges
        const challengeBadges = this.props.data.challengeBadges.edges
        const activityBadges = this.props.data.activityBadges.edges
        const stagedBadges = this.props.data.stagedBadges.edges

        return (
          <Layout>
            <h1>Beavers</h1>
              <ul>
                  <li><Link to={"/promise/beaver-promise"}>The Beaver Scout Promise</Link></li>
              </ul>
              <h2>Core Badges</h2>
              <ul>
                  {coreBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
              <h2>Chief Scout's Bronze Award</h2>
              <ul>
                  <li><Link to={"/badges/beavers/award/bronze"}>Chief Scout's Bronze Award</Link></li>
                  {challengeBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
              <h2>Activity Badges</h2>
              <ul>
                  {activityBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                      ))}
              </ul>
              <h2>Staged Activity Badges</h2>
              <ul>
                  {stagedBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
          </Layout>
      )
    }
}

export default BeaversPage

export const pageQuery = graphql`
query {
    coreBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { section: { eq: "beavers" } type: { eq: "core" } } },
      sort: {fields: [frontmatter___title], order: ASC},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    challengeBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { section: { eq: "beavers" } type: { eq: "challenge" } } },
      sort: {fields: [frontmatter___title], order: ASC},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    activityBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { section: { eq: "beavers" } type: { eq: "activity" } } },
      sort: {fields: [frontmatter___title], order: ASC},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    stagedBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { type: { eq: "staged" } } },
      sort: {fields: [frontmatter___title], order: ASC},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
