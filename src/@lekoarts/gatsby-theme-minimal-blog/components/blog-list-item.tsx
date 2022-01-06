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
      mb={3}
      sx={{
        border: "1px solid var(--theme-ui-colors-gray-3)",
        p: [2, 3],
        borderRadius: "4px",
        width: ["100%", "100%", "100%", "49%"],
      }}
    >
      <TLink
        as={Link}
        to={post.slug}
        sx={{
          "&:hover": {
            p: { color: "var(--primary-color)" },
            textDecoration: "none",
          },
        }}
      >
        <p
          sx={{
            fontSize: [1, 2, 3],
            color: `text`,
            fontWeight: 700,
            marginTop: "0px",
            marginBottom: "8px",
          }}
        >
          {post.title}
        </p>
        <div
          sx={{
            margin: 0,
            color: `text`,
            a: { color: `text` },
            fontWeight: 500,
            fontSize: 1,
          }}
        >
          {post.tags && <ItemTags tags={post.tags} />}
        </div>
        <text
          sx={{
            color: `text`,
            mt: 1,
            a: { color: `text` },
            fontWeight: 400,
            fontSize: 1,
            lineHeight: 1.5,
          }}
        >
          {post.description}
        </text>
        <p sx={{ color: `text`, fontWeight: 700 }}>Read more</p>
      </TLink>
    </Box>
  );
}

export default BlogListItem;
