const ThankyouComponent = ({ userRating }) => {
    return (
        <div className="max-w-[380px] bg-gray-800 p-7 rounded-xl font-overpass flex flex-col items-center justify-between text-center ">
            <img
                src="illustration-thank-you.svg"
                alt="thankyou"
                className="w-32 h-w-32 object-contain mt-2.5"
            />
            <span className="mt-7 text-orange-400 bg-[#2c3541] text-sm px-5 py-2 rounded-full leading-4 first-letter:capitalize ">
                you gave{" "}
                {userRating.current === null ? "0" : userRating.current} out of
                5
            </span>
            <h1 className="mt-8 text-3xl font-bold first-letter:capitalize">
                thank you!
            </h1>
            <p className="mt-4 text-sm text-gray-400 first-letter:capitalize p-1">
                we appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch.
            </p>
        </div>
    );
};

export default ThankyouComponent;
