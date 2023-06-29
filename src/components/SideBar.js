import "./css/SideBar.css"
import { useState } from "react";

const sidebar = [
  {
    avatar: { src: '/logo192.png', alt: 'Professor Husnain' },
    name: 'Muhammad Husnain',
    title: 'Web developer',
    contactList: [
      {
        icon: 'mail-outline',
        title: 'Email',
        value: 'muhammadhusnainmail@gmail.com'
      },
      {
        icon: 'mail-outline',
        title: 'Phone',
        value: '+923446995703'
      }
    ]
  }
]

function SideBar() {

  const [data, setData] = useState(sidebar);
  const e = data[0];
  const child =
    e.contactList.map(contact => {
      console.log(contact)
      return (
        <li key={contact.title} className="contact-item">

          <div className="icon-box">
            <ion-icon name={contact.icon}></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">{contact.title}</p>

            <a href={contact.title==='Email'?(contact.title==='Email'?'mailto:' +contact.value:'tel:' +contact.value):(contact.value)} className="contact-link">{contact.value}</a>
          </div>

        </li>
      )
    });


  return (
    <div className="sidebar">
      <div className="sidebar-info">


        <figure className="avatar-box">
          <img src={e.avatar.src} alt={e.avatar.alt} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Professor Husnain ">{e.name}</h1>

          <p className="title">{e.title}</p>
          {/**Here button will be add for small screen for open side bar*/}
        </div>

      </div>
      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contact-list">
          {child}
        </ul>

      </div>

    </div>
  );
}

export default SideBar;