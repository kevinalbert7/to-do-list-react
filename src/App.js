import React from 'react'

import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)

  }

  // Ajout d'une nouvelle tâche //
  addTask(str) {
    
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