import { useRouter } from "next/router";
import Footer from "../components/footer";
import {
  SectionTitle,
  Section,
  SectionWrap,
} from "../components/Header/styles/header";
import TopHead from "../components/topheader";
import { Container } from "../components/topheader/styles/topheader";
import * as W from "./styles/work";

import workdata from "../../utils/workdata.json";

export default function Project({ data, redirect }) {
  let router = useRouter();
  if (redirect) {
    router.push("/404");
  }
  return (
    <>
      <TopHead />
      <W.TitleWrap>
        <Container>
          <W.Title>{data.title}</W.Title>
        </Container>
      </W.TitleWrap>
      <W.SideWrap>
        <SectionTitle>Overview</SectionTitle>
        <Container>
          <SectionWrap>
            <Section>
              <W.WorkTWrap>
                <W.WorkText>{data.description}</W.WorkText>
                <W.WorkBtn>View Code</W.WorkBtn>
                <W.WorkBtn>Go to Website</W.WorkBtn>
              </W.WorkTWrap>
            </Section>
            <Section>
              <W.WorkImg src="https://loremflickr.com/640/450" alt="" />
            </Section>
          </SectionWrap>
        </Container>
      </W.SideWrap>

      <W.SectWrp>
        <W.SideWrap>
          <SectionTitle>Technologies used</SectionTitle>
          <Container>
            <SectionWrap>
              <Section>
                <W.WorkImg src="https://loremflickr.com/640/450" alt="" />
              </Section>
              <Section>
                <W.WorkList>
                  {data.tools.map((item) => {
                    return <W.WorkListItem>{item}</W.WorkListItem>;
                  })}
                </W.WorkList>
              </Section>
            </SectionWrap>
          </Container>
        </W.SideWrap>
      </W.SectWrp>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { url } = params;
  try {
    const data = workdata.work.filter((item) => item.url === url);
    return {
      props: { data },
    };
  } catch (err) {
    return { props: { data: {}, redirect: true } };
  }
}
