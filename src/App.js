import React from 'react'

import Form from './Component/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      tasks: [""]
    }

  }

  render() {
    return (
      <div>
          <Form/>
      </div>
    );
  }
}

export default App;