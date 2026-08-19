# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2669<sub>(+65) | 2970<sub>(+31) | 3038<sub>(+18) |  |
| 0.35 | 2026-05-13 | 2604<sub>(+112) | 2939<sub>(+69) | 3020<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2492<sub>(+16) | 2870<sub>(+121) | 2920<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2476<sub>(+88) | 2749<sub>(+98) | 2827<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2388<sub>(+514) | 2651<sub>(+592) | 2711<sub>(+562) |  |
| 0.08 | 2026-02-05 | 1874 | 2059 | 2149 |  |
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

Generated: 2026-08-19 06:25:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1874, 2388, 2476, 2492, 2604, 2669]
  line "STC (8.0+0.08s)" [1874, 2388, 2476, 2492, 2604, 2669]
  line "LTC (60.0+0.60s)" [2059, 2651, 2749, 2870, 2939, 2970]
  line "VLTC (2m24s+1.12s)" [2149, 2711, 2827, 2920, 3020, 3038]
  line "VLTC (2m24s+1.12s)" [2149, 2711, 2827, 2920, 3020, 3038]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3038 | 29 | 354 | 51% | 3027 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2970 | 28 | 378 | 49% | 2979 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2669 | 29 | 388 | 50% | 2672 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3020 | 28 | 388 | 51% | 3011 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 30 | 324 | 49% | 2950 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2604 | 31 | 340 | 50% | 2606 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 32 | 304 | 51% | 2913 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2870 | 30 | 336 | 49% | 2880 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2492 | 36 | 280 | 50% | 2489 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2827 | 31 | 328 | 51% | 2822 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2749 | 32 | 312 | 50% | 2750 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 31 | 356 | 51% | 2466 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 36 | 236 | 55% | 2660 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2651 | 36 | 228 | 57% | 2588 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2388 | 37 | 236 | 55% | 2342 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 28 | 392 | 46% | 2198 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 29 | 384 | 48% | 2087 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1874 | 31 | 356 | 48% | 1897 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |