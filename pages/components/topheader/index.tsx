import { useState } from "react";
import * as Home from "./styles/topheader";
import Link from "next/link";
import Head from "next/head";

export function NavItem({ children, to = "/" }) {
  return (
    <Home.Item>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </Home.Item>
  );
}

export default function TopHead({title}) {
  const [active, setActive] = useState(false);
  return (
    <Home.Header>
      <Head>
        <title>Iambadu.com | {title}</title>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon"/>
        <meta name="title" content="Iambadu.com | Emmanuel Badu Sarpong - Frontend Developer"/>
        <meta name="description" content="Emmanuel Badu Sarpong is a passionate frontend developer with over 3 years of experience. Building great web experiences for all devices."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.iambadu.com/"/>
        <meta property="og:title" content="Iambadu.com | Emmanuel Badu Sarpong - Frontend Developer"/>
        <meta property="og:description" content="Emmanuel Badu Sarpong is a passionate frontend developer with over 3 years of experience. Building great web experiences for all devices."/>
        <meta property="og:image" content="/img/ogimg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.iambadu.com/"/>
        <meta property="twitter:title" content="Iambadu.com | Emmanuel Badu Sarpong - Frontend Developer"/>
        <meta property="twitter:description" content="Emmanuel Badu Sarpong is a passionate frontend developer with over 3 years of experience. Building great web experiences for all devices."/>
        <meta property="twitter:image" content="/img/ogimg.png"/>
      </Head>
      <Home.Container>
        <Home.MobiWrap>
          <Home.Logo>
            <Link href="/">
              <a>
                <img src="/img/logo.svg" alt="" />
              </a>
            </Link>
          </Home.Logo>
          <Home.Menu onClick={() => setActive(!active)}>
            <Home.NavIcon active={active} />
          </Home.Menu>
        </Home.MobiWrap>
        <Home.Navi active={active}>
          <Home.List>
            <NavItem to="/#work">Work</NavItem>
            <NavItem to="/#about">About me</NavItem>
            {/* <NavItem to="/">CV</NavItem> */}
          </Home.List>
        </Home.Navi>
      </Home.Container>
    </Home.Header>
  );
}
