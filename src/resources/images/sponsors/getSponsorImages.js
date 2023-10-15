import getImagePaths from "../../../components/scripts/getImagePaths.js";

const directory = require.context("./", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let sponsorImages = [];
imagePaths.map((path) =>
  sponsorImages.push({
    name: path.replace(".jpg", "").replace("_", " "),
    path: require("./" + path),
  })
);

export default sponsorImages;
