import React, { Component } from "react";
import Table from "./publicPages/table/Table";

export default class App extends Component {

  render() {

    return (
      <div>
        <Table/>
      </div>
  );
 }
}


// const request = async () => {
//     const response = await fetch('https://api.com/values/1');
//     const json = await response.json();
//     console.log(json);
// }

// request();