import { ENV } from "../configs/constraints";
export default function ApiConfig() {
  const configs = {
    development: {
      BASE_URL: `https://dev-api.artnprice.com/api/v1/admin`,
      MEDIA_URL: `https://dev-api.artnprice.com/api/v1/app`,
    },
  };

  return configs[ENV];
}
