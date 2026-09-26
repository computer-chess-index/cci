# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3312<sub>(+17) | 3494<sub>(+23) | 3528<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3295<sub>(+55) | 3471<sub>(+16) | 3517<sub>(+15) |  |
| 11.0 | 2024-09-26 | 3240<sub>(+9) | 3455<sub>(-13) | 3502<sub>(-5) |  |
| 10.5 | 2024-07-13 | 3231 | 3468 | 3507 |  |
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

Generated: 2026-09-26 04:39:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3231, 3240, 3295, 3312]
  line "STC (8.0+0.08s)" [3231, 3240, 3295, 3312]
  line "LTC (60.0+0.60s)" [3468, 3455, 3471, 3494]
  line "" [3507, 3502, 3517, 3528]
  line "VLTC (2m24s+1.12s)" [3507, 3502, 3517, 3528]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 12 | 1688 | 50% | 3529 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 12 | 1674 | 50% | 3491 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3312 | 12 | 1732 | 51% | 3306 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 21 | 544 | 50% | 3513 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 21 | 544 | 50% | 3472 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3295 | 22 | 552 | 49% | 3303 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 18 | 760 | 50% | 3501 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 18 | 768 | 49% | 3463 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3240 | 18 | 816 | 49% | 3244 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 31 | 252 | 52% | 3452 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 35 | 192 | 50% | 3467 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3231 | 31 | 272 | 48% | 3241 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |