import React from "react";
import './Card.css';

export default function Card(props) {
  const { titulo } = props;
  const cardStyle = {
      backgroundColor: props.color,
      borderColor: props.color,
  }
  return (
    <div className="card" style={cardStyle}>
      <h2 className="title">{titulo}</h2>
      <div className="content">{props.children}</div>
    </div>
  );
}
