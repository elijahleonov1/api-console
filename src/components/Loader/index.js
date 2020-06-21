import React from 'react'
import s from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={s.LoaderWrapper}>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
            <div className={s.LoaderItem}></div>
        </div>
    )
}

export default Loader
