import "./SocialLinkProfile.css";

const SocialLinkProfile = () => {
    return (
        <div className="body_container">
            <div className="content_container">
                <img src="avatar-jessica.jpeg" alt="" />
                <div className="user_info">
                    <h1>jessica randall</h1>
                    <p>london, united kingdom</p>
                    <span>"Front-end developer and avid reader."</span>
                </div>
                <ul className="link_container">
                    <li>github</li>
                    <li>frontend mentor</li>
                    <li>linkedIn</li>
                    <li>twitter</li>
                    <li>instagram</li>
                </ul>
            </div>
        </div>
    );
};

export default SocialLinkProfile;
