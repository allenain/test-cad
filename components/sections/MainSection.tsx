import React from "react";
import styled from "styled-components";
import ContactButton from "@/components/ui/ContactButton";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import dynamic from "next/dynamic";

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--footer-height);
`;

const HeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 45px 35px;
    background-color: var(--gray-100);
    border: 1px solid var(--gray-200);
    gap: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
`;

const HeroText = styled.div`
    max-width: 390px;
    h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    p {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const GridSection = styled.section`
    padding: 65px 30px;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 90px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px;
    margin-bottom: 90px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
`;
const VideoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #d9d9d9;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;
const Card = styled.div`
    text-align: left;
    max-width: 300px;
    h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    p {
        color: var(--gray-text);
        font-size: 16px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const GreySection = styled.section`
    background-color: var(--gray-100);
    border: 1px solid var(--gray-200);
    padding: 64px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    h2 {
        font-size: 48px;
        font-weight: 600;
    }
`;

const MainSection = () => {
    return (
        <Wrapper>
            <HeroSection>
                <HeroText>
                    <h1>Most important title on the page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        mattis, leo et condimentum ultricies, sem urna convallis metus, vel
                        suscipit nibh lacus tincidunt ante
                    </p>
                </HeroText>
                <VideoWrapper>
                    <LiteYouTubeEmbed
                        id="dQw4w9WgXcQ"
                        title="Rick Astley - Never Gonna Give You Up"
                        poster="hqdefault"
                    />
                </VideoWrapper>
            </HeroSection>
            <GridSection>
                <h2>Also very important title</h2>
                <Grid>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i}>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                mattis, leo et condimentum
                            </p>
                        </Card>
                    ))}
                </Grid>
                <ContactButton href="/contacts">Contact us</ContactButton>
            </GridSection>
            <GreySection>
                <h2>Less important title</h2>
                <ContactButton href="/contacts">Contact us</ContactButton>
            </GreySection>
        </Wrapper>
    );
};

export default MainSection;
