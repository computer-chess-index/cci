# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.25 | 2026-04-05 | 3370<sub>(-1) | 3513<sub>(-6) | 3538<sub>(+4) |  |
| 1.24 | 2025-12-03 | 3371<sub>(+1) | 3519<sub>(+14) | 3534<sub>(+1) |  |
| 1.23 | 2025-08-21 | 3370<sub>(+17) | 3505<sub>(+4) | 3533<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3353<sub>(+6) | 3501<sub>(+9) | 3515<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3347<sub>(+8) | 3492<sub>(+18) | 3526<sub>(-3) |  |
| 1.20 | 2024-07-28 | 3339<sub>(+new) | 3474<sub>(+new) | 3529<sub>(+new) |  |
| 1.19 | 2024-06-23 |  |  |  |  |
| 1.18 | 2024-04-02 |  |  |  |  |
| 1.17 | 2024-02-12 |  |  |  |  |
| 1.16 | 2024-01-11 |  |  |  |  |
| 1.15 | 2023-12-13 |  |  |  |  |
| 1.14 | 2023-11-12 |  |  |  |  |
| 1.13.1 | 2023-09-29 |  |  |  |  |
| 1.13 | 2023-09-28 |  |  |  |  |
| 1.12 | 2023-09-02 |  |  |  |  |
| 1.11 | 2023-07-23 |  |  |  |  |
| 1.10 | 2023-06-26 |  |  |  |  |
| 1.9 | 2023-06-08 |  |  |  |  |
| 1.8 | 2023-04-25 |  |  |  |  |
| 1.7 | 2023-03-14 |  |  |  |  |
| 1.6.3 | 2023-02-17 |  |  |  |  |
| 1.6 | 2023-02-07 |  |  |  |  |
| 1.5 | 2023-01-15 |  |  |  |  |
| 1.4 | 2022-11-30 |  |  |  |  |
| 1.3 | 2022-11-15 |  |  |  |  |
| 1.2 | 2022-10-23 |  |  |  |  |
| 1.1 | 2022-10-02 |  |  |  |  |
| 1.0 | 2022-09-18 |  |  |  |  |
| 0.9 | 2022-08-21 |  |  |  |  |
| 0.8 | 2022-07-29 |  |  |  |  |
| 0.7 | 2022-07-11 |  |  |  |  |
| 0.5 | 2022-03-16 |  |  |  |  |
| 0.4 | 2021-11-12 |  |  |  |  |
| 0.3 | 2021-11-03 |  |  |  |  |
| 0.2 | 2021-10-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Caissa+<version>&body=###%20Engine%20name%0ACaissa%0A%0A###%20Version%0A1.25" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:23:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3339, 3347, 3353, 3370, 3371, 3370]
  line "STC (8.0+0.08s)" [3339, 3347, 3353, 3370, 3371, 3370]
  line "LTC (60.0+0.60s)" [3474, 3492, 3501, 3505, 3519, 3513]
  line "VLTC (2m24s+1.12s)" [3529, 3526, 3515, 3533, 3534, 3538]
  line "VLTC (2m24s+1.12s)" [3529, 3526, 3515, 3533, 3534, 3538]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 28 | 290 | 50% | 3540 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 26 | 338 | 50% | 3513 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3370 | 26 | 368 | 49% | 3378 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 28 | 296 | 52% | 3524 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 29 | 272 | 50% | 3517 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3371 | 21 | 534 | 50% | 3371 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 28 | 288 | 51% | 3528 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 29 | 280 | 51% | 3501 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3370 | 23 | 468 | 48% | 3382 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 24 | 388 | 50% | 3515 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 25 | 356 | 49% | 3505 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3353 | 25 | 380 | 50% | 3352 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 18 | 724 | 51% | 3521 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 15 | 1096 | 51% | 3474 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3347 | 15 | 1136 | 50% | 3347 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 36 | 176 | 51% | 3522 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 37 | 168 | 50% | 3441 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3339 | 30 | 267 | 48% | 3352 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |