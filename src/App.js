import React, { Component } from 'react';
import ReactToExcel from 'react-html-table-to-excel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table border="1" id="table-to-xls">
        <thread>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>Age</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Wilson</td>
            <td>34</td>
          </tr>
        </tbody>
        </table>

        <ReactToExcel 
          className='btn'
          table="table-to-xls"
          filename="excelFile"
          sheet="Sheet 1"
          buttonText="EXPORT"
          />

      </div>
    );
  }
}

export default App;
