import { useState } from "react";
import * as Head from "./styles/header";
import Link from "next/link";

export function NavItem({ children, to = "/" }) {
  return (
    <Head.Item>
      <Link href={to}>
    <a>{children}</a>
      </Link>
    </Head.Item>
  );
}

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <Head.Header>
      <Head.Container>
        <Head.MobiWrap>
          <Head.Logo>Iambadu</Head.Logo>
          <Head.Menu onClick={() => setActive(!active)}>
            <Head.NavIcon active={active} />
          </Head.Menu>
        </Head.MobiWrap>
        <Head.Navi active={active}>
          <Head.List>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">About</NavItem>
            <NavItem to="/">Love</NavItem>
            <NavItem to="/">Job</NavItem>
          </Head.List>
        </Head.Navi>
      </Head.Container>
    </Head.Header>
  );
}
