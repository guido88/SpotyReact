import axios from "axios";
import {config} from "./config/config";

const querystring = require("querystring");

const getToken = async () => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded;",
  };

  const data = {
    grant_type: "client_credentials",
    client_id: config.client_id,
    client_secret: config.client_secret,
  };

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify(data),
    headers
  );

  return response.data.access_token;
};

export default getToken;
