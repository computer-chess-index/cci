# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3175<sub>(+46) | 3401<sub>(+19) | 3432<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3129<sub>(+94) | 3382<sub>(+120) | 3406<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3035 | 3262 | 3332 |  |
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

Generated: 2026-09-24 04:37:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3035, 3129, 3175]
  line "STC (8.0+0.08s)" [3035, 3129, 3175]
  line "LTC (60.0+0.60s)" [3262, 3382, 3401]
  line "" [3332, 3406, 3432]
  line "VLTC (2m24s+1.12s)" [3332, 3406, 3432]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 23 | 464 | 49% | 3436 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3401 | 24 | 410 | 49% | 3403 | 77% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3175 | 25 | 436 | 51% | 3163 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 29 | 284 | 50% | 3406 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 30 | 280 | 50% | 3379 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3129 | 32 | 264 | 50% | 3127 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3332 | 26 | 368 | 50% | 3333 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 27 | 358 | 52% | 3233 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3035 | 24 | 496 | 52% | 3006 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |