import React, { useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import channels from "../data/channels";

const ChannelRow = ({ title }) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className={`row "}`}>
      <div className="row__title__icons">
        <h2>{title}</h2>

        <div className="row__icons--arrow">
          <button onClick={() => scroll(-300)}>
            <MdArrowBackIosNew className="row__icon" />
          </button>
          <button>
            <MdArrowForwardIos
              onClick={() => scroll(300)}
              className="row__icon"
            />
          </button>
        </div>
      </div>

      <div className="row__posters channels" ref={ref}>
        {/* {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))} */}
        {channels.map((channel) => (
          <a className="channel__router" href={channel.href} key={channel.id}>
            <img src={channel.img} alt={channel.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChannelRow;
