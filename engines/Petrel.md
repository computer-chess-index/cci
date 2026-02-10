# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Ratings Verlauf

<div style="width: 100%; max-width: 1000px;">
  <canvas id="ratingsChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('ratingsChart');
  if (ctx) {
    const chartData = {
      labels: ['2.1', '3.0', '3.1', '3.2', '3.3'
      ],      datasets: [
        {
          label: 'STC (8.0+0.08s)',
          data: [2267, 2797, 2870, 2957, 2985],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          tension: 0.3
        },
        {
          label: 'LTC (60.0+0.60s)',
          data: [2458, 2981, 3054, 3151, 3209],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          tension: 0.3
        },
        {
          label: 'VLTC (2m24s+1.12s)',
          data: [2526, 3004, 3136, 3201, 3231],
          borderColor: 'rgb(75, 192, 75)',
          backgroundColor: 'rgba(75, 192, 75, 0.1)',
          tension: 0.3
        }
      ]
    };

    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Elo Ratings Entwicklung'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Elo Rating'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Version'
            }
          }
        }
      }
    });
  }
</script>

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-02-09 | 2985<sub>(new) | 3209<sub>(new) | 3231<sub>(new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2957<sub>(+87) | 3151<sub>(+97) | 3201<sub>(+65) |  |
| 3.1 | 2025-11-28 | 2870<sub>(+73) | 3054<sub>(+73) | 3136<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2797<sub>(+530) | 2981<sub>(+523) | 3004<sub>(+478) |  |
| 2.1 | 2025-10-13 | 2267<sub>(new) | 2458<sub>(new) | 2526<sub>(new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
 | | | cElo <sub>(âˆ† prev) | cElo <sub>(âˆ† prev) | cElo <sub>(âˆ† prev) | 

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-02-10 18:52:32