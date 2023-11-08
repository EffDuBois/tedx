import getImagePaths from "../../../components/scripts/getImagePaths.js";

const directory = require.context("./", false, /\.(png|jpe?g|svg|webp)$/);
let imagePaths = getImagePaths(directory);

let speakerImages = [];
imagePaths.map((path) =>
speakerImages.push({
    name: path.match(/(.*)@/)[1].replaceAll(/_/g, " "),
    title: path
      .match(/@(.*)/)[1]
      .replaceAll(/_/g, " ")
      .replace(".jpg", "")
      .replace(".jpeg", "")
      .replace(".webp", ""),
    path: require("./" + path),
  })
);

export default speakerImages;
