import React from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import AlbumDetail from '../components/AlbumDetail';

// class component becuase of lifecycle methods and internal state
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      .catch(e => console.log(e));
  }

  renderAlbumsHelper() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbumsHelper() }
      </ScrollView>
    );
  }
}
