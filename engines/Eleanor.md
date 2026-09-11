# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3171<sub>(+46) | 3395<sub>(+19) | 3428<sub>(+27) |  |
| 4.0 | 2026-04-18 | 3125<sub>(+96) | 3376<sub>(+120) | 3401<sub>(+75) |  |
| 3.0 | 2025-12-05 | 3029 | 3256 | 3326 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-11 04:37:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3029, 3125, 3171]
  line "STC (8.0+0.08s)" [3029, 3125, 3171]
  line "LTC (60.0+0.60s)" [3256, 3376, 3395]
  line "" [3326, 3401, 3428]
  line "VLTC (2m24s+1.12s)" [3326, 3401, 3428]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 23 | 464 | 49% | 3432 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 24 | 410 | 49% | 3399 | 77% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3171 | 25 | 432 | 52% | 3159 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 29 | 284 | 50% | 3401 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 30 | 280 | 50% | 3374 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3125 | 32 | 264 | 50% | 3123 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3326 | 26 | 368 | 50% | 3329 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3256 | 27 | 358 | 52% | 3229 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3029 | 24 | 496 | 52% | 3001 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |