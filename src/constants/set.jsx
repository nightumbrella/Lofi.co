import {
  setChillImg,
  setSpringImg,
  setBookImg,
  setNorthernImg,
  setDeskImg,
  setForestImg,
  setOceanImg,
  setCafeImg,
  setVanImg,
  setSummerImg,
  sceneChill1Img,
  sceneChill2Img,
  sceneNorthern1Img,
  sceneNorthern2Img,
  sceneDesk1Img,
  sceneDesk2Img,
  sceneDesk3Img,
  sceneForest1Img,
  sceneForest2Img,
  sceneOcean1Img,
  sceneOcean2Img,
  sceneCafe1Img,
  sceneCafe2Img,
  sceneVan1Img,
  sceneVan2Img,
  sceneSummer1Img,
  sceneSummer2Img,
  sceneSpring1Img,
  sceneSpring2Img,
  sceneBook1Img,
  sceneBook2Img,
} from "../assets/images";

import {
  cafe1Day,
  cafe1Night,
  cafe1RainyDay,
  cafe1RainyNight,
  cafe2Day,
  cafe2Night,
  cafe2RainyDay,
  cafe2RainyNight,
  chill1Day,
  chill1Night,
  chill1RainyDay,
  chill1Rainynight,
  chill2Day,
  chill2Night,
  chill2RainyDay,
  chill2Rainynight,
  desk1,
  desk2,
  desk3,
  northern1,
  northern2,
  forest1,
  forest2,
  ocean1,
  ocean2,
  summer1,
  summer2,
  van1,
  van2,
} from "../assets/videos";

export const SETS = [
  {
    set: "chill",
    img: setChillImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneChill1Img,
        video: {
          light: chill1Day,
          night: chill1Night,
        },
      },
      {
        scene: "scene2",
        img: sceneChill2Img,
        video: {
          light: chill1Day,
          night: chill1Night,
        },
      },
    ],
  },
  {
    set: "spring",
    img: setSpringImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneSpring1Img,
        video: {
          light: summer1,
          night: summer2,
        },
      },
      {
        scene: "scene2",
        img: sceneSpring2Img,
        video: {
          light: summer1,
          night: summer2,
        },
      },
    ],
  },
  {
    set: "northern",
    img: setNorthernImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneNorthern1Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
      {
        scene: "scene2",
        img: sceneNorthern2Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
    ],
  },
  {
    set: "book",
    img: setBookImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneBook1Img,
        video: {
          light: sceneBook1Img,
          night: sceneBook2Img,
        },
      },
      {
        scene: "scene2",
        img: sceneBook2Img,
        video: {
          light: van1,
          night: van2,
        },
      },
    ],
  },
  {
    set: "desk",
    img: setDeskImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneDesk1Img,
        video: {
          light: desk1,
          night: desk2,
        },
      },
      {
        scene: "scene2",
        img: sceneDesk2Img,
        video: {
          light: desk1,
          night: desk2,
        },
      },
      {
        scene: "scene3",
        img: sceneDesk3Img,
        video: {
          light: desk1,
          night: desk2,
        },
      },
    ],
  },
  {
    set: "forest",
    img: setForestImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneForest1Img,
        video: {
          light: forest1,
          night: forest2,
        },
      },
      {
        scene: "scene2",
        img: sceneForest2Img,
        video: {
          light: forest1,
          night: forest2,
        },
      },
    ],
  },
  {
    set: "ocean",
    img: setOceanImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneOcean1Img,
        video: {
          light: ocean1,
          night: ocean2,
        },
      },
      {
        scene: "scene2",
        img: sceneOcean2Img,
        video: {
          light: ocean1,
          night: ocean2,
        },
      },
    ],
  },
  {
    set: "cafe",
    img: setCafeImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneCafe1Img,
        video: {
          light: cafe1Day,
          night: cafe2Day,
        },
      },
      {
        scene: "scene2",
        img: sceneCafe2Img,
        video: {
          light: cafe1Day,
          night: cafe2Day,
        },
      },
    ],
  },
  {
    set: "van",
    img: setVanImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneVan1Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
      {
        scene: "scene2",
        img: sceneVan2Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
    ],
  },
  {
    set: "summer",
    img: setSummerImg,
    scenes: [
      {
        scene: "scene1",
        img: sceneSummer1Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
      {
        scene: "scene2",
        img: sceneSummer2Img,
        video: {
          light: northern1,
          night: northern2,
        },
      },
    ],
  },
];

export const NEW_SET = [
  {
    id: 1,
    thumbnails: sceneOcean1Img,
    content: ocean1,
    content2: ocean2
  },
  {
    id: 2,
    thumbnails: sceneForest1Img,
    content: forest1,
    content2: forest2,
  }
]
