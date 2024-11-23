const FaqSingleQuestion = ({ item, handleToggleAnswer }) => {
    return (
        <li>
            <p>
                {item.question}
                {item.isOpen ? (
                    <img
                        onClick={() => handleToggleAnswer(item.id)}
                        src="icon-minus.svg "
                        alt="minus icon"
                    />
                ) : (
                    <img
                        onClick={() => handleToggleAnswer(item.id)}
                        src="icon-plus.svg"
                        alt="plus icon"
                    />
                )}
            </p>
            {item.isOpen && <span>{item.answer}</span>}
        </li>
    );
};

export default FaqSingleQuestion;
