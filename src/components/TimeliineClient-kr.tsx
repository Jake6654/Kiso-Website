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

export default function TimelineClientKr() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaLandmark />}
      >
        <h3 className="text-xl font-bold">KISO 첫 비공식 행사</h3>
        <h4 className="vertical-timeline-element-subtitle">2024년 여름</h4>
        <p>
          한국국제학생회(KISO)의 첫 비공식 행사가 서울에서 열려 2028년 졸업 예정 신입생들을 환영하였습니다.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaChartLine />}
      >
        <h3 className="text-xl font-bold">공식 CIO 등록</h3>
        <h4 className="vertical-timeline-element-subtitle">2024년 가을</h4>
        <p>
          KISO 창립 팀이 버지니아 대학교의 공식 단체(CIO)로 KISO를 등록하였습니다.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaMicrophone />}
      >
        <h3 className="text-xl font-bold">첫 공식 OT 행사</h3>
        <h4 className="vertical-timeline-element-subtitle">2024년 가을</h4>
        <p>
          KISO는 첫 공식 Membership Training(MT) 행사를 주최하여
          회원들 간의 유대감을 강화하였습니다.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="text-xl font-bold">한국 대사관 주최 첫 커리어 박람회</h3>
        <h4 className="vertical-timeline-element-subtitle">2024년 가을</h4>
        <p>
          KISO는 한국 대사관이 주최한 커리어 박람회에 참가하여 졸업 후 진로 탐색 기회를 제공하였으며,
          행사 참가를 위해 $500의 지원금을 수령하였습니다.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaUsers />}
      >
        <h3 className="text-xl font-bold">첫 학기 성공적 마무리</h3>
        <h4 className="vertical-timeline-element-subtitle">2025년 봄</h4>
        <p>
          KISO는 첫 학기를 성공적으로 마무리하며 100명 이상의 회원과 10건 이상의 행사를 개최하였습니다.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00AAEF", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #00AAEF" }}
        iconStyle={{ background: "#154DEC", color: "#fff" }}
        icon={<FaRocket />}
      >
        <h3 className="text-xl font-bold">KISO 공식 웹사이트 런칭</h3>
        <h4 className="vertical-timeline-element-subtitle">2025년 여름</h4>
        <p>
          KISO는 국제학생들을 위한 정보 제공과 KISO 가입을 안내하기 위한 공식 웹사이트를 출시하였습니다.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
