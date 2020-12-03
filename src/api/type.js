import { Resource } from "@nsea/tools";

const api = {
  url: `${process.env.VUE_APP_BASE_API}/type`
};

export default Resource.create(api);
