import React from 'react'
import s from './Logo.module.scss'

const Logo = () => (
    <div className={s.LogoWrapper}>
        <div className={s.Circle}></div>
        <div className={s.Rectangle}></div>
        <div className={s.Circle}></div>
        <div className={s.RectangleInclined}></div>
    </div>
)

export default Logo
