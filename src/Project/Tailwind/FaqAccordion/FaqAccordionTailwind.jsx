import FaqSingleQuestion from "../../../components/FaqSingleQuestion/FaqSingleQuestion";
import { useState } from "react";

const sample = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        isOpen: false,
        id: 1,
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
        isOpen: false,
        id: 2,
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        isOpen: false,
        id: 3,
    },
    {
        question: "How can I get help if I'm stuck on a challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
        isOpen: false,
        id: 4,
    },
];

const FaqAccordionTailwind = () => {
    // data is stored in state since we will have some user interaction
    const [data, setData] = useState(sample);

    // toggle feature for respective question based on user interaction
    const handleToggleAnswer = (questId) => {
        const newData = data.map((quest) => {
            if (quest.id === questId) {
                return {
                    ...quest,
                    isOpen: !quest.isOpen,
                };
            } else {
                return {
                    ...quest,
                    isOpen: false,
                };
            }
        });
        setData(newData);
    };

    return (
        <div className="font-wordSans bg-fuchsia-50 max-w-full min-h-screen flex flex-col relative items-center justify-center p-2.5">
            <img
                className="absolute top-0 z-0 w-full h-72 object-cover"
                src="background-pattern-desktop.svg"
                alt="banner image"
            />
            <div className="bg-white px-10 pt-10 max-w-xl w-full rounded-2xl shadow-lg mt-20 z-10">
                <h1 className="flex items-center text-5xl gap-5 font-semibold text-fuchsia-950">
                    <img
                        src="icon-star.svg"
                        className="w-8 h-8 object-cover"
                        alt="logo"
                    />
                    FAQs
                </h1>
                <ul className="mt-5">
                    {data?.map((item, index) => {
                        return (
                            <FaqSingleQuestion
                                item={item}
                                index={index}
                                key={index}
                                handleToggleAnswer={handleToggleAnswer}
                                data={data}
                                type="tailwind"
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FaqAccordionTailwind;
