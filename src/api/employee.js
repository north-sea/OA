import { Resource } from "@nsea/tools";

const api = {
    url: `${process.env.VUE_APP_BASE_API}/employee`,
    upload: {
        url: `${process.env.VUE_APP_BASE_API}/employee/list`,
        method: "post"
    },
    getBirthday: {
        url: `${process.env.VUE_APP_BASE_API}/employee/birth`,
        method: "post"
    }
  };

  export default Resource.create(api);
