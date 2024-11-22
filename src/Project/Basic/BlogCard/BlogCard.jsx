import "./BlogCard.css";

const BlogCard = () => {
    return (
        <div className="body_container">
            <div className="content_container">
                <img src="illustration-article.svg" alt="image" />
                <div className="info_container">
                    <span>learning</span>
                    <span>published 21 dec 2023</span>
                    <span>HTML & CSS foundations</span>
                    <span>
                        these language are the backbone of every website,
                        defining structure, content and presentation
                    </span>
                </div>
                <div className="user_container">
                    <img src="image-avatar.webp" alt="greg hooper" />
                    <span>greg hooper</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
