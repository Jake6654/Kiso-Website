"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaLandmark,
  FaChartLine,
  FaMicrophone,
  FaBriefcase,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export default function TimelineClient() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaLandmark />}
      >
        <h3 className="text-xl font-bold">KISO&apos;s First Event</h3>
        <h4 className="vertical-timeline-element-subtitle">Summer 2024</h4>
        <p>
          Korean International Student Organization&apos;s first unofficial event took place in Seoul, South Korea to welcome class of 2028.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaChartLine />}
      >
        <h3 className="text-xl font-bold">KISO as CIO</h3>
        <h4 className="vertical-timeline-element-subtitle">Fall 2024</h4>
        <p>
          KISO&apos;s founding team officially registers KISO as a Contracted
          Independent Organization of University of Virginia.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaMicrophone />}
      >
        <h3 className="text-xl font-bold">
          First Official Membership Training
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Fall 2024</h4>
        <p>
          KISO hosts its first official membership training trip to strengthen
          bonds between members of its community.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="text-xl font-bold">
          First career fair funded by the Korean Embassy
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Fall 2024</h4>
        <p>
          KISO was funded $500 to participate in a career fair officialy hosted by the Korean Embassy in the United States to explore post graduate career opportunities. 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaUsers />}
      >
        <h3 className="text-xl font-bold">First Successful Semester</h3>
        <h4 className="vertical-timeline-element-subtitle">Spring 2024</h4>
        <p>
          KISO wraps up its first successful semester with over 100 members and
          10+ events hosted for the first semester
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaRocket />}
      >
        <h3 className="text-xl font-bold">KISO Website Launch</h3>
        <h4 className="vertical-timeline-element-subtitle">Summer 2025</h4>
        <p>
          KISO website officially launches to help members find resources
          related to joining KISO and attending University of Virginia as an
          international student.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
