import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components/macro";

export const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ImageCards = ({photos}) => {

    if (photos.length > 0)  {
        return (<FlexWrapper>
            {photos.map((photo, index) => <ImageCard key={index} photo={photo}></ImageCard>)}
        </FlexWrapper>);
    }
    else {
        return <div></div>
    }

}
export default ImageCards

