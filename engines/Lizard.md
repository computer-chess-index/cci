# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3305<sub>(+15) | 3484<sub>(+21) | 3517<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3290<sub>(+new) | 3463<sub>(+new) | 3507<sub>(+new) |  |
| 11.1 | 2024-11-11 |  |  |  |  |
| 11.0 | 2024-09-26 | 3235<sub>(+10) | 3447<sub>(-13) | 3494<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3225<sub>(+new) | 3460<sub>(+new) | 3498<sub>(+new) |  |
| 10.4 | 2024-06-03 |  |  |  |  |
| 10.3 | 2024-03-09 |  |  |  |  |
| 10.2 | 2024-02-10 |  |  |  |  |
| 10.1 | 2024-01-13 |  |  |  |  |
| 10.0 | 2024-01-05 |  |  |  |  |
| 9.3.1 | 2023-12-30 |  |  |  |  |
| 9.3 | 2023-12-23 |  |  |  |  |
| 9.2 | 2023-11-06 |  |  |  |  |
| 9.1 | 2023-10-10 |  |  |  |  |
| 8.4 | 2023-09-18 |  |  |  |  |
| 6.2 | 2023-07-13 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:26:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3225, 3235, 3290, 3305]
  line "STC (8.0+0.08s)" [3225, 3235, 3290, 3305]
  line "LTC (60.0+0.60s)" [3460, 3447, 3463, 3484]
  line "VLTC (2m24s+1.12s)" [3498, 3494, 3507, 3517]
  line "VLTC (2m24s+1.12s)" [3498, 3494, 3507, 3517]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 12 | 1584 | 50% | 3519 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 12 | 1584 | 50% | 3482 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3305 | 13 | 1568 | 51% | 3299 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 21 | 544 | 50% | 3505 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 21 | 544 | 50% | 3464 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3290 | 22 | 552 | 49% | 3297 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 18 | 760 | 50% | 3492 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 18 | 768 | 49% | 3455 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3235 | 18 | 816 | 49% | 3239 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 31 | 252 | 52% | 3444 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 35 | 192 | 50% | 3459 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3225 | 31 | 272 | 48% | 3236 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |