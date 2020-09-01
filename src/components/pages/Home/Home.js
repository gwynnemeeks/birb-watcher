import React from 'react';

// import { auth } from 'firebase';
import authData from '../../../helpers/data/authData';
import birbsData from '../../../helpers/data/birbsData';
import BirbCard from '../../shared/BirbCard/BirbCard';

// go get all birbs by uid (convert firebaseCollection helper)
// create birbData helper getBirbByUid
// getUid function for current user
// set state : [], then fill with birbs => componentDidMount
// map over birbs (pass birb as props) and create birb cards down in render
// make birb card component
// prop types for birbShape

class Home extends React.Component {
    state = {
      birbs: [],
    }

    componentDidMount() {
      birbsData.getBirbsByUid(authData.getUid())
        .then((birbs) => this.setState({ birbs }))
        .catch((err) => console.error('get birbs broke', err));
    }

    render() {
      const { birbs } = this.state;

      const birbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb} />);

      return (
      <div className="Home">
        <div className="card-columns"></div>
        {birbCards}
      </div>
      );
    }
}

export default Home;
