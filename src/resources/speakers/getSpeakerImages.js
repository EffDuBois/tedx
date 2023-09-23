import getImagePaths from "../../components/Scripts/getImagePaths";

const directory = require.context("./", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let speakerImages = [];
imagePaths.map((path) =>
  speakerImages.push({
    name: (path.match(/(.*)@/)[1]).replaceAll(/_/g," "),
    title: (path.match(/@(.*)/)[1]).replaceAll(/_/g, " ").replace(".jpg",""),
    path: require("./" + path),
  })
);

export default speakerImages;
