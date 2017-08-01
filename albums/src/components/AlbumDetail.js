import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';

import Card from '../layouts/Card';
import CardSection from './CardSection';
import BuyButton from './BuyButton';

// functional component
const AlbumDetail = ({ album }) => {
  const { artist, image, thumbnail_image, title, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnail}>
          <Image style={{ height: 50, width: 50 }} source={{ uri: thumbnail_image }} />
        </View>

        <View style={styles.artistInfo}>
          <Text style={{ fontSize: 18 }}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={{ height: 300, flex: 1, width: null }} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <BuyButton action={() => Linking.openURL(url)}>Buy Now</BuyButton>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  thumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  artistInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});
