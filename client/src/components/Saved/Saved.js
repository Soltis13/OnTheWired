import React from "react";
import Moment from 'react-moment';
import Header from "../Header";
import { Col, Row } from "../Grid";
import { List, ListItem } from "../List";
import Button from "../Button";

const Saved = props => (
  <Row>
    <Col size="sm-12">
      <Header>Saved Articles</Header>
      <List>
        {props.articles.map(article => (
          <ListItem key={article._id}>

            <Button 
              onClick={() => props.deleteArticle(article._id)}
              style={{ float: "left", margin: 15 }}
              className={"btn btn-warning"}
            >
              Remove
            </Button>

            <a href={article.url} target="_blank">
              <strong>
                {article.title}
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

export default Saved;