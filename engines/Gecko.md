# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2666<sub>(+112) | 3004<sub>(+76) | 3074<sub>(+96) |  |
| 0.30 | 2026-05-01 | 2554<sub>(+16) | 2928<sub>(+119) | 2978<sub>(+90) |  |
| 0.25.1 | 2026-04-12 | 2538<sub>(+90) | 2809<sub>(+95) | 2888<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2448<sub>(+532) | 2714<sub>(+604) | 2772<sub>(+566) |  |
| 0.08 | 2026-02-05 | 1916 | 2110 | 2206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:24:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1916, 2448, 2538, 2554, 2666]
  line "STC (8.0+0.08s)" [1916, 2448, 2538, 2554, 2666]
  line "LTC (60.0+0.60s)" [2110, 2714, 2809, 2928, 3004]
  line "VLTC (2m24s+1.12s)" [2206, 2772, 2888, 2978, 3074]
  line "VLTC (2m24s+1.12s)" [2206, 2772, 2888, 2978, 3074]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3074 | 30 | 320 | 51% | 3063 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 32 | 280 | 48% | 3017 | 50% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2666 | 34 | 292 | 50% | 2665 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2978 | 32 | 304 | 51% | 2971 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2928 | 30 | 336 | 49% | 2938 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2554 | 36 | 280 | 50% | 2550 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 31 | 328 | 51% | 2882 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 32 | 312 | 50% | 2811 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2538 | 31 | 356 | 51% | 2529 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2772 | 36 | 236 | 55% | 2722 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2714 | 36 | 228 | 57% | 2650 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2448 | 37 | 236 | 55% | 2402 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 28 | 392 | 46% | 2255 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2110 | 29 | 384 | 48% | 2138 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1916 | 31 | 356 | 48% | 1940 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |