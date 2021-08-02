import React, { useState, useEffect, Fragment } from "react";
import getToken from "./getToken";
import getAlbumList from "./getAlbumList";
import SearchInput from "./components/SearchInput";
import AlbumList from "./components/AlbumList";
import "./SpotifySearch.css";

const SpotifySearch = () => {
  const [albumList, setAlbumList] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    const axiosPostRequest = async () => {
      const access_token = await getToken();

      let items = await getAlbumList(access_token);

      setAlbumList(items);
    };

    axiosPostRequest();
  }, []);

  const handleTypeIn = (event) => {
    if (!(event.target.value === "")) {
      setFilteredAlbums(
        albumList.filter((album) => {
          return album.name
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase());
        })
      );
    } else {
      setFilteredAlbums([]);
    }
  };

  return (
    <Fragment>
      <SearchInput handleTypeIn={handleTypeIn} />
      <div className="albums">
        <AlbumList albums={filteredAlbums} />
      </div>
    </Fragment>
  );
};

export default SpotifySearch;
