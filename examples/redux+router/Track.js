import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTracks } from './actions/tracks';

class Track extends React.Component{
    constructor(props){
        super(props);
        console.log('trackProps',props);
    }
    getTrackName(){
        let track = this.props.tracks
            .find(t=>t.id===+this.props.match.params.id);
        if(track){
            return track.name;
        }else{
            return 'not found';
        }
    }
    componentWillUpdate(){
        console.log('update');
        //debugger;
    }
    render(){
        return <div>
            <h1>Track: {this.getTrackName()}</h1>
            <button onClick={this.props.onGetTracks}>Get From Api</button>
        </div>;
    }
}

export default connect(
    (state,ownProps) => {
        console.log('ownProps',ownProps);
        return {tracks:state.tracks};
    },
    dispatch => ({})
)(Track);