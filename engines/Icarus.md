# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3332<sub>(-12) | 3502<sub>(+3) | 3530<sub>(-11) |  |
| 1.1 | 2026-06-05 | 3344<sub>(+24) | 3499<sub>(+35) | 3541<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3320 | 3464 | 3510 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:38:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3320, 3344, 3332]
  line "STC (8.0+0.08s)" [3320, 3344, 3332]
  line "LTC (60.0+0.60s)" [3464, 3499, 3502]
  line "" [3510, 3541, 3530]
  line "VLTC (2m24s+1.12s)" [3510, 3541, 3530]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 25 | 380 | 50% | 3529 | 86% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 27 | 312 | 50% | 3503 | 85% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3332 | 29 | 284 | 49% | 3337 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 28 | 300 | 50% | 3538 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 24 | 404 | 52% | 3486 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3344 | 28 | 324 | 51% | 3339 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 27 | 334 | 50% | 3506 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 26 | 338 | 51% | 3459 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3320 | 27 | 348 | 51% | 3313 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |