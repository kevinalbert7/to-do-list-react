import React from 'react'

import Form from './components/Form'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      tasks: []
    }
    console.log("le state de tasks:", this.state.tasks)

    this.addTask = this.addTask.bind(this)

  }

  // Ajout d'une nouvelle tâche //
  addTask(str) {
    let object = {description: str, status: "To do"}
    this.setState({ tasks: [object, ...this.state.tasks] })
  }

  render() {
    return (
      <div>
          <Form
          addTask={this.addTask}        
          />
          <List
          tasks={this.tasks}
          />
      </div>
    );
  }
}

export default App;