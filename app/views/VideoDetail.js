import React from 'react';
import { WebView } from 'react-native-webview';

export default function VideoDetail({ route }) {

    let youtubeId = route.params ? route.params.youtubeId : 'NO VIDEO';
    let url = `https://www.youtube.com/embed/${youtubeId}`;

    return (
        <WebView
            style={{ marginTp: 20 }}
            javaScriptEnabled={true}
            source={{ uri: url }}
        />
    )
}