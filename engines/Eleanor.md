# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3173<sub>(+46) | 3398<sub>(+19) | 3429<sub>(+26) |  |
| 4.0 | 2026-04-18 | 3127<sub>(+95) | 3379<sub>(+120) | 3403<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3032 | 3259 | 3329 |  |
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

Generated: 2026-09-16 04:37:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3032, 3127, 3173]
  line "STC (8.0+0.08s)" [3032, 3127, 3173]
  line "LTC (60.0+0.60s)" [3259, 3379, 3398]
  line "" [3329, 3403, 3429]
  line "VLTC (2m24s+1.12s)" [3329, 3403, 3429]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 23 | 464 | 49% | 3433 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3398 | 24 | 410 | 49% | 3401 | 77% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3173 | 25 | 436 | 51% | 3160 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 29 | 284 | 50% | 3403 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 30 | 280 | 50% | 3376 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 32 | 264 | 50% | 3124 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3329 | 26 | 368 | 50% | 3330 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3259 | 27 | 358 | 52% | 3231 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3032 | 24 | 496 | 52% | 3004 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |