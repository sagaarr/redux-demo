import React, { Component } from 'react';
import {connect} from 'react-redux';
import { SelectSong } from '../actions'
class SongList extends Component {
    renderlist() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.SelectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render() { 
        return (
            <div className="ui divided list">{this.renderlist()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {songs: state.songs};
}


export default connect(mapStateToProps, { SelectSong })(SongList);
