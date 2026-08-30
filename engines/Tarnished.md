# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3352<sub>(-12) | 3534<sub>(+5) | 3560<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3364<sub>(+110) | 3529<sub>(+95) | 3552<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3254 | 3434 | 3482 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:13:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3254, 3364, 3352]
  line "STC (8.0+0.08s)" [3254, 3364, 3352]
  line "LTC (60.0+0.60s)" [3434, 3529, 3534]
  line "" [3482, 3552, 3560]
  line "VLTC (2m24s+1.12s)" [3482, 3552, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 25 | 356 | 51% | 3553 | 87% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 25 | 374 | 49% | 3541 | 86% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 24 | 420 | 49% | 3362 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 23 | 442 | 50% | 3551 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 23 | 442 | 51% | 3522 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3364 | 23 | 474 | 50% | 3363 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 29 | 282 | 51% | 3472 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 34 | 220 | 51% | 3416 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3254 | 29 | 316 | 54% | 3217 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |