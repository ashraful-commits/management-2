import React from "react";
import AppreciationTable from "../../components/leaderboards/AppreciationTable";

export default function LeaderboardTabledata(props) {
  return (
    <div className="bg-[#1C1C24] rounded-xl shadow-lg overflow-hidden">
      <AppreciationTable title={props.title} />
    </div>
  );
}
