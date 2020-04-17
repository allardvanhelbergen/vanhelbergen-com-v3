import React from 'react'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaMediumM,
  FaYoutube,
} from 'react-icons/fa'
import SocialIcon from './SocialIcon'
import SocialIconList from './SocialIconList'

export const Single = () => (
  <SocialIcon url="https://github.com/allardvanhelbergen">
    <FaGithub />
  </SocialIcon>
)

export const List = () => (
  <SocialIconList>
    <SocialIcon url="https://github.com/allardvanhelbergen">
      <FaGithub />
    </SocialIcon>
    <SocialIcon url="https://medium.com/@vanhelbergen">
      <FaMediumM />
    </SocialIcon>
    <SocialIcon url="https://www.instagram.com/allardvanhelbergen/">
      <FaInstagram />
    </SocialIcon>
    <SocialIcon url="https://www.youtube.com/user/djzoos">
      <FaYoutube />
    </SocialIcon>
    <SocialIcon url="https://www.facebook.com/allard.van.helbergen">
      <FaFacebookF />
    </SocialIcon>
  </SocialIconList>
)

export default {
  title: '3: Components/SocialIcon',
}
