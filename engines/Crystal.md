# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3414<sub>(+new) | 3553<sub>(+new) | 3582<sub>(+new) |  |
| 8 | 2024-04-05 |  |  |  |  |
| 8 | 2024-04-05 |  |  |  |  |
| 7 | 2023-11-09 |  |  |  |  |
| 7 | 2023-11-09 |  |  |  |  |
| 6 | 2023-05-14 |  |  |  |  |
| 6 | 2023-05-14 |  |  |  |  |
| 5 | 2022-11-05 | 3366<sub>(+new) | 3507<sub>(+new) | 3528<sub>(+new) |  |
| 4.1 | 2022-07-03 |  |  |  |  |
| 4.0 | 2021-12-25 |  |  |  |  |
| 4.0 | 2021-12-25 |  |  |  |  |
| 3.2 | 2021-06-23 |  |  |  |  |
| 3.1 | 2021-01-14 |  |  |  |  |
| 3.0 | 2020-09-10 |  |  |  |  |
| 2.0 | 2020-04-08 |  |  |  |  |
| 2.0 | 2020-04-08 |  |  |  |  |
| 1.1 | 2019-08-27 |  |  |  |  |
| 1.1 | 2019-08-27 |  |  |  |  |
| 1.1 | 2019-08-27 |  |  |  |  |
| MF_10 | 2018-12-04 |  |  |  |  |
| MF_10 | 2018-12-04 |  |  |  |  |
| MF_10 | 2018-12-04 |  |  |  |  |
| MF_9 | 2018-02-12 |  |  |  |  |
| MF_9 | 2018-02-12 |  |  |  |  |
| MF_9 | 2018-02-12 |  |  |  |  |
| MF_1 | 2017-11-20 |  |  |  |  |
| MF_1 | 2017-11-20 |  |  |  |  |
| MF_1 | 2017-11-20 |  |  |  |  |
| MF_1 | 2017-11-20 |  |  |  |  |
| MF_1 | 2017-11-20 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 14:54:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3366, 3414]
  line "STC (8.0+0.08s)" [3366, 3414]
  line "LTC (60.0+0.60s)" [3507, 3553]
  line "VLTC (2m24s+1.12s)" [3528, 3582]
  line "VLTC (2m24s+1.12s)" [3528, 3582]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 55 | 76 | 55% | 3552 | 86% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 24 | 394 | 51% | 3545 | 88% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3414 | 21 | 574 | 51% | 3407 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 27 | 320 | 55% | 3484 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 12 | 1640 | 50% | 3507 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3366 | 12 | 1796 | 52% | 3353 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |