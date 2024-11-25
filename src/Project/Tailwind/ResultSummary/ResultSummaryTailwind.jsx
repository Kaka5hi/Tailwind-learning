import React from "react";

const ResultSummaryTailwind = () => {
    // 	<link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    return (
        <div className="font-hankenGrotesk min-h-screen min-w-full md:flex items-center justify-center">
            <div className="bg-white md:flex md:justify-between  md:rounded-3xl md:overflow-hidden md:shadow-2xl md:shadow-indigo-100 md:max-w-[600px] md:w-full ">
                <div className="bg-gradient-to-b from-indigo-500 to-blue-700 rounded-b-3xl pt-5 pb-10 px-10 flex flex-col items-center justify-center text-center text-white md:min-w-72 md:rounded-3xl md:py-6 md:justify-around">
                    <h1 className="capitalize text-md font-medium text-gray-200">
                        your result
                    </h1>
                    <div className="w-32 h-32 rounded-full flex flex-col items-center gap-1 justify-center bg-gradient-to-b from-indigo-700 to-indigo-600 my-3.5 md:w-40 md:h-40 md:gap-0">
                        <p className="text-5xl font-bold md:text-6xl">76</p>
                        <span className="text-gray-300 font-medium text-xs md:text-sm md:opacity-70">
                            of 100
                        </span>
                    </div>
                    <h2 className="capitalize font-semibold text-2xl">great</h2>
                    <p className="text-gray-300 max-w-56 mt-2 text-sm first-letter:capitalize md:max-w-48">
                        you scored higher that 65% of the people who have taken
                        these test.
                    </p>
                </div>
                <div className="py-5 px-6 flex flex-col gap-5 justify-center md:w-full md:px-8 md:py-6 md:justify-between">
                    <h3 className="font-semibold text-lg capitalize">
                        summary
                    </h3>
                    <ul className="flex flex-col gap-3.5 md:gap-2.5">
                        <li className="flex items-center justify-between p-3 capitalize  rounded-lg bg-red-50 text-red-400">
                            <p className="flex items-center gap-4">
                                <img src="icon-reaction.svg" alt="reaction" />
                                <span className="font-semibold">reaction</span>
                            </p>
                            <p className="text-slate-400 font-bold">
                                <span className="font-bold text-blue-950 mr-2">
                                    80
                                </span>
                                /<span className="ml-1">100</span>
                            </p>
                        </li>
                        <li className="flex items-center justify-between p-3 capitalize   bg-yellow-50 text-yellow-400">
                            <p className="flex items-center gap-4">
                                <img src="icon-memory.svg" alt="memory" />
                                <span className="font-semibold">memory</span>
                            </p>
                            <p className="text-slate-400 font-bold">
                                <span className="font-bold text-blue-950 mr-2">
                                    92
                                </span>
                                /<span className="ml-1">100</span>
                            </p>
                        </li>
                        <li className="flex items-center justify-between p-3 capitalize   bg-green-50 text-green-400">
                            <p className="flex items-center gap-4">
                                <img src="icon-verbal.svg" alt="verbal" />
                                <span className="font-semibold">verbal</span>
                            </p>
                            <p className="text-slate-400 font-bold">
                                <span className="font-bold text-blue-950 mr-2">
                                    61
                                </span>
                                /<span className="ml-1">100</span>
                            </p>
                        </li>
                        <li className="flex items-center justify-between p-3 capitalize   bg-blue-50 text-blue-400">
                            <p className="flex items-center gap-4">
                                <img src="icon-visual.svg" alt="visual" />
                                <span className="font-semibold">visual</span>
                            </p>
                            <p className="text-slate-400 font-bold">
                                <span className="font-bold text-blue-950 mr-2">
                                    72
                                </span>
                                /<span className="ml-1">100</span>
                            </p>
                        </li>
                    </ul>
                    <button
                        className="w-full rounded-full bg-blue-950 text-slate-200 p-4 capitalize font-semibold text-lg hover:cursor-pointer hover:bg-gradient-to-b from-indigo-500 to-blue-700 hover:text-slate-50 md:px-2
					md:py-3 md:text-sm md:min-w-40 md:mt-2.5"
                    >
                        continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultSummaryTailwind;
