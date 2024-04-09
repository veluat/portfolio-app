import s from "./SocialBlock.module.scss";
import telegram from "./../../../assets/images/social/telegram.png";
import github from "./../../../assets/images/social/github.png";
import linkedin from "./../../../assets/images/social/linkedin.png";
import codewars from "./../../../assets/images/social/codewars.png";

export const SocialBlock = () => {
    return (
        <div className={s.boxContainer}>
            <div className={s.box}>
                <a href="https://t.me/veluat" target="_blank" rel="noreferrer">
                    <img className={s.icon} src={telegram} alt='telegram'></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://github.com/veluat" target="_blank" rel="noreferrer">
                    <img className={s.icon} src={github} alt='github'></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://www.linkedin.com/in/julia-popova-developer/" target="_blank" rel="noreferrer">
                    <img className={s.icon} src={linkedin} alt='linkedin'></img>
                </a>
            </div>
            <div className={s.box}>
                <a href="https://www.codewars.com/users/veluat" target="_blank" rel="noreferrer">
                    <img className={s.icon} src={codewars} alt='codewars'></img>
                </a>
            </div>
        </div>
    )
}