import React from "react";
import DropDown from "./DropDown";
import { FlexWrapper, FlexCard, Image,SafeLink, Text, NBSP, Break, Description, MarginWrapper } from './styled'

export const ImageCard = ({photo}) => {
    return (
            <FlexCard>
                <FlexWrapper>
                <Image alt={photo.title} src={photo.url}/>
                <SafeLink href={photo.url}>{photo.title}</SafeLink>
                <NBSP/>
                <Text>{"by"}</Text>
                <NBSP/>
                <SafeLink href={photo.url}>{photo.author}</SafeLink>
                <Break></Break>
                <Description>{photo.description}</Description>
                <Break></Break>
                </FlexWrapper>
                <MarginWrapper>
                    <DropDown
                        choices={photo.tags}
                        onSelectDropDownItem={() => null} />
                </MarginWrapper>
    </FlexCard>);
}
export default ImageCard

