import Footer from "../footer";
import { SectionTitle, Section, SectionWrap } from "../Header/styles/header";
import TopHead from "../topheader";
import { Container } from "../topheader/styles/topheader";
import * as P from "./styles/project";

export default function Project() {
  return (
    <>
      <TopHead />
      <P.TitleWrap>
        <Container>
          <P.Title>Netflix Clone</P.Title>
        </Container>
      </P.TitleWrap>
      <P.SideWrap>
        <SectionTitle>Overview</SectionTitle>
        <Container>
          <SectionWrap>
            <Section>
              <P.WorkTWrap>
                <P.WorkText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  cupiditate perspiciatis deleniti veritatis totam aliquid
                  ratione molestias alias dignissimos incidunt iste, nam
                  deserunt nemo ab facilis officiis quibusdam, at odio.
                </P.WorkText>
                <P.WorkBtn>View Code</P.WorkBtn>
                <P.WorkBtn>Go to Website</P.WorkBtn>
              </P.WorkTWrap>
            </Section>
            <Section>
              <P.WorkImg src="https://loremflickr.com/640/450" alt="" />
            </Section>
          </SectionWrap>
        </Container>
      </P.SideWrap>

      <P.SectWrp>
        <P.SideWrap>
          <SectionTitle>Technologies used</SectionTitle>
          <Container>
            <SectionWrap>
              <Section>
                <P.WorkImg src="https://loremflickr.com/640/450" alt="" />
              </Section>
              <Section>
                <P.WorkList>
                  <P.WorkListItem>Reactjs</P.WorkListItem>
                  <P.WorkListItem>Nextjs</P.WorkListItem>
                  <P.WorkListItem>Firebase Authentication</P.WorkListItem>
                  <P.WorkListItem>Hello</P.WorkListItem>
                </P.WorkList>
              </Section>
            </SectionWrap>
          </Container>
        </P.SideWrap>
      </P.SectWrp>
      <Footer />
    </>
  );
}
