import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavBar extends React.Component {
    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      return (
        <div className="MyNaveBar">
            <h1>Birb Navs</h1>
            <button className="btn btn-danger" onClick={this.logMeOut}><i className="fas fa-kiwi-bird fa-lg"></i>  LogOut</button>
        </div>
      );
    }
}

export default MyNavBar;
