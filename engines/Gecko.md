# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2668<sub>(+61) | 2974<sub>(+31) | 3039<sub>(+15) |  |
| 0.35 | 2026-05-13 | 2607<sub>(+111) | 2943<sub>(+70) | 3024<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2496<sub>(+16) | 2873<sub>(+122) | 2924<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2480<sub>(+89) | 2751<sub>(+96) | 2831<sub>(+117) |  |
| 0.25 | 2026-04-06 | 2391<sub>(+514) | 2655<sub>(+592) | 2714<sub>(+562) |  |
| 0.08 | 2026-02-05 | 1877 | 2063 | 2152 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:25:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1877, 2391, 2480, 2496, 2607, 2668]
  line "STC (8.0+0.08s)" [1877, 2391, 2480, 2496, 2607, 2668]
  line "LTC (60.0+0.60s)" [2063, 2655, 2751, 2873, 2943, 2974]
  line "VLTC (2m24s+1.12s)" [2152, 2714, 2831, 2924, 3024, 3039]
  line "VLTC (2m24s+1.12s)" [2152, 2714, 2831, 2924, 3024, 3039]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3039 | 29 | 362 | 51% | 3031 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2974 | 28 | 378 | 49% | 2982 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2668 | 28 | 404 | 49% | 2674 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3024 | 28 | 388 | 51% | 3015 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 30 | 324 | 49% | 2954 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2607 | 31 | 340 | 50% | 2608 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2924 | 32 | 304 | 51% | 2916 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2873 | 30 | 336 | 49% | 2882 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2496 | 36 | 280 | 50% | 2492 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 31 | 328 | 51% | 2826 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2751 | 32 | 312 | 50% | 2753 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2480 | 31 | 356 | 51% | 2471 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2714 | 36 | 236 | 55% | 2664 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2655 | 36 | 228 | 57% | 2592 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2391 | 37 | 236 | 55% | 2345 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2152 | 28 | 392 | 46% | 2202 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2063 | 29 | 384 | 48% | 2090 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1877 | 31 | 356 | 48% | 1901 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |