# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3308<sub>(+15) | 3491<sub>(+23) | 3524<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3293<sub>(+56) | 3468<sub>(+16) | 3513<sub>(+14) |  |
| 11.0 | 2024-09-26 | 3237<sub>(+9) | 3452<sub>(-13) | 3499<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3228 | 3465 | 3503 |  |
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

Generated: 2026-09-16 04:39:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3228, 3237, 3293, 3308]
  line "STC (8.0+0.08s)" [3228, 3237, 3293, 3308]
  line "LTC (60.0+0.60s)" [3465, 3452, 3468, 3491]
  line "" [3503, 3499, 3513, 3524]
  line "VLTC (2m24s+1.12s)" [3503, 3499, 3513, 3524]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 12 | 1684 | 50% | 3525 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 12 | 1670 | 50% | 3487 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3308 | 12 | 1724 | 51% | 3302 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 21 | 544 | 50% | 3510 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 21 | 544 | 50% | 3470 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3293 | 22 | 552 | 49% | 3301 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 18 | 760 | 50% | 3498 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 18 | 768 | 49% | 3460 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3237 | 18 | 816 | 49% | 3240 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 31 | 252 | 52% | 3449 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 35 | 192 | 50% | 3463 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3228 | 31 | 272 | 48% | 3239 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |