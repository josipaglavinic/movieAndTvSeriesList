import React from "react";
import Badge from "@mui/material/Badge";
import "./card.css";
import { img_300, unavailable } from "../config/config";

const Card = ({ item, media_type }) => {
  return (
    <Badge
      badgeContent={item.vote_average}
      color={item.vote_average > 7 ? "primary" : "secondary"}
    >
      <div className="card">
        <img
          src={
            item.poster_path ? `${img_300}/${item.poster_path}` : unavailable
          }
          alt={item.title}
        ></img>
        <b className="title">{item.title ? item.title : item.name}</b>
        <div className="media-type">
          {item.media_type && (
            <span>{item.media_type === "movie" ? "Movie" : "Tv series"}</span>
          )}
          <span className="release-date">
            {item.release_date ? item.release_date : item.first_air_date}
          </span>
        </div>
      </div>
    </Badge>
  );
};

export default Card;
