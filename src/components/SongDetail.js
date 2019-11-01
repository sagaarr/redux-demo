import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({SongSelected}) => {
    if(!SongSelected){return <h4>Select a song!!</h4>}
    
    return (
        <div>
            <h4>{SongSelected.title}</h4>
            <h4>{SongSelected.duration}</h4>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {SongSelected: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
