import React, { Component } from "react";
import Counter from "./components/counter.jsx";
import ConditionalRender from "./components/conditionalRender.jsx";
import Movies from "./components/movies.jsx";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navBar.jsx";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log("App - Constructor");
  }

  compomnentDidUpdate() {
    console.log("App - Updated");
  }

  compomenDidUnmount() {
    console.log("App - Unmounted");
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };


  handDecrement = (counter) => {handleIncrement = (counter) => {
    console.log("Increment call", counter); // Log the increment call for debugging
    const counters = [...this.state.counters]; // Create a copy of the counters array from state
    const index = counters.indexOf(counter); // Find the index of the counter to increment
    counters[index] = { ...counter }; // Create a copy of the counter object
    counters[index].value++; // Increment the value of the copied counter
    this.setState({ counters }); // Update the state with the modified counters array
  };

    console.log("Decrement call", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // render() {
  //   return (
  //     <React.Fragment>
  //       <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
  //       <main className="container">
  //         <Counters
  //           counters={this.state.counters}
  //           onReset={this.handleReset}
  //           onIncrement={this.handleIncrement}
  //           onDelete={this.handleDelete}
  //           onDecremente={this.handDecrement}
  //         />
  //       </main>
  //     </React.Fragment>
  //   );
  // }

  render(){
      <React.Fragment>

        <main className="container">
          <Movies />
        </main>
      </React.Fragment>



  }



}

export default App;
