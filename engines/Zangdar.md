# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3287<sub>(+97) | 3445<sub>(+79) | 3484<sub>(+94) |  |
| 6.1.1 | 2026-02-25 | 3190<sub>(+55) | 3366<sub>(+7) | 3390<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3135<sub>(+2) | 3359<sub>(+16) | 3421<sub>(+27) |  |
| 6 | 2026-02-07 | 3133<sub>(+12) | 3343<sub>(+6) | 3394<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3121 | 3337 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:24:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3121, 3133, 3135, 3190, 3287]
  line "STC (8.0+0.08s)" [3121, 3133, 3135, 3190, 3287]
  line "LTC (60.0+0.60s)" [3337, 3343, 3359, 3366, 3445]
  line "VLTC (2m24s+1.12s)" [3379, 3394, 3421, 3390, 3484]
  line "VLTC (2m24s+1.12s)" [3379, 3394, 3421, 3390, 3484]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 41 | 144 | 49% | 3490 | 78% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 40 | 150 | 50% | 3444 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3287 | 30 | 284 | 49% | 3291 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 25 | 394 | 50% | 3389 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 26 | 364 | 51% | 3362 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3190 | 25 | 444 | 51% | 3185 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 31 | 256 | 50% | 3418 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 27 | 332 | 49% | 3363 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3135 | 32 | 276 | 51% | 3128 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 36 | 192 | 50% | 3394 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 33 | 228 | 52% | 3332 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3133 | 34 | 244 | 49% | 3139 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 27 | 356 | 54% | 3343 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 31 | 272 | 51% | 3316 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3121 | 32 | 280 | 55% | 3065 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |