/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div
        sx={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "repeat(5,1fr)",
        }}
      >
        <Link href="https://twitter.com/hannad_rehman" target="_blank">
          <img src="/twitter.png" width="24px" />
        </Link>
        <Link href="https://www.linkedin.com/in/hannad-rehman/" target="_blank">
          <img src="/linkedin.png" width="24px" />
        </Link>
        <Link href="https://github.com/hannadrehman" target="_blank">
          <img src="/github.png" width="24px" />
        </Link>
        <Link
          href="https://discordapp.com/users/705906985798729760/"
          target="_blank"
        >
          <img src="/discord.png" width="24px" />
        </Link>
        <Link
          href="https://stackoverflow.com/users/4214329/hannad-rehman"
          target="_blank"
        >
          <img src="/stack-overflow.png" width="24px" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
