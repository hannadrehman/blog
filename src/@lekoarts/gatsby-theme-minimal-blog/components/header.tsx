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
  console.log(nav);
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const logoImage = isDark ? "/logo-white.svg" : "/logo-black.svg";
  function toggleColorMode(e: any) {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  }

  return (
    <header sx={{ mb: [5, 6] }}>
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
            <img src={logoImage} alt="logo" />
          </TLink>
        </div>
        <Flex>
          {nav.map((item: NavigationProps) => (
            <TLink
              sx={{ mx: [2] }}
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
  );
}

export default Header;
