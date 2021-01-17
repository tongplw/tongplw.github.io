import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.education
        .map(item => {
          return item.endDate.replace(/\D/g, "");
        })
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          content.push(
            Resume.education
              .filter(education => education.endDate.replace(/\D/g, "") === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={item.startDate + ' - ' + item.endDate}
                    institution={item.institution}
                    area={item.area}
                    courses={item.courses}
                    logo={item.logo}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
