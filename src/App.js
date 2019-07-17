import React, { Component } from 'react';
import './App.css';

import { ChatBot } from 'aws-amplify-react';

class App extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed');
      return;
    }
    alert('Success:' + JSON.stringify(confirmation, null, 2));
    return 'Reservation booked. Thank you! What would you like to do next?';
  }

  render() {
    return (
      <div className='App'>
        <ChatBot
          title='My React Bot'
          botName='BookTripBotMOBILEHUB'
          welcomeMessage='Welcome, how can I help you today?'
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
        />
      </div>
    );
  }
}

export default App;
