import React, { Component } from "react";
import PropTypes from "prop-types";


class App extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data: data, loaded: true });
      })
  }

  render() {
    const { data, loaded, placeholder } = this.state;
      if(loaded){
      return (
        <div>
          {this.state.data.map((registro) => (
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{registro.clave_establecida}</h6>
              </div>
            </div>
          ))}

        </div>
      )
      }
      else{
        return <p>{placeholder}</p>
      }
    }
}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;