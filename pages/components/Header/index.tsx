import { useState } from "react";
import * as Home from "./styles/header";
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

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <Home.HeadWrap>
      <Home.Header>
        <Home.Container>
          <Home.MobiWrap>
            <Home.Logo>Iambadu</Home.Logo>
            <Home.Menu onClick={() => setActive(!active)}>
              <Home.NavIcon active={active} />
            </Home.Menu>
          </Home.MobiWrap>
          <Home.Navi active={active}>
            <Home.List>
              <NavItem to="/">Home</NavItem>
              <NavItem to="/">About</NavItem>
              <NavItem to="/">Love</NavItem>
              <NavItem to="/">Job</NavItem>
            </Home.List>
          </Home.Navi>
        </Home.Container>
      </Home.Header>
      <Home.ImgWrap>
        <img src="/img/bgImg.svg" />
      </Home.ImgWrap>
      <Home.HeroWrap>
        <Home.Hero>
          <Home.HeroIn>
            <Home.HeroTitle>Hi there...Welcome</Home.HeroTitle>
            <Home.HeroSubText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate ullam, ad veritatis accusantium numquam illum minus
              dolores. Quo cumque minus atque? Iusto veniam suscipit, quibusdam
              esse quos eos aliquam.
            </Home.HeroSubText>
          </Home.HeroIn>
          <Home.LinkWrap>
            <Home.PBtn>
              <Link href="/">
                <a>Hello</a>
              </Link>
            </Home.PBtn>
            <Home.SBtn>
              <Link href="/">
                <a>Hello</a>
              </Link>
            </Home.SBtn>
          </Home.LinkWrap>
        </Home.Hero>
      </Home.HeroWrap>
      <Home.Work>
        <Home.SectionText>Recent projects</Home.SectionText>
        <Home.SectionTitle>Recent projects</Home.SectionTitle>
        <Home.WorkWrap>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
          <Home.WorkItem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim,
            laborum deleniti, iure labore dolor eligendi beatae veniam
            consequatur minima doloribus, saepe reprehenderit debitis totam
            magnam ullam voluptate ut? Repellendus.
          </Home.WorkItem>
        </Home.WorkWrap>
      </Home.Work>
      <Home.Skills>
        <Home.SectionText>My Skills</Home.SectionText>
        <Home.SectionTitle>What I can do</Home.SectionTitle>
        <Home.Container>
          <Home.SkillWrap>
            <Home.SkillItem>
              <img src="/img/skills/javascript.svg" alt="" />
              <p>Javascript</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/css3.svg" alt="" />
              <p>CSS3</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/typescript.svg" alt="" />
              <p>Typescript</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/github.svg" alt="" />
              <p>Github</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/react.svg" alt="" />
              <p>React</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/wordpress.svg" alt="" />
              <p>Wordpress</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/sass.svg" alt="" />
              <p>Sass</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/next.svg" alt="" />
              <p>Nextjs</p>
            </Home.SkillItem>
            <Home.SkillItem>
              <img src="/img/skills/html5.svg" alt="" />
              <p>HTML</p>
            </Home.SkillItem>
          </Home.SkillWrap>
        </Home.Container>
      </Home.Skills>
    </Home.HeadWrap>
  );
}
