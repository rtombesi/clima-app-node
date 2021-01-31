const axios = require("axios");

const getLugarLatLng = async (dir) => {
  const encodeUlr = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
    headers: {
      "x-rapidapi-key": "b98c022df4msh203fa84de8ff511p1ebb7cjsn996cdcffb1f5",
    },
  });

  const resp = await instance.get();

  if (resp.data.length === 0) {
    throw new Error(`No hay resultados para el lugar ${dir}`);
  }

  const data = resp.data;
  const direccion = data.name;
  const lat = data.coord.lat;
  const lng = data.coord.lon;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
