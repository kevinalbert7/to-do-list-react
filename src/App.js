import React from 'react'

import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      tasks: []
    }
    console.log(this)

    this.addTask = this.addTask.bind(this)

  }

  // Ajout d'une nouvelle tâche //
  addTask(str) {
    console.log(str)
    let object = {description: str, status: "To do"}
    this.setState({ tasks: [object, ...this.state.tasks] })
  }

  render() {
    return (
      <div>
          <Form
          addTask={this.addTask}
          // newTask=          
          />
      </div>
    );
  }
}

export default App;