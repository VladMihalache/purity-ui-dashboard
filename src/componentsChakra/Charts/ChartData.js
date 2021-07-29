// DEVELOPMENT PURPOSES ONLY

const [series, setSeries] = useState([
  {
    type: "area",
    name: "Mobile apps",
    data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
  },
  {
    type: "area",
    name: "Websites",
    data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
  },
]);

const [data, setData] = useState([
  {
    data: [
      {
        x: "Jan",
        y: [0, 75],
      },
      {
        x: "Feb",
        y: [0, 96],
      },
      {
        x: "Mar",
        y: [0, 200],
      },
      {
        x: "Apr",
        y: [0, 112],
      },
      {
        x: "May",
        y: [0, 53],
      },
      {
        x: "Jun",
        y: [0, 67],
      },
      {
        x: "Jul",
        y: [0, 108],
      },
      {
        x: "Aug",
        y: [0, 122],
      },
      {
        x: "Sep",
        y: [0, 74],
      },
      {
        x: "Oct",
        y: [0, 60],
      },
      {
        x: "Nov",
        y: [0, 81],
      },
      {
        x: "Dec",
        y: [0, 225],
      },
    ],
  },
]);
const GenerateSeries = () => {
  const newSeries = [];
  series.map((s) => {
    const data = s.data.map(() => {
      return Math.round(Math.random() * (180 - Math.exp(Math.random())));
    });
    newSeries.push({ data, name: s.name });
  });
  setSeries(newSeries);
};
