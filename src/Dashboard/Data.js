function generateData(count, start, growth) {
  const data = [];

  for (let i = 0; i < count; ++i) {
    data.push(start + Math.random() * i * growth);
  }

  return data;
}

export const chartData = [
  {
    name: "Phone",
    data: generateData(6, 20, 5),
    color: "#60181E"
  },
  {
    name: "Services",
    data: generateData(6, 10, 0.2),
    color: "#DA5862"
  },
  {
    name: "Laptops",
    data: generateData(6, 10, 1),
    color: "#EEB5B9"
  }
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function format(num) {
  return `$${num}  Billion`;
}

export const tableRows = months.map((month, i) => ({
  month,
  phones: format(chartData[0].data[i]),
  services: format(chartData[1].data[i]),
  laptops: format(chartData[2].data[i])
}));

console.log(tableRows);
