// Action creator 

// As the user clicks on songs list to get its detail its an action
export const SelectSong = (song) => {
    // Return action 
    return {
        type:'SONG_SELECTED',
        payload: song
    };
};


