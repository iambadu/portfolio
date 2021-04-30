import { Container, Header } from "../topheader/styles/topheader";
import styled from 'styled-components';

export default function Footer() {
    let date = new Date();
    return (
        <Header>
            <Container>
                <FooterText>&copy; {date.getFullYear()} Emmanuel B. Sarpong. All rights reserved</FooterText>
            </Container>
        </Header>
    )
};


export const FooterText = styled.p`
color: #fff;
margin: auto;
font-size:14px;
padding: 8px 0;
`;