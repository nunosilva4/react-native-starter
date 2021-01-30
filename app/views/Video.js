import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Video() {

    const [videoList, setVideoList] = useState({ listLoaded: false });

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=memes&type=video&key=AIzaSyB9kotAdsKVnxdbdfpL-hRWjuLjFwEYxKQ')
            .then((response) => response.json())
            .then((json) => {
                setVideoList({
                    listLoaded: true,
                    list: Array.from(json.items)
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <View>
            {videoList.listLoaded && (
                <View style={{ paddingTop: 30 }}>
                    <FlatList
                        keyExtractor={x => Math.random().toString()}
                        data={videoList.list}
                        renderItem={({ item }) =>
                            <TubeItem
                                title={item.snippet.title}
                                id={item.id.videoId}
                                imageSrc={item.snippet.thumbnails.high.url}
                            />
                        }
                    />
                </View>
            )}

            {!videoList.listLoaded && (
                <View style={{ paddingTop: 30 }}>
                    <Text style={{fontSize: 25, textAlign: 'center'}}>LOADING</Text>
                </View>
            )}

        </View>
    )
}

export function TubeItem(props) {

    let onPress = () => console.log(props.id);

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Image
                    style={{ width: '100%', height: 200 }}
                    source={{ uri: props.imageSrc }}
                />
                <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
                    {props.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}