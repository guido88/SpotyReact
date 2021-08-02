import axios from "axios";

const getAlbumList = async (access_token) => {
  let config = {
    params: { limit: 50, offset: 0 },

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  let responseData = await axios.get(
    "https://api.spotify.com/v1/browse/new-releases",
    config
  );
  let items = [];
  let next = responseData.data.albums.next;
  items = responseData.data.albums.items;

  while (next != null) {
    config.params.offset += config.params.limit;

    responseData = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      config
    );
    items = [...items, ...responseData.data.albums.items];
    next = responseData.data.albums.next;
  }

  return items;
};

export default getAlbumList;
