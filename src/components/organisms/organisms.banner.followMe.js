import SocialIcons from "../molecules/molecules.socialIcons";

const FollowMe = ({ data }) => {
    const {
        followMeTitle = "Follow me",
    } = (data || {});

    return(
        <section className="follow_me" id="follow">
            <h2>{followMeTitle}</h2>
            <SocialIcons />
        </section>
    );
}

export default FollowMe;