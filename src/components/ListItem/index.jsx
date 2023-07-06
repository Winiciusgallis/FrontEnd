import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({id,nomemanga,capamanga,author ,setTeamList }) {

  return (
    <>
    <img src={capamanga} width='100px' />
      <li key={id}><Link to={`/manga/details/${id}`}> {nomemanga}- {author} </Link>
      </li>
    </>
  )
}

export default ListItem;