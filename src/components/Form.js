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
        // console.log(e.target.value)
      this.setState({ task: this.props.addTask })
    }

    // soumis au click & doit appeler la méthode add.Task//
    handleSubmit(e) {
        e.preventDefault()
        this.setState({ handleSubmit: e.target.value })
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fs-1">To do list</label>
                        <input 
                        className="form-control"
                        onChange={this.handleTaskDescriptionChange}
                        />
                        <div className="form-text"></div>
                        <button type="submit" className="btn btn-primary">Ajouter à ma liste</button>
                    </div>
                </form>   
            </div>
        );
    }
}

export default Form;