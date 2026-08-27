# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3166<sub>(+43) | 3395<sub>(+21) | 3424<sub>(+27) |  |
| 4.0 | 2026-04-18 | 3123<sub>(+96) | 3374<sub>(+120) | 3397<sub>(+73) |  |
| 3.0 | 2025-12-05 | 3027 | 3254 | 3324 |  |
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

Generated: 2026-08-27 07:34:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3027, 3123, 3166]
  line "STC (8.0+0.08s)" [3027, 3123, 3166]
  line "LTC (60.0+0.60s)" [3254, 3374, 3395]
  line "" [3324, 3397, 3424]
  line "VLTC (2m24s+1.12s)" [3324, 3397, 3424]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 23 | 456 | 49% | 3428 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 25 | 394 | 50% | 3395 | 78% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3166 | 26 | 404 | 51% | 3156 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 29 | 284 | 50% | 3398 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 30 | 280 | 50% | 3371 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 32 | 264 | 50% | 3120 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3324 | 26 | 368 | 50% | 3325 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 27 | 358 | 52% | 3225 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3027 | 24 | 496 | 52% | 2998 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |