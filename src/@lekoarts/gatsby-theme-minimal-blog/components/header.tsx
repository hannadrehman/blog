/** @jsx jsx */

import { jsx, useColorMode, Flex, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle";

function AsLink(props: any) {
  return <Link activeClassName="active" {...props} />;
}

type NavigationProps = {
  title: string;
  slug: string;
};

function Header(): any {
  const { navigation: nav, basePath } = useMinimalBlogConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  function toggleColorMode(e: any) {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  }

  return (
    <nav
      sx={{
        px: [4],
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "var(--theme-ui-colors-background)",
        zIndex: 2,
        maxWidth: "1024px",
        margin: "0 auto",
      }}
    >
      <header
        sx={{
          mb: [3, 0, 0, 0],
          py: 1,
        }}
      >
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            flexDirection: ["column", "row"],
          }}
        >
          <div>
            <TLink
              to={replaceSlashes(`/${basePath}`)}
              as={AsLink}
              aria-label={`HannadRehman - Back to home`}
            >
              <img width="100%" src="/logo.svg" alt="logo" />
            </TLink>
          </div>
          <Flex>
            {nav.map((item: NavigationProps) => (
              <TLink
                sx={{
                  mx: [2],
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: isDark ? "white" : "primary-color",
                }}
                key={item.slug}
                as={AsLink}
                to={replaceSlashes(`/${basePath}/${item.slug}`)}
              >
                {item.title}
              </TLink>
            ))}
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
          </Flex>
        </Flex>
      </header>
    </nav>
  );
}

export default Header;
