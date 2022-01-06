/** @jsx jsx */
import * as React from "react";
import { jsx, Link as TLink, Box } from "theme-ui";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";

type BlogListItemProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  };
  showTags?: boolean;
};

function BlogListItem({ post }: BlogListItemProps) {
  return (
    <Box
      mb={4}
      sx={{
        boxShadow: "0px 3px 6px #00000033",
        p: [2, 3],
        borderRadius: "8px",
      }}
    >
      <TLink
        as={Link}
        to={post.slug}
        sx={{ fontSize: [1, 2, 3], color: `text` }}
      >
        {post.title}
      </TLink>
      <p
        sx={{
          color: `secondary`,
          mt: 1,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  );
}

export default BlogListItem;
