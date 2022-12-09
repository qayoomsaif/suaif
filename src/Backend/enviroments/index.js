const production = false;
const dev = {
  API: '',
  BASE_URL: ``,
  BASE_URL2: ``,
  BASE_URL3: ``,
};
const live = {
  API: '',
  BASE_URL: ``,
  BASE_URL2: ``,
  BASE_URL3: ``,
};
export const BASEURLS = production ? live : dev;
