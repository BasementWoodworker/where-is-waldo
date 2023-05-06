import React from "react";

export function Option({ name, image }) {
  return (
    <div className={`${name} choice-container`}>
        <img src={image} alt={name + "image"}/>
        <span>{name[0].toUpperCase() + name.slice(1)}</span>
    </div>
  )
}