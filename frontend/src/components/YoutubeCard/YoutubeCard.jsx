import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";

const YoutubeCard = ({
  url = "https://youtu.be/l1EssrLxt7E?si=EUh_ur_TppL1e5pt",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };

  return (
    <div className="youtubeCard">

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt="Video" />

        <Typography>
          {title}
        </Typography>
      </a>

      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}

    </div>
  );
};

export default YoutubeCard;