import {combineReducers} from 'redux'
// Reducers 


const songsReducer = () => {
    return [
        {title:'No scrubs', duration:'4.50'},
        {title:'Macarena', duration:'6.50'},
        {title:'All star', duration:'3.05'},
        {title:'I want it that way... ', duration:'1.50'}
    ]
}


const SelectedSongReducer = (selectedSong=null, action ) => {
    if(action.type === 'SONG_SELECTED'){
        return  action.payload
    };
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:SelectedSongReducer
})