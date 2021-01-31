const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener su clima",
    demand: true,
  },
}).argv;

//argv.direccion

//getLugarLating es una funcion await por lo tanto devuelve una promesa, por eso va then
//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(45.4112, -75.6981).then(console.log).catch(console.log);

const getInfo = async (direccion) => {
  try {
    const coord = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coord.lat, -coord.lng);
    return `El clima de ${coord.direccion} es de ${temp}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
