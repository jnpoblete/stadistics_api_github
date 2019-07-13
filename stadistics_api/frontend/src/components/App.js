import React, {Component} from "react";
import ReactDOM from "react-dom";
//import DataProvider from "./DataProvider";
import Table from "./Table";
import Table_Rad from "./Table_Rad";



//const App = () => (<DataProvider endpoint="stadistics/RAD/"render={data => <Table data={data} />} />);


class App extends Component {
  state = {
      data_actives: [],
      data_week: [],
      data_month: [],
      data_year: [],
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch('stadistics/RAD/')
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => {
        var dataActives = []
        var dataWeek = []
        var dataMonth = []
        var dataYear = []
        for(var i = 0; i < data.length; i++) {
           var date = new Date(data[i].fecha);
           var ahora = new Date();
           var seconds = Math.floor((ahora - date) / 1000);
           console.log(date);
           console.log(ahora);
           console.log(seconds);
           console.log('next')
           if(seconds < 30*60){
            dataActives.push(data[i]);
           }
           if(seconds < 7*24*60*60){
            dataWeek.push(data[i]);
           }
           if(seconds < 30*24*60*60){
            dataMonth.push(data[i]);
           }
           if(seconds < 365*24*60*60){
            dataYear.push(data[i]);
           }
        }
        this.setState({ data_actives: dataActives, data_week: dataWeek, data_month: dataMonth, data_year: dataYear, data: data, loaded: true });
      })
  }

  render() {
    const { data, loaded, placeholder } = this.state;
      if(loaded){
      return (
      <div>
        <div className="active_data">
           <Table data={this.state.data_actives} titulo={'Activos hace menos de 10 minutos'}/>
        </div>
         <div className="week_data">
            <Table data={this.state.data_week} titulo={'Usados hace menos de una semana'}/>
        </div>
         <div className="month_data">
            <Table data={this.state.data_month} titulo={'Usados hace menos de un mes'}/>
        </div>
         <div className="year_data">
           <Table data={this.state.data_year} titulo={'Usados hace menos de un año'}/>
        </div>
        <div className="all_data">
          <Table data={this.state.data} titulo={'All Data'}/>
        </div>
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


