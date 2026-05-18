# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.25 | 2026-04-05 | 3434<sub>(+2) | 3572<sub>(-8) | 3599<sub>(+4) |  |
| 1.24 | 2025-12-03 | 3432<sub>(+2) | 3580<sub>(+15) | 3595<sub>(+1) |  |
| 1.23 | 2025-08-21 | 3430<sub>(+16) | 3565<sub>(+4) | 3594<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3414<sub>(+7) | 3561<sub>(+8) | 3576<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3407<sub>(+8) | 3553<sub>(+19) | 3588<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3399<sub>(+new) | 3534<sub>(+new) | 3590<sub>(+new) |  |
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

Generated: 2026-05-18 06:23:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3399, 3407, 3414, 3430, 3432, 3434]
  line "STC (8.0+0.08s)" [3399, 3407, 3414, 3430, 3432, 3434]
  line "LTC (60.0+0.60s)" [3534, 3553, 3561, 3565, 3580, 3572]
  line "VLTC (2m24s+1.12s)" [3590, 3588, 3576, 3594, 3595, 3599]
  line "VLTC (2m24s+1.12s)" [3590, 3588, 3576, 3594, 3595, 3599]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 28 | 282 | 49% | 3602 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3572 | 27 | 306 | 50% | 3573 | 88% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3434 | 27 | 332 | 49% | 3440 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3595 | 28 | 296 | 52% | 3584 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3580 | 29 | 272 | 50% | 3578 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3432 | 21 | 534 | 50% | 3432 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 28 | 288 | 51% | 3588 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 29 | 280 | 51% | 3561 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3430 | 23 | 468 | 48% | 3444 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 24 | 388 | 50% | 3576 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 25 | 356 | 49% | 3565 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3414 | 25 | 380 | 50% | 3413 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 18 | 724 | 51% | 3582 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 15 | 1096 | 51% | 3534 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3407 | 15 | 1136 | 50% | 3407 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 36 | 176 | 51% | 3583 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 37 | 168 | 50% | 3502 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3399 | 30 | 267 | 48% | 3413 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |