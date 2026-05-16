import React from "react";
import "./Timeline.css";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import MuiTimeline from "@mui/lab/Timeline";

const Timeline = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="timeline">
      <Typography variant="h3">TIMELINE</Typography>

      <MuiTimeline align="alternate">
        {user &&
          user.timeline &&
          user.timeline.map((item, index) => (
            <TimelineItem key={item._id || index}>
              <TimelineOppositeContent color="textSecondary">
                {new Date(item.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>

                {index !== user.timeline.length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <Typography variant="h5">
                  {item.title}
                </Typography>

                <Typography>
                  {item.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </MuiTimeline>
    </div>
  );
};

export default Timeline;