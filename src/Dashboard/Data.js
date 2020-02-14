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
