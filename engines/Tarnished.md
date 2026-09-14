# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3359<sub>(-11) | 3538<sub>(+5) | 3565<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3370<sub>(+112) | 3533<sub>(+95) | 3557<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3258 | 3438 | 3486 |  |
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

Generated: 2026-09-14 04:42:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3258, 3370, 3359]
  line "STC (8.0+0.08s)" [3258, 3370, 3359]
  line "LTC (60.0+0.60s)" [3438, 3533, 3538]
  line "" [3486, 3557, 3565]
  line "VLTC (2m24s+1.12s)" [3486, 3557, 3565]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 25 | 372 | 51% | 3559 | 87% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 25 | 378 | 49% | 3545 | 86% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 24 | 444 | 49% | 3366 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 23 | 442 | 50% | 3556 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 23 | 442 | 51% | 3526 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3370 | 23 | 474 | 50% | 3367 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 29 | 282 | 51% | 3478 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 34 | 220 | 51% | 3420 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3258 | 29 | 316 | 54% | 3220 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |