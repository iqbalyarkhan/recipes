import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Notice we don't capture 'i' here, it is just for the array
// Not to be passed as a prop
const Star = function ({
  isSelected,
  onSelect,
}: {
  isSelected: boolean;
  onSelect: any;
}) {
  return <FaStar color={isSelected ? "red" : "grey"} onClick={onSelect} />;
};

function createArray(totalStars: number) {
  return [...Array(totalStars)];
}

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  const emptyArray = createArray(totalStars);
  const starsArray = emptyArray.map((n, i) => (
    <Star
      key={i}
      isSelected={i < selectedStars ? true : false}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));

  console.log(starsArray);
  return (
    <>
      {starsArray}
      <p>
        {selectedStars} out of {totalStars}
      </p>
    </>
  );
}
