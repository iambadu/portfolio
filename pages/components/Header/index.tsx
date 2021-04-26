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
    <Head.HeadWrap>
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
        <Head.ImgWrap>
          <img src="/img/bgImg.svg" />
        </Head.ImgWrap>
        <Head.HeroWrap>
          <Head.Hero>
            <Head.HeroIn>
              <Head.HeroTitle>Hi there...Welcome</Head.HeroTitle>
              <Head.HeroSubText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                cupiditate ullam, ad veritatis accusantium numquam illum minus
                dolores. Quo cumque minus atque? Iusto veniam suscipit,
                quibusdam esse quos eos aliquam.
              </Head.HeroSubText>
            </Head.HeroIn>
            <Head.LinkWrap>
              <Head.PBtn><Link href="/"><a>Hello</a></Link></Head.PBtn>              
              <Head.SBtn><Link href="/"><a>Hello</a></Link></Head.SBtn>              
            </Head.LinkWrap>
          </Head.Hero>
        </Head.HeroWrap>
      <Head.Work>
        <Head.WorkWrap>
          <Head.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Head.WorkItem>
          <Head.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Head.WorkItem>
          <Head.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Head.WorkItem>
        </Head.WorkWrap>
      </Head.Work>
  </Head.HeadWrap>

  );
}
