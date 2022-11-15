import "./visit.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "../../components/header/header";

const Visit = () => {
  const carousel = useRef(null);

  const list = [
    {
      id: "11111",
      title: "Alguns animais em destaque",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/6b/dd/museu-de-historia-natural.jpg?w=2000&h=-1&s=1",
    },
    {
      id: "22222",
      title: "Conchas",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/6c/7d/museu-de-historia-natural.jpg?w=2000&h=-1&s=1",
    },

    {
      id: "33333",
      title: "Arara Azul",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/6c/35/museu-de-historia-natural.jpg?w=2000&h=-1&s=1",
    },
    {
      id: "44444",
      title: "Raposa",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/6b/5d/museu-de-historia-natural.jpg?w=2000&h=-1&s=1",
    },
    {
      id: "55555",
      title: "Pintura de índios",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/97/60/adorei-lugar-pequeno.jpg?w=2200&h=-1&s=1",
    },
    {
      id: "66666",
      title: "Quadro exibindo a classe curstacea",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/6c/ae/museu-de-historia-natural.jpg?w=2000&h=-1&s=1",
    },
  ];

  const handleLeftClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section id="CarouselSection">
      <Header />
      <div className="body">
        <div className="header">
          <div>
            <h1>Algumas Peças</h1>
          </div>
        </div>
        <div className="carousel" ref={carousel}>
          {list.map((item) => {
            const { id, title, image } = item;
            return (
              <div className="item" key={id}>
                <img className="img-article" src={image} alt={title} />
                <div className="titleCarousel">
                  <span>{title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>&#8592;</button>
          <button onClick={handleRightClick}>&rarr;</button>
        </div>
      </div>
    </section>
  );
};
export default Visit;
