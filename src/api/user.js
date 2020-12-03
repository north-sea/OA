import { Resource } from "@nsea/tools";

const api = {
  url: "",
  login: {
      url: `${process.env.VUE_APP_BASE_API}/login`,
      method: "get"
  },

  getInfo: {
      url: `${process.env.VUE_APP_BASE_API}/getInfo`,
      method: "get"
  }
};

export default Resource.create(api);
