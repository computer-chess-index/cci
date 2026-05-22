# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3370<sub>(+new) | 3519<sub>(+new) | 3534<sub>(+new) |  |
| 9.0 | 2025-08-19 |  |  |  |  |
| 8.2.5 | 2025-07-14 | 3326<sub>(+new) | 3476<sub>(+new) | 3505<sub>(+new) |  |
| 8.2.1 | 2025-07-12 |  |  |  |  |
| 8.2 | 2025-07-11 |  |  |  |  |
| 8.1 | 2024-12-03 | 3329<sub>(+4) | 3460<sub>(-11) | 3501<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3325<sub>(+new) | 3471<sub>(+new) | 3501<sub>(+new) |  |
| 8.0 | 2024-09-02 |  |  |  |  |
| 7.1 | 2024-08-11 |  |  |  |  |
| 7.0 | 2024-07-24 |  |  |  |  |
| 6.2 | 2024-06-10 |  |  |  |  |
| 6.1 | 2023-12-12 |  |  |  |  |
| 6.0 | 2023-08-11 |  |  |  |  |
| 5.0 | 2023-06-24 |  |  |  |  |
| 4.1 | 2023-05-15 |  |  |  |  |
| 4.0 | 2023-04-13 |  |  |  |  |
| 3.3.1 | 2023-02-17 |  |  |  |  |
| 3.3 | 2023-02-12 |  |  |  |  |
| 3.2.1 | 2022-12-13 |  |  |  |  |
| 3.2.0 | 2022-12-10 |  |  |  |  |
| 3.1 | 2022-03-26 |  |  |  |  |
| 3.0 | 2022-01-23 |  |  |  |  |
| 2.4 | 2021-07-14 |  |  |  |  |
| 2.3.1 | 2021-05-19 |  |  |  |  |
| 2.3 | 2021-05-18 |  |  |  |  |
| 2.2 | 2021-05-04 |  |  |  |  |
| 2.1.3 | 2021-05-01 |  |  |  |  |
| 2.1.2.1 | 2021-04-26 |  |  |  |  |
| 2.1.2 | 2021-04-25 |  |  |  |  |
| 2.1.1.3 | 2021-04-24 |  |  |  |  |
| 2.1.1.1 | 2021-04-23 |  |  |  |  |
| 2.1.1.1 | 2021-04-23 |  |  |  |  |
| 2.1 | 2021-04-22 |  |  |  |  |
| 2.0 | 2021-04-22 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clover+<version>&body=###%20Engine%20name%0AClover%0A%0A###%20Version%0A9.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 14:54:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3325, 3329, 3326, 3370]
  line "STC (8.0+0.08s)" [3325, 3329, 3326, 3370]
  line "LTC (60.0+0.60s)" [3471, 3460, 3476, 3519]
  line "VLTC (2m24s+1.12s)" [3501, 3501, 3505, 3534]
  line "VLTC (2m24s+1.12s)" [3501, 3501, 3505, 3534]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 24 | 388 | 50% | 3533 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 23 | 412 | 50% | 3522 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3370 | 21 | 570 | 50% | 3370 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 32 | 220 | 51% | 3499 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 32 | 236 | 49% | 3482 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3326 | 31 | 254 | 49% | 3333 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 14 | 1160 | 50% | 3498 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 14 | 1176 | 50% | 3461 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3329 | 15 | 1124 | 51% | 3325 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 18 | 748 | 51% | 3468 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 19 | 676 | 51% | 3463 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3325 | 20 | 680 | 55% | 3197 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |