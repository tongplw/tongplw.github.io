import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src={props.logo} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.institution}</h1>
        <h2 className="subtitle is-6">{props.area}</h2>
        <p style={{ maxWidth: "25em" }}>{props.courses.map(x => (<li>{x}</li>))}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
