# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3429<sub>(+new) | 3580<sub>(+new) | 3594<sub>(+new) |  |
| 9.0 | 2025-08-19 |  |  |  |  |
| 8.2.5 | 2025-07-14 | 3387<sub>(+new) | 3536<sub>(+new) | 3564<sub>(+new) |  |
| 8.2.1 | 2025-07-12 |  |  |  |  |
| 8.2 | 2025-07-11 |  |  |  |  |
| 8.1 | 2024-12-03 | 3390<sub>(+6) | 3521<sub>(-11) | 3561<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3384<sub>(+new) | 3532<sub>(+new) | 3561<sub>(+new) |  |
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

Generated: 2026-05-12 06:23:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3384, 3390, 3387, 3429]
  line "STC (8.0+0.08s)" [3384, 3390, 3387, 3429]
  line "LTC (60.0+0.60s)" [3532, 3521, 3536, 3580]
  line "VLTC (2m24s+1.12s)" [3561, 3561, 3564, 3594]
  line "VLTC (2m24s+1.12s)" [3561, 3561, 3564, 3594]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 24 | 380 | 50% | 3594 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3580 | 24 | 408 | 50% | 3582 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3429 | 21 | 558 | 50% | 3429 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 32 | 220 | 51% | 3560 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 32 | 236 | 49% | 3542 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3387 | 31 | 254 | 49% | 3394 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 14 | 1160 | 50% | 3559 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 14 | 1176 | 50% | 3522 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3390 | 15 | 1124 | 51% | 3386 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 18 | 748 | 51% | 3528 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 19 | 676 | 51% | 3524 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3384 | 20 | 680 | 55% | 3255 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |