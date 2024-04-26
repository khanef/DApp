import React, {useEffect, useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'

//internal import
import Style from './NavBar.module.css'
import { ChatAppContect } from '@/Context/ChatAppContext'
import {Model, Error} from '@/Components/index'
import images from '@/assets'

const NavBar = () => {
  const menuItems = [
    {
      menu: "All Users",
      link: "allusers"
    },
    {
      menu: "CHAT",
      link: "/"
    },
    {
      menu: "CONTACT",
      link: "/"
    },
    {
      menu: "SETTING",
      link: "/"
    },
    {
      menu: "FAQS",
      link: "/"
    }, 
    {
      menu: "TERMS OF USE",
      link: "/"
    },  
  ]

  const [active, setActive] = useState(2)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)

  const {account, userName, connectWallet, createAccount } = useContext(ChatAppContect)

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt='logo' width={50} height={50} />
        </div>
        <div className={Style.NavBar_box_right}>
          {/*desktop */}
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div 
                onClick={() => setActive(i+1)} 
                key={i+1} 
                className={`${Style.NavBar_box_right_menu_items} ${active == i+1 ? Style.active_btn : ""}`}
              >
                <Link 
                  className={Style.NavBar_box_right_menu_items_link}
                  href={el.link}
                >{el.menu}</Link>
              </div>
            ))}
          </div>

          {/*mobile */}
          {open && (
            <div className={Style.mobile_menu}>
              {menuItems.map((el, i) => (
                <div 
                  onClick={() => setActive(i+1)} 
                  key={1+1} 
                  className={`${Style.mobile_menu_items} ${active == i+1 ? Style.active_btn : ""}`}
                >
                  <Link 
                    className={Style.mobile_menu_items_link}
                    href={el.link}
                  >{el.menu}</Link>
                </div>
              ))}
              <p className={Style.mobile_menu_btn}>
                <Image src={images.close} alt='close' width={50} height={50} onClick={() => setOpen(false)} />
              </p>
            </div>
          )}

          {/*CONNECT WALLET */}
          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button onClick={() => connectWallet()}>
                {""}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {""}
                <Image src={userName ? images.accountName : images.create2} alt='Account Image' width={20} height={20}/>
                {""}
                <small>{userName || "Create Account"}</small>
              </button>
            )}
          </div>

          <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
            <Image src={images.open} alt='open' width={30} height={30}/>
          </div>
        </div>
      </div>

      {/*MODEL COMPONENT*/}

      {openModel && (
        <div className={Style.modelBox}>
          <Model 
            openBox={setOpenModel} 
            title="WELCOME TO" 
            head="CHAT BUDDY" 
            info="lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            smallInfo="Kindly seclet your name...."
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}

      {Error == "" ? "" : <Error error={Error}/>}
    </div>
  )
}

export default NavBar