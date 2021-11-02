import React from 'react';

class Form extends React.Component {
    constructor () {
        super ()

        this.state = {
            task: ""
        }
        
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // changement de tâches //
    handleTaskDescriptionChange(e) {
        console.log("Données de l'input:", this)
        this.setState({ task: e.target.value })
    }

    // soumis au click & doit appeler la méthode addTask
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ task: e.target.value})
        this.state = { task: ""}
        // this.setState({ addTask: task.target.value})
        // console.log(task)
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fs-1">To do list</label>
                        <input 
                        className="form-control"
                        value={this.state.task || ""}
                        onChange={this.handleTaskDescriptionChange}
                        />
                        <div className="form-text"></div>
                        <button type="submit" className="btn btn-primary">Ajouter à ma liste</button>
                    </div>
                    <div>
                        {this.state.task}
                    </div>
                </form>   
            </div>
        );
    }
}

export default Form;