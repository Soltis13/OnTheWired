import React from "react";
import Moment from 'react-moment';
import Header from "../Header";
import { Col, Row } from "../Grid";
import { List, ListItem } from "../List";
import Button from "../Button";

const Results = props => (
  <Row>
    <Col size="sm-12">
      <Header>
        Search Results
      </Header>
        <List>
          {props.results.map(article => (
            <ListItem key={article._id}>

              <Button 
                onClick={() => props.saveArticle({title:article.headline.main, url:article.web_url, date:article.pub_date, 
                  nytID:article._id})}
                  style={{ float: "left", margin: 15 }}
                className={"btn btn-success"}
              >
                Save
              </Button>

            <a href={article.web_url} target="_blank">
                <strong>
                  {article.headline.main}
                </strong>
              </a>
              <p>
              Date: <Moment format="MM/DD/YYYY">{article.date}</Moment>
            </p>
            </ListItem>
          ))}
        </List>
    </Col>
  </Row>
);

export default Results;