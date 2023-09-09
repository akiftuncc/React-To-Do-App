import { HiOutlineInboxArrowDown } from "react-icons/hi2";

export default function Section() {
  return (
    <div className="section-container">
      <div className="section container">
        <SectionLeft />
        <SectionRight />
      </div>
    </div>
  );
}

function SectionLeft() {
  return (
    <div className="section-left">
      <HiOutlineInboxArrowDown size="5rem" />
      <p>LEFT</p>
    </div>
  );
}

function SectionRight() {
  return (
    <div className="section-right">
      <RightLinks />
    </div>
  );
}

function RightLinks() {
  return <div></div>;
}
