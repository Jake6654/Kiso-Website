"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLandmark, FaChartLine, FaUsers, FaRocket } from "react-icons/fa";

export default function TimelineClient() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#155dfc", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Summer 2024"
        iconStyle={{ background: "#00AAEF", color: "#fff" }}
        icon={<FaLandmark />}
      >
        <h3 className="vertical-timeline-element-title">
          KISO&apos;s First Event !
        </h3>
        <p>
          Korean International Student Organization&apos;s first unofficial
          event took place in Seoul, South Korea to welcome class of 2028
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#008937", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Fall 2024"
        iconStyle={{ background: "#00AAEF", color: "#fff" }}
        icon={<FaChartLine />}
      >
        <h3 className="vertical-timeline-element-title">KISO as CIO</h3>
        <p>
          Kiso&apos; founding team officially registers KISO as a Contracted
          Independent Organization of University of Virginia.
        </p>
      </VerticalTimelineElement>{" "}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#8400DE", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Spring 2024"
        iconStyle={{ background: "#00AAEF", color: "#fff" }}
        icon={<FaUsers />}
      >
        <h3 className="vertical-timeline-element-title">
          First Successful Semester !
        </h3>
        <p>
          KISO wraps up its first successful semester with over 100 members and
          10+ events hosted for the first semester
        </p>
      </VerticalTimelineElement>{" "}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#CD3600", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Spring 2024"
        iconStyle={{ background: "#00AAEF", color: "#fff" }}
        icon={<FaRocket />}
      >
        <h3 className="vertical-timeline-element-title">
          KISO Website Launch !
        </h3>
        <p>
          KISO website officially launches to help members find resources
          related to joining KISO and attending University of Virginia as an
          international student.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
