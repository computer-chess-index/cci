# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2526<sub>(+55) | 2840<sub>(+35) | 2889<sub>(+18) |  |
| 6.0 | 2026-03-31 | 2471<sub>(+92) | 2805<sub>(+94) | 2871<sub>(+72) |  |
| 5.3 | 2025-09-26 | 2379<sub>(+new) | 2711<sub>(+new) | 2799<sub>(+new) |  |
| 5.1 | 2024-03-24 |  |  |  |  |
| 5.0 | 2021-04-07 |  |  |  |  |
| 4.2 | 2020-09-23 |  |  |  |  |
| 4.0 | 2020-01-24 |  |  |  |  |
| 3.0 | 2019-02-23 |  |  |  |  |
| 2.1 | 2019-01-14 |  |  |  |  |
| 2.0 | 2018-11-26 |  |  |  |  |
| 1.5 | 2018-07-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-31 06:30:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2379, 2471, 2526]
  line "STC (8.0+0.08s)" [2379, 2471, 2526]
  line "LTC (60.0+0.60s)" [2711, 2805, 2840]
  line "VLTC (2m24s+1.12s)" [2799, 2871, 2889]
  line "VLTC (2m24s+1.12s)" [2799, 2871, 2889]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2889 | 34 | 260 | 52% | 2871 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2840 | 33 | 272 | 51% | 2827 | 43% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2526 | 34 | 288 | 48% | 2542 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 27 | 406 | 50% | 2873 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 29 | 362 | 50% | 2803 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2471 | 26 | 476 | 48% | 2491 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2799 | 31 | 312 | 48% | 2815 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 32 | 310 | 52% | 2693 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2379 | 29 | 420 | 50% | 2376 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |