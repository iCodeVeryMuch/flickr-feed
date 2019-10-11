import React from "react";
import styled from "styled-components/macro";
import { device } from '../device'

export const FlexCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    border: 1px solid grey;
    margin: 10px;
    min-width: calc(100% - 62px);

    ${device.mobile`
        min-width: calc(50% - 62px);
    `};

    ${device.tablet`
        min-width: calc(33% - 62px);
    `};

    ${device.laptop`
        min-width: calc(25% - 62px);
    `};

    ${device.laptopL`
        min-width: calc(20% - 62px);
    `};

     ${device.desktop`
        min-width: calc(20% - 62px);
    `};

`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Image = styled.img.attrs(props => ({alt: props.alt || "flickr image"}))`
    height: auto;
    width: 100%;
    margin-bottom: 10px;
`;

export const SafeLink = styled.a.attrs({rel: "noopener noreferrer", target: "_blank"})``;

export const NBSP = () => <span>&nbsp;</span>

export const Text = styled.div``;

export const Description = styled.div`
    margin-top: 10px;
    overflow:hidden;
    margin-bottom: 20px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const MarginWrapper = styled.div`
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
`;

