import axios from "axios";

const apiID = "r8Y0lZWJFbtKuZDwlmfBcJ822Mgc4EUcLAT-WwdNoPg";

export default axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${apiID}`,
  params: {
    query:"nature",
    orientation:"landscape",
    per_page:30,
  }
})
