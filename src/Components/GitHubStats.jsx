import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Aos from "aos";
import "aos/dist/aos.css";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(()=>
    {
        Aos.init({duration: 1000})

    }, [])

  return (
    <div id="github_section">
      <h2 className="section_heading">GitHub Stats</h2>
      <div>
        <div id="calender" data-aos="fade-up">
          <GitHubCalendar
            id="calender-r"
            style={{ margin: "auto" }}
            blockSize={15}
            fontSize={14}
            blockMargin={4}
            blockRadius={6}
            username="vrishabh081"
            // transformData={selectLastHalfYear}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
        {/* Streak Status */}
        <div className="stats_container">
          <img data-aos="fade-up"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vrishabh081&theme=nightowl&border_radius=7"
            alt="Github stats"
          />
          <img data-aos="fade-up"
            src="https://github-readme-stats.vercel.app/api?username=vrishabh081&show_icons=true&theme=tokyonight"
            alt="Github Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;