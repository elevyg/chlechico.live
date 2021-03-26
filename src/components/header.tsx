/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "gatsby";
import { mq, theme } from "../../utils";
import { StaticImage } from "gatsby-plugin-image";
import NavLink from "./NavLink";
import { createStyles } from "../types/emotion-styles";

const Header = () => (
  <header css={styles.container}>
    <div css={styles.navLinkContainerLeft}>
      <NavLink to="#about" title="Nosotros" />
      <NavLink to="#orchard" title="Huerta" />
    </div>
    <div css={styles.navLinkContainerRight}>
      <NavLink to="#find-us" title="Ubicación" />
      <NavLink to="#volunteers" title="Voluntariados" />
    </div>
    <div style={styles.logoContainer}>
      <Link
        to="/"
        css={{
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../assets/logo.png"
          width={250}
          alt="Huerto Jeinimeni"
          quality={100}
        />
      </Link>
    </div>
  </header>
);

export default Header;

const styles = createStyles({
  container: {
    backgroundColor: theme.palette.common.white,
    height: "10vh",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  navLinkContainerLeft: {
    display: "none",
    [mq("medium")]: {
      display: "flex",
      flex: 1,
      marginRight: 125,
      justifyContent: "flex-end",
    },
  },
  navLinkContainerRight: {
    display: "none",
    [mq("medium")]: {
      display: "flex",
      flex: 1,
      marginLeft: 125,
      justifyContent: "flex-start",
    },
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    zIndex: 20,
    justifySelf: "center",
  },
});
