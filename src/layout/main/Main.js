import React, {useContext} from 'react'
import s from './Main.module.scss'
import avatar from '../../assets/images/myPhoto.png'
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'
import {Link} from 'react-scroll'
import {SocialBlock} from '../../common/components/social-block/SocialBlock'
import {NavLink} from '../../common/components/nav-link/NavLink'
import Tilt from 'react-parallax-tilt'
import {LocaleContext} from '../../common/utils/locale-context/LocaleContext'
import {MainData} from './main-data/MainData'

export const Main = () => {
  const {locale} = useContext(LocaleContext)
  return (
    <section id='home' className={s.mainBlock}>
      <Fade left>
        <div className={s.photo}>
          <Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor='#ffffff' glarePosition='bottom'
                glareBorderRadius='20px'>
            <img className={s.ava} src={avatar} alt='Popova'/>
          </Tilt>
        </div>
      </Fade>
      <Fade right>
        <div className={s.textContainer}>
          <h1 className={s.nameBlock}>
            <p>{MainData[locale].title}</p>
            <span>{MainData[locale].start}</span>
            <ReactTypingEffect
              text={[`${MainData[locale].name}`, `${MainData[locale].dev1}`, `${MainData[locale].dev2}`]}
              speed={100}
              eraseSpeed={40}
              eraseDelay={1000}
              typingDelay={100}
            />
          </h1>
          <p className={s.description}>
            {MainData[locale].description}
            <span className={s.green}>{MainData[locale].span}</span>
            <br/>
            <span className={s.white}>{MainData[locale].end}</span>
          </p>
          <div className={s.contactsIcons}>
                            <span className={s.emptySpan}>
                                <span className={s.slider}></span>
                            </span>
            <SocialBlock/>
          </div>
          <button className={s.getInTouch}>
            <NavLink section={MainData[locale].hire} path='contacts'/>
          </button>
          <div className={s.scroll}>
            <Link to='skills' spy={true} smooth={true} offset={0} duration={500}>
              {MainData[locale].scroll}
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  )
}
