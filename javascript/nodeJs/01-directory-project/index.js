const fs = require("fs");
const PlaceData = require("./data.json");

fs.mkdir("dreamDestinations", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("dreamDestinations folder created");
  }
});

PlaceData.forEach((continent) => {
  fs.mkdir(`dreamDestinations/${continent.continent}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Folder for ${continent.continent} created`);
      continent.countries.forEach((country) => {
        fs.writeFile(
          `dreamDestinations/${continent.continent}/${country.countryName}.txt`,
          `${country.countryDescr}`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`File for ${country.countryName} created`);
            }
          }
        );
      });
    }
  });
});
