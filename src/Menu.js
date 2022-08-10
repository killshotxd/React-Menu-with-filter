import React from "react";
import { Fade } from "react-reveal";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <Fade left>
              <img src={img} alt={title} className="photo" />
            </Fade>
            <div className="item-info">
              <header>
                <Fade top>
                  <h4>{title}</h4>
                </Fade>
                <Fade right>
                  <h4 className="price">${price}</h4>
                </Fade>
              </header>
              <Fade bottom>
                <p className="item-text">{desc}</p>
              </Fade>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
