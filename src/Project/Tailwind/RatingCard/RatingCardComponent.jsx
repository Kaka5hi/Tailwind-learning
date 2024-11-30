import React from "react";

const RatingCardComponent = ({
    ratingArr,
    handleRatingByUser,
    handleSubmission,
}) => {
    return (
        <div className="max-w-[350px] bg-gray-800 p-6 rounded-xl font-overpass">
            <div className="flex items-center justify-center bg-[#2c3541] w-12 h-12 rounded-full">
                <img
                    src="icon-star.svg"
                    alt="icon"
                    className="h-4 w-4 object-cover"
                />
            </div>
            <h1 className="mt-8 text-2xl first-letter:capitalize ">
                how did we do?
            </h1>
            <p className="mt-3 text-[15px] first-letter:capitalize text-gray-400">
                please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offereing.
            </p>
            <div className="mt-6 flex items-center justify-between">
                {ratingArr.map((item) => {
                    return (
                        <span
                            key={item.value}
                            className={`w-12 h-12 rounded-full  flex items-center justify-center  font-bold hover:cursor-pointer  hover:text-gray-900 ${
                                item.isSelected
                                    ? "bg-white text-gray-900"
                                    : " bg-[#2c3541] text-gray-400 hover:bg-orange-500"
                            }`}
                            onClick={() => handleRatingByUser(item.value)}
                        >
                            {item.value}
                        </span>
                    );
                })}
            </div>
            <button
                className="mt-6 w-full bg-orange-500 text-gray-900 text-sm uppercase font-extrabold px-2 py-3 rounded-full hover:cursor-pointer hover:bg-white tracking-widest"
                onClick={() => handleSubmission()}
            >
                submit
            </button>
        </div>
    );
};

export default RatingCardComponent;
