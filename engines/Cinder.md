# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3426<sub>(+47) | 3551<sub>(+7) | 3568<sub>(+8) |  |
| 0.5.2 | 2026-07-12 | 3379<sub>(+20) | 3544<sub>(+11) | 3560<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3359<sub>(-44) | 3533<sub>(+4) | 3567<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3403<sub>(+51) | 3529<sub>(+53) | 3582<sub>(+75) |  |
| 0.4.1 | 2025-12-05 | 3352<sub>(+42) | 3476<sub>(-3) | 3507<sub>(-21) |  |
| 0.4.0 | 2025-12-04 | 3310<sub>(+new) | 3479<sub>(+new) | 3528<sub>(+new) |  |
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

Generated: 2026-08-28 06:24:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3310, 3352, 3403, 3359, 3379, 3426]
  line "STC (8.0+0.08s)" [3310, 3352, 3403, 3359, 3379, 3426]
  line "LTC (60.0+0.60s)" [3479, 3476, 3529, 3533, 3544, 3551]
  line "" [3528, 3507, 3582, 3567, 3560, 3568]
  line "VLTC (2m24s+1.12s)" [3528, 3507, 3582, 3567, 3560, 3568]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 35 | 180 | 51% | 3560 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 32 | 230 | 50% | 3551 | 87% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3426 | 29 | 300 | 49% | 3432 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 29 | 264 | 50% | 3561 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 25 | 354 | 51% | 3537 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3379 | 27 | 322 | 49% | 3387 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 39 | 152 | 49% | 3573 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 43 | 120 | 50% | 3533 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3359 | 44 | 124 | 49% | 3367 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 44 | 118 | 50% | 3578 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 44 | 120 | 52% | 3518 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3403 | 35 | 192 | 48% | 3416 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 23 | 424 | 50% | 3506 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 25 | 368 | 50% | 3478 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 21 | 564 | 49% | 3360 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 43 | 128 | 54% | 3491 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 50 | 108 | 56% | 3375 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3310 | 68 | 72 | 65% | 3062 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |