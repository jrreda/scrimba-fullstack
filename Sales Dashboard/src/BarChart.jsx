import { Chart } from "react-charts";

export default function BarChart({ metrics }) {
  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.total,
      })),
    },
  ];
  console.log('metrics', metrics);
  console.log('chartData', chartData);
  

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: "band",
    padding: 0.2,
    position: "bottom",
  };

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.total));
      return maxSum + 2000;
    }
    return 5000;
  }

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: "linear",
      min: 0,
      max: y_max(),
      padding: {
        top: 20,
        bottom: 40,
      },
    },
  ];

  return (
    <div
      className="chart-container"
      role="region"
      aria-label="Sales chart and data"
    >
      <h2>Total Sales This Quarter ($)</h2>
      <div style={{ flex: 1 }}>
        <Chart
          options={{
            data: chartData,
            primaryAxis,
            secondaryAxes,
            type: "bar",
            defaultColors: ["#58d675"],
            tooltip: {
              show: false,
            },
          }}
        />
      </div>
    </div>
  );
}
