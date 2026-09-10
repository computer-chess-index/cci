# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3432<sub>(+50) | 3559<sub>(+11) | 3572<sub>(+8) |  |
| 0.5.2 | 2026-07-12 | 3382<sub>(+19) | 3548<sub>(+10) | 3564<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3363<sub>(-44) | 3538<sub>(+4) | 3571<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3407<sub>(+51) | 3534<sub>(+54) | 3586<sub>(+75) |  |
| 0.4.1 | 2025-12-05 | 3356<sub>(+42) | 3480<sub>(-3) | 3511<sub>(-21) |  |
| 0.4.0 | 2025-12-04 | 3314<sub>(+new) | 3483<sub>(+new) | 3532<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-10 04:37:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3314, 3356, 3407, 3363, 3382, 3432]
  line "STC (8.0+0.08s)" [3314, 3356, 3407, 3363, 3382, 3432]
  line "LTC (60.0+0.60s)" [3483, 3480, 3534, 3538, 3548, 3559]
  line "" [3532, 3511, 3586, 3571, 3564, 3572]
  line "VLTC (2m24s+1.12s)" [3532, 3511, 3586, 3571, 3564, 3572]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 34 | 196 | 51% | 3567 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 30 | 254 | 50% | 3556 | 87% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3432 | 28 | 316 | 49% | 3434 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 29 | 264 | 50% | 3565 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 25 | 354 | 51% | 3542 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3382 | 27 | 322 | 49% | 3391 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 39 | 152 | 49% | 3578 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 43 | 120 | 50% | 3538 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3363 | 44 | 124 | 49% | 3370 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 44 | 118 | 50% | 3582 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 44 | 120 | 52% | 3522 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3407 | 35 | 192 | 48% | 3420 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 23 | 424 | 50% | 3511 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 25 | 368 | 50% | 3482 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3356 | 21 | 564 | 49% | 3363 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 43 | 128 | 54% | 3495 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 50 | 108 | 56% | 3379 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3314 | 68 | 72 | 65% | 3066 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |