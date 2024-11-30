import React, { useRef, useState } from "react";
import RatingCardComponent from "./RatingCardComponent";
import ThankyouComponent from "./ThankyouComponent";

const RatingCard = () => {
    const [ratingArr, setRatingArr] = useState([
        {
            value: 1,
            isSelected: false,
        },
        {
            value: 2,
            isSelected: false,
        },
        {
            value: 3,
            isSelected: false,
        },
        {
            value: 4,
            isSelected: false,
        },
        {
            value: 5,
            isSelected: false,
        },
    ]);

    // to toggle between rating and thankyou
    const [showMessage, setShowMessage] = useState(false);

    // to store which rating user gave
    const userRating = useRef(null);

    const handleRatingByUser = (rating) => {
        const newArr = ratingArr.map((item) => {
            if (rating === item.value) {
                return {
                    ...item,
                    isSelected: true,
                };
            } else {
                return {
                    ...item,
                    isSelected: false,
                };
            }
        });
        setRatingArr(newArr);
        userRating.current = rating;
    };

    const handleSubmission = () => {
        setShowMessage((prev) => !prev);
    };

    return (
        <div className="grid place-content-center min-h-screen p-5 bg-neutral-900 text-white">
            {showMessage ? (
                <ThankyouComponent userRating={userRating} />
            ) : (
                <RatingCardComponent
                    ratingArr={ratingArr}
                    handleRatingByUser={handleRatingByUser}
                    handleSubmission={handleSubmission}
                />
            )}
        </div>
    );
};

export default RatingCard;
