const FaqSingleQuestion = ({ item, handleToggleAnswer, data, type }) => {
    if (type === "tailwind") {
        return (
            <li
                className={
                    item.id !== data.length
                        ? "py-5 border-b divide-gray-100"
                        : "py-5 mb-5"
                }
            >
                <p
                    className="flex items-center justify-between gap-10 font-semibold text-fuchsia-950 text-base hover:cursor-pointer hover:text-fuchsia-700"
                    onClick={() => handleToggleAnswer(item.id)}
                >
                    {item.question}
                    {item.isOpen ? (
                        <img src="icon-minus.svg " alt="minus icon" />
                    ) : (
                        <img src="icon-plus.svg" alt="plus icon" />
                    )}
                </p>
                {item.isOpen && (
                    <span
                        className={`text-gray-400 text-base font-normal block pt-5
                            ${item.id !== data.length && " pb-1.5"}`}
                    >
                        {item.answer}
                    </span>
                )}
            </li>
        );
    } else {
        return (
            <li>
                <p onClick={() => handleToggleAnswer(item.id)}>
                    {item.question}
                    {item.isOpen ? (
                        <img src="icon-minus.svg " alt="minus icon" />
                    ) : (
                        <img src="icon-plus.svg" alt="plus icon" />
                    )}
                </p>
                {item.isOpen && <span>{item.answer}</span>}
            </li>
        );
    }
};

export default FaqSingleQuestion;
