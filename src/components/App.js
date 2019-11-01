import React from 'react';
// import {SelectSong} from '../actions'
import SongList from './songList'
import SongDetail from './SongDetail'
class App extends React.Component {
    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                    <SongList/>
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;