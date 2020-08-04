import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myProfile: {},
      followerList: [],
      followers: []
    }
  }

  componentDidMount() {
    let array = []
    axios
      .get('https://api.github.com/users/tdefriess')
      .then(res => {
        console.log('profile call', res);
        this.setState({
          myProfile: res.data
        })
      })
      .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/tdefriess/followers')
      .then(res => {
        console.log('follower call', res)
        this.setState({
          followerList: res.data
        })
        this.state.followerList.map(follower => {
          axios
            .get(`https://api.github.com/users/${follower.login}`)
            .then(res => {
              array.push(res.data);
              // console.log(array);
              this.setState({
                followers: array
              })
              console.log(this.state.followers)
            })
            .catch(err => console.log(err));
        })
      })
      .catch(err => console.log(err))      
  }

  render() {
    return (
      <div className="App">
        <UserCard profile={this.state.myProfile} />
        <Followers followerList={this.state.followers} />
      </div>
    )
  };
}

export default App;
