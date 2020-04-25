import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qeWpmeEuS8EN47i3ltQd2jU9C6mTOhHdVMwcc7EJOvBXj-pQy4Ph-uqaAsFTn_Q9JAdc-0Jog7chiswhOqItHZrQzhRCo1VHkJbgYFxUQkeWOpuHJ_llKl-k1GahXnYx",
  },
});
