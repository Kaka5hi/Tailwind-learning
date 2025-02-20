import "./FaqAccordion.css";
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

const FaqAccordion = () => {
    const [data, setData] = useState(sample);

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
        <div className="faq_body_container">
            <div className="banner_container"></div>
            <div className="faq_content_container">
                <h1>
                    <img src="icon-star.svg" alt="" />
                    FAQs
                </h1>
                <ul className="questions_container">
                    {data?.map((item, index) => {
                        return (
                            <FaqSingleQuestion
                                item={item}
                                index={index}
                                key={index}
                                handleToggleAnswer={handleToggleAnswer}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FaqAccordion;
