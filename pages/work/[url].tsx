import Footer from "../components/footer";
import {SectionTitle,TitleWrap, Section,SectionWrap,} from "../components/home/styles/home";
import TopHead from "../components/topheader";
import { Container } from "../components/topheader/styles/topheader";
import * as W from "./styles/work";

import workdata from "../../utils/workdata.json";

export default function Project({ data }) {

  return (
    <>
      <TopHead title={data.title} />
      <W.TitleWrap>
        <Container>
          <W.Title>{data.title}</W.Title>
        </Container>
      </W.TitleWrap>
      <W.SideWrap>
        <TitleWrap>
          <SectionTitle>Overview</SectionTitle>
        </TitleWrap>
        <Container>
          <SectionWrap>
            <Section>
              <W.WorkTWrap>
                <W.WorkText>{data.description}</W.WorkText>
                <W.WorkBtn href={data.github}>View Code</W.WorkBtn>
                <W.WorkBtn drk href={data.link}>Go to Website</W.WorkBtn>
              </W.WorkTWrap>
            </Section>
            <Section>
              <W.WorkImg src={`/img/${data.image1}`} alt="" />
            </Section>
          </SectionWrap>
        </Container>
      </W.SideWrap>

      <W.SectWrp>
        <W.SideWrap>
          <TitleWrap>
            <SectionTitle>Technologies used</SectionTitle>
          </TitleWrap>
          <Container>
            <SectionWrap>
              <Section>
                <W.WorkImg src={`/img/${data.image2}`} alt="" />
              </Section>
              <Section>
                <W.WorkList>
                  {data.tools.map((item, i) => {
                    return <W.WorkListItem key={i}>{item}</W.WorkListItem>;
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

export async function getStaticPaths() {
  const paths = workdata.work.map((work) => ({
    params: { url: work.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { url } = params;

  const data = workdata.work.filter((item) => item.url === url);
  return {
    props: { data: data[0] },
  };
}
