import React, { useEffect, useState } from "react";
import ImageCards from "./components/ImageCards";
import styled from "styled-components/macro";
import { device } from './device'
import jsonp from 'jsonp';
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
body {
    font-size: calc(8px + 0.5vw);
}
`;

export const AppWrapper = styled.div`
    margin: 2vh;
    ${device.tablet`
        margin: 5vh;
    `};
`;

export const Header = styled.header`
    height: auto;
    width: 100%;
    margin-bottom: 5px;
`;

export const getPublicPhotoFeed = () => {
    return new Promise((resolve, reject) => {
        jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags='safe,dog'", {
            param: "jsoncallback"
        }, function (err, data) {
            if (err != null) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

export const formatPhotoFeedData = (item) => {
    return {
        ...item,
        title: item.title.length === 0 ? 'NoTitle' : item.title.substring(0, 20),
        url: item.media.m.replace('m.jpg', 'q.jpg'),
        tags: item.tags.split(' '),
        author: item.author.substring(item.author.indexOf('("') + 2, item.author.indexOf('")')),
        author2: item.author,
        description: item.description.replace(/<(.|\n)*?>/g, '').substring(0, 100)
    }
}

export const App = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPublicPhotoFeed().then((publicPhotoFeed) => {
            const photos = publicPhotoFeed.items.map((item) => {
                return formatPhotoFeedData(item);
            })
            setPhotos(photos);
        });
    }, []);

    return (<AppWrapper>
        <GlobalStyle />
        <Header>Flickr images...</Header>
        <main>
            <ImageCards photos={photos}></ImageCards>
        </main>
    </AppWrapper>);

}
export default App