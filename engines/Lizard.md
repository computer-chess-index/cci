# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3306<sub>(+15) | 3488<sub>(+23) | 3521<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3291<sub>(+56) | 3465<sub>(+16) | 3511<sub>(+14) |  |
| 11.0 | 2024-09-26 | 3235<sub>(+10) | 3449<sub>(-14) | 3497<sub>(-5) |  |
| 10.5 | 2024-07-13 | 3225 | 3463 | 3502 |  |
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

Generated: 2026-09-11 04:39:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3225, 3235, 3291, 3306]
  line "STC (8.0+0.08s)" [3225, 3235, 3291, 3306]
  line "LTC (60.0+0.60s)" [3463, 3449, 3465, 3488]
  line "" [3502, 3497, 3511, 3521]
  line "VLTC (2m24s+1.12s)" [3502, 3497, 3511, 3521]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 12 | 1684 | 50% | 3524 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 12 | 1666 | 50% | 3486 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3306 | 12 | 1720 | 51% | 3301 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 21 | 544 | 50% | 3507 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 21 | 544 | 50% | 3467 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3291 | 22 | 552 | 49% | 3298 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 18 | 760 | 50% | 3495 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 18 | 768 | 49% | 3457 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3235 | 18 | 816 | 49% | 3239 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 31 | 252 | 52% | 3447 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 35 | 192 | 50% | 3461 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3225 | 31 | 272 | 48% | 3237 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |