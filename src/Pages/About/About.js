import React, { Component } from "react";
import RSnavbar from '../../Components/RSnavbar/RSnavbar';
import render from "react-dom";
import { Jumbotron, Container, Media } from "reactstrap";
import "./style.css";

const Page = ({RSnavbar, Jumbotron, Container, onClick, button,}) => (
  <div>
    <React.Fragment />
  </div>
);

 class About extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <RSnavbar className="Nav" />
        <Jumbotron fluid className="Jumbotron">
          <Container fluid className="container">
            <Media>
              <Media left href="#">
                <Media object data-src="" alt="selfimage" />
              </Media>
              <Media body>
                <Media heading>About Me</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}



ReactDOM.render(<About />, document.getElementById("root"));
