import React from 'react';
import './UI.scss';

class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'purple'
    };
  }

  applyTheme = (theme) => {
    document.body.classList.remove(this.state.theme);
    document.body.classList.add(theme);
    this.setState({ theme });
  }

  render() {
    return (
      <div className="ui-container">
        <h1>Welcome to Thakaamed</h1>
        <p>Choose your theme:</p>
        <button onClick={() => this.applyTheme('purple')}>Purple</button>
        <button onClick={() => this.applyTheme('dark')}>Dark</button>
      </div>
    );
  }
}

export default UI;