import { useState } from "react";
import * as Home from "./styles/topheader";
import Link from "next/link";

export function NavItem({ children, to = "/" }) {
  return (
    <Home.Item>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </Home.Item>
  );
}

export default function TopHead() {
  const [active, setActive] = useState(false);
  return (
    <Home.Header>
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
            <NavItem to="/">CV</NavItem>
          </Home.List>
        </Home.Navi>
      </Home.Container>
    </Home.Header>
  );
}
