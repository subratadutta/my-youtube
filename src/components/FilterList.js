import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Soccer",
  "Cricket",
  "Gaming",
  "Songs",
  "News",
  "Mutual Fund",
  "Rabindra Sangeet",
  "Data Structure",
  "Jenkins",
  "GitHub",
  "Docker",
  "Kubernetis",
  "AWS",
];

const FilterList = () => {
  return (
    <div className="flex w-10/12 border border-solid border-black overflow-scroll">
      {buttonList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
      {/* <Button name="All" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="News" />
      <Button name="Mutual Fund" />
      <Button name="Rabindra Sangeet" />
      <Button name="Data Structure" />
      <Button name="Jenkins" />
      <Button name="GitHub Actions" />
      <Button name="Docker" />
      <Button name="Kubernetis" />
      <Button name="AWS" /> */}
    </div>
  );
};

export default FilterList;
