import React, { useState, useEffect } from "react";
import { calculateDateTimeDifference } from "../utils/helper";

const VideoCard = ({ info }) => {
  const [timeDifference, setTimeDifference] = useState(null);
  useEffect(() => {
    if (info) {
      const { snippet } = info;
      const { publishedAt } = snippet;
      const currentDate = new Date();
      const endDateStr = currentDate.toISOString();
      const startDateStr = publishedAt;

      const difference = calculateDateTimeDifference(startDateStr, endDateStr);
      setTimeDifference(difference);
    }
  }, [info]); // Only re-run the effect if `info` changes

  if (!info) return false;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  const timeDiffString = () => {
    if (!timeDifference) return "";
    const { years, months, days, hours, minutes } = timeDifference;
    if (years > 0) return `${years} years ago`;
    if (months > 0) return `${months} months ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return "just now";
  };

  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img className="rounded" alt={title} src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        <li>{timeDiffString()}</li>
      </ul>
    </div>
  );
};

// This is an example of HOC which returns a component by applying some
// additional information
export const AddVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
