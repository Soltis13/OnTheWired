
import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results";
import Saved from "../Saved";
import Jumbotron from "../Jumbotron";
import Header from "../Header";
import { Col, Row, Container } from "../Grid";
import { Input } from "../Form";
import Button from "../Button";
import "./Main.css";
import Footer from "../layout/Footer";

class Main extends Component {
  state = {
    results: [],
    articles: [],
    topic: "",
    startDate: "",
    endDate: ""
  };

  saveArticle = (article) => {
    API.saveArticle({article})
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
}

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ articles: res.data})
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Get articles via nyt api
    API.apiArticles(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res => {
        this.setState({ results: res, topic: "", startDate: "", endDate: "" })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 
  render() {
    return (
      <Container>
        <Jumbotron/>
        
        <Row>
          <Col size="md-12">
            <Header>
              News Search <p className="Header">Find articles of interest!</p>
            </Header>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Enter Search Topic"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Enter Start Date (YYYYMMDD)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="Enter End Date (YYYYMMDD)"
              />
              <Button
                onClick={this.handleFormSubmit}
                style={{ float: "left", margin: 15 }}
                className={"btn btn-success"}
              >
                Search
              </Button>
            </form>
          </Col>
        </Row>

        { this.state.results.length > 0 &&
          <Results results={this.state.results} saveArticle={this.saveArticle} />
        }

        { this.state.articles.length > 0 &&
          <Saved articles={this.state.articles} deleteArticle={this.deleteArticle}/>
        }

        <Footer/>
        
      </Container>
    );
  }
}

export default Main;