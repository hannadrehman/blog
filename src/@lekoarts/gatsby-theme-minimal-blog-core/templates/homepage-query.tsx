import { graphql } from "gatsby";
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage";

export default HomepageComponent;
console.log("god daaaamn");

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, limit: 6) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
