import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const config = {
            type: "line",
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.2,
                },
              ],
            },
          };
      
          new Chart(ctx, config);
    }, []);
    

    // const labels = Utils.months({ count: 7 });
    // const data = {
    //     labels: labels,
    //     datasets: [
    //         {
    //             label: "My First Dataset",
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             fill: false,
    //             borderColor: "rgb(75, 192, 192)",
    //             tension: 0.2,
    //         },
    //     ],
    // };
    return <canvas ref={chartRef} />;
};

export default LineChart;
