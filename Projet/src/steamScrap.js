import axios from 'axios';
import fs from 'fs';
import path from 'path';
const APIList = 'https://api.steampowered.com/ISteamApps/GetAppList/v2';

const steamScrap = async url => {
  const response = await axios({
    method: 'get',
    url: url,
    params: {
      ts: 1,
      limit: 20,
      // offset: page * offset,
      apikey: 'EB36DEAA4E69543E4167E86C7AD84C14',
    },
  })
    .then(response => {
      console.log(response.data.applist.apps);
      // write in a json file
      fs.writeFile(
        path.join(__dirname, './scrap/steam/steam.json'),
        JSON.stringify(response.data.applist.apps),
        {flag: 'w'},
        function (err) {
          if (err) throw err;
          console.log("It's saved!");
        },
      );
    })
    .catch(error => {
      console.log(error);
    });
};

// steamScrap(APIList);

const getElementByAppId = async appid => {
  const response = await axios({
    method: 'get',
    url: `https://store.steampowered.com/api/appdetails?appids=${appid}`,
    params: {
      // ts: 1,
      // limit: 20,
      // offset: page * offset,
      apikey: 'EB36DEAA4E69543E4167E86C7AD84C14',
    },
  })
    .then(response => {
      console.log(response.data);
      return response.data[appid].data;
    })
    .catch(error => {
      console.log(error);
    });
  return response;
};

const getAllElements = async (start, offset) => {
  // read ./scrap/steam/steam.json file
  const products = JSON.parse(
    fs.readFileSync(path.join(__dirname, './scrap/steam/steam.json'), 'utf8'),
  );
  console.log(
    '🚀 ~ file: steamScrap.js:63 ~ getAllElements ~ products',
    products,
  );
  const productWithDetails = [];
  for (let i = start; i < start + offset; i++) {
    // throttle the request 1 request per second
    await new Promise(resolve => setTimeout(resolve, 500));
    const element = await getElementByAppId(products[i].appid);
    if (element === undefined) continue;
    productWithDetails.push(element);
    // write in a json file
    if (i === start + offset - 1) {
      fs.writeFile(
        path.join(__dirname, './scrap/steam/steamDetails.json'),
        JSON.stringify(productWithDetails),
        {flag: 'w'},
        function (err) {
          if (err) throw err;
          console.log("It's saved!");
        },
      );
    }
  }
};

getAllElements(40, 10000);
