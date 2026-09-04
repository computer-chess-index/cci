# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3353<sub>(-13) | 3534<sub>(+5) | 3560<sub>(+7) |  |
| 5.0 | 2026-02-07 | 3366<sub>(+111) | 3529<sub>(+95) | 3553<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3255 | 3434 | 3482 |  |
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

Generated: 2026-09-04 04:39:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3255, 3366, 3353]
  line "STC (8.0+0.08s)" [3255, 3366, 3353]
  line "LTC (60.0+0.60s)" [3434, 3529, 3534]
  line "" [3482, 3553, 3560]
  line "VLTC (2m24s+1.12s)" [3482, 3553, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 25 | 356 | 51% | 3555 | 87% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 25 | 374 | 49% | 3541 | 86% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 24 | 428 | 49% | 3362 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 23 | 442 | 50% | 3552 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 23 | 442 | 51% | 3522 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3366 | 23 | 474 | 50% | 3363 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 29 | 282 | 51% | 3474 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 34 | 220 | 51% | 3417 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3255 | 29 | 316 | 54% | 3217 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |