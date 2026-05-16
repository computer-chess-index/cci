# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3352<sub>(+15) | 3532<sub>(+21) | 3565<sub>(+9) |  |
| 11.1.5 | 2024-12-30 | 3337<sub>(+new) | 3511<sub>(+new) | 3556<sub>(+new) |  |
| 11.1 | 2024-11-11 |  |  |  |  |
| 11.0 | 2024-09-26 | 3282<sub>(+10) | 3495<sub>(-12) | 3541<sub>(-5) |  |
| 10.5 | 2024-07-13 | 3272<sub>(+new) | 3507<sub>(+new) | 3546<sub>(+new) |  |
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

Generated: 2026-05-16 06:25:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3272, 3282, 3337, 3352]
  line "STC (8.0+0.08s)" [3272, 3282, 3337, 3352]
  line "LTC (60.0+0.60s)" [3507, 3495, 3511, 3532]
  line "VLTC (2m24s+1.12s)" [3546, 3541, 3556, 3565]
  line "VLTC (2m24s+1.12s)" [3546, 3541, 3556, 3565]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 12 | 1584 | 50% | 3568 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 12 | 1584 | 50% | 3530 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3352 | 13 | 1560 | 51% | 3348 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 21 | 544 | 50% | 3552 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 21 | 544 | 50% | 3511 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3337 | 22 | 552 | 49% | 3345 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 18 | 760 | 50% | 3540 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 18 | 768 | 49% | 3503 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3282 | 18 | 816 | 49% | 3286 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 31 | 252 | 52% | 3491 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 35 | 192 | 50% | 3506 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3272 | 31 | 272 | 48% | 3285 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |