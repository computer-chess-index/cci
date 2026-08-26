# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2669<sub>(+59) | 2975<sub>(+31) | 3040<sub>(+15) |  |
| 0.35 | 2026-05-13 | 2610<sub>(+112) | 2944<sub>(+70) | 3025<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2498<sub>(+17) | 2874<sub>(+120) | 2925<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2481<sub>(+89) | 2754<sub>(+97) | 2832<sub>(+117) |  |
| 0.25 | 2026-04-06 | 2392<sub>(+515) | 2657<sub>(+593) | 2715<sub>(+562) |  |
| 0.08 | 2026-02-05 | 1877 | 2064 | 2153 |  |
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

Generated: 2026-08-26 06:25:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1877, 2392, 2481, 2498, 2610, 2669]
  line "STC (8.0+0.08s)" [1877, 2392, 2481, 2498, 2610, 2669]
  line "LTC (60.0+0.60s)" [2064, 2657, 2754, 2874, 2944, 2975]
  line "VLTC (2m24s+1.12s)" [2153, 2715, 2832, 2925, 3025, 3040]
  line "VLTC (2m24s+1.12s)" [2153, 2715, 2832, 2925, 3025, 3040]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3040 | 29 | 362 | 51% | 3033 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2975 | 28 | 378 | 49% | 2984 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2669 | 28 | 404 | 49% | 2676 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 28 | 388 | 51% | 3016 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 30 | 324 | 49% | 2955 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2610 | 31 | 340 | 50% | 2610 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2925 | 32 | 304 | 51% | 2919 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2874 | 30 | 336 | 49% | 2884 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2498 | 36 | 280 | 50% | 2495 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2832 | 31 | 328 | 51% | 2827 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2754 | 32 | 312 | 50% | 2754 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2481 | 31 | 356 | 51% | 2472 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2715 | 36 | 236 | 55% | 2665 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2657 | 36 | 228 | 57% | 2593 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2392 | 37 | 236 | 55% | 2348 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2153 | 28 | 392 | 46% | 2203 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2064 | 29 | 384 | 48% | 2091 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1877 | 31 | 356 | 48% | 1901 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |