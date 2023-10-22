let cabinet = {
  topDrawer: {
    box1: "Dobri",
    box2: "Irbod",
  },
  bottomeDrawer: {
    box1: "mela",
    box2: "Alem",
    box3: {
      nishto: "nishto",
    },
  },
};

console.log(Object.keys(cabinet.bottomeDrawer["box3"]));
