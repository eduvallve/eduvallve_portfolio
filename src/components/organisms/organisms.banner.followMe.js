import i18n from "../../i18n";
import SocialIcons from "../molecules/molecules.socialIcons";

const FollowMe = ({ data }) => {
    return(
        <section className="follow_me" id="follow">
            <h2>{i18n.t('nav.follow')}</h2>
            <SocialIcons />
        </section>
    );
}

export default FollowMe;