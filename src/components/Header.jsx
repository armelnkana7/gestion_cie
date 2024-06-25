// import React from 'react'
import { Menubar } from "primereact/menubar";
// import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import Login from "./Login";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Home",
      root: true,
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Utilisateurs",
      icon: "pi pi-users",
      command: () => {
        navigate("/users-list");
      },
    },
    {
      label: "Ventes",
      root: true,
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Commandes",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <NavLink to={"/"}>
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height=""
      className="mr-2 h-8 w-10"
    ></img>
    </NavLink>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      {/* <InputText
        placeholder="Rechercher"
        type="text"
        className="h-9 sm:w-auto p-invalid"
      /> */}
      <span className="text-bold mt-1">Admin</span>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
      <Login/>
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
