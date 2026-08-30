# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3042<sub>(+133) | 3275<sub>(+65) | 3360<sub>(+73) |  |
| 1.3 | 2025-09-19 | 2909 | 3210 | 3287 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 06:26:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2909, 3042]
  line "STC (8.0+0.08s)" [2909, 3042]
  line "LTC (60.0+0.60s)" [3210, 3275]
  line "" [3287, 3360]
  line "VLTC (2m24s+1.12s)" [3287, 3360]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3360 | 30 | 282 | 51% | 3353 | 72% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3275 | 26 | 388 | 53% | 3251 | 61% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3042 | 29 | 336 | 50% | 3043 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3287 | 24 | 462 | 52% | 3272 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 26 | 398 | 51% | 3201 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2909 | 22 | 640 | 53% | 2869 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |