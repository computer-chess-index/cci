# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2597<sub>(+105) | 2940<sub>(+75) | 3013<sub>(+98) |  |
| 0.30 | 2026-05-01 | 2492<sub>(+16) | 2865<sub>(+120) | 2915<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2476<sub>(+88) | 2745<sub>(+95) | 2823<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2388<sub>(+511) | 2650<sub>(+589) | 2708<sub>(+559) |  |
| 0.08 | 2026-02-05 | 1877 | 2061 | 2149 |  |
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

Generated: 2026-05-20 06:24:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1877, 2388, 2476, 2492, 2597]
  line "STC (8.0+0.08s)" [1877, 2388, 2476, 2492, 2597]
  line "LTC (60.0+0.60s)" [2061, 2650, 2745, 2865, 2940]
  line "VLTC (2m24s+1.12s)" [2149, 2708, 2823, 2915, 3013]
  line "VLTC (2m24s+1.12s)" [2149, 2708, 2823, 2915, 3013]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 29 | 344 | 51% | 3002 | 46% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 31 | 300 | 49% | 2946 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2597 | 33 | 312 | 50% | 2600 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 32 | 304 | 51% | 2907 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 30 | 336 | 49% | 2874 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2492 | 36 | 280 | 50% | 2488 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2823 | 31 | 328 | 51% | 2817 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 312 | 50% | 2746 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 31 | 356 | 51% | 2466 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 36 | 228 | 57% | 2587 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2388 | 37 | 236 | 55% | 2344 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 28 | 392 | 46% | 2199 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2061 | 29 | 384 | 48% | 2088 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1877 | 31 | 356 | 48% | 1901 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |