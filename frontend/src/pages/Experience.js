import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ribe Boys High School.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kaloleni, Kilifi.
          </h4>
          <p>KCSE Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Africa Nazarene University.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nairobi, Kenya.
          </h4>
          <p>Certificate in IT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Africa Nazarene University.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nairobi, Kenya.
          </h4>
          <p>Diploma in IT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Malindi Sub County.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Malindi, Kilifi.
          </h4>
          <p>Attachment</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Paul's University.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nairobi, Kenya.
          </h4>
          <p>Degree in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kenya Literature Bureu.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nairobi, Kenya.
          </h4>
          <p>Attachment</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
