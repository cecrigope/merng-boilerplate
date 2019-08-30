import React from "react";
import { Card, Icon, Label, Image, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  function likePost() {
    console.log("like post!");
  }

  function commentOnPost() {
    console.log("comment on post!");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>
          <Header as="h3" color="teal">@{username}</Header>
        </Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="teal" basic>
            <Icon name="thumbs up" />
          </Button>
          <Label basic color="teal" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="orange" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="orange" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
