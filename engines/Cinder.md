# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3428<sub>(+52) | 3549<sub>(+8) | 3572<sub>(+15) |  |
| 0.5.2 | 2026-07-12 | 3376<sub>(+19) | 3541<sub>(+9) | 3557<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3357<sub>(-44) | 3532<sub>(+6) | 3564<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3401<sub>(+50) | 3526<sub>(+52) | 3579<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3351<sub>(+43) | 3474<sub>(-2) | 3505<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3308<sub>(+new) | 3476<sub>(+new) | 3525<sub>(+new) |  |
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

Generated: 2026-08-23 06:23:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3308, 3351, 3401, 3357, 3376, 3428]
  line "STC (8.0+0.08s)" [3308, 3351, 3401, 3357, 3376, 3428]
  line "LTC (60.0+0.60s)" [3476, 3474, 3526, 3532, 3541, 3549]
  line "VLTC (2m24s+1.12s)" [3525, 3505, 3579, 3564, 3557, 3572]
  line "VLTC (2m24s+1.12s)" [3525, 3505, 3579, 3564, 3557, 3572]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 36 | 168 | 51% | 3565 | 93% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 33 | 214 | 50% | 3551 | 88% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3428 | 32 | 232 | 49% | 3432 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 29 | 264 | 50% | 3559 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 25 | 354 | 51% | 3536 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3376 | 27 | 322 | 49% | 3384 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 39 | 152 | 49% | 3571 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 43 | 120 | 50% | 3530 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3357 | 44 | 124 | 49% | 3364 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 44 | 118 | 50% | 3575 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 44 | 120 | 52% | 3515 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3401 | 35 | 192 | 48% | 3413 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 23 | 424 | 50% | 3503 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 25 | 368 | 50% | 3475 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 21 | 564 | 49% | 3357 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 43 | 128 | 54% | 3488 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 50 | 108 | 56% | 3372 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 68 | 72 | 65% | 3059 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |