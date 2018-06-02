import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import './InfoPage.css';

const mapStateToProps = state => ({
  user: state.user,
  game: state.game,
});

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.game.position || [
        [' ', 'x', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
    }
  }
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'GET_BOARD' });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
    // if (this.props.user.userName) {
    //   setTimeout(() => {
    //     this.props.dispatch({ type: 'GET_BOARD' });
    //   }, 5000);
    // }
  }

  render() {
    let content = null;

    if (this.props.user.userName && this.props.game.position) {
      content = (
        <table>
          <tbody>
            {this.props.game.position.map((row, i) => (
              <tr key={i}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
