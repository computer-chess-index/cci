# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3426<sub>(+48) | 3551<sub>(+9) | 3572<sub>(+12) |  |
| 0.5.2 | 2026-07-12 | 3378<sub>(+19) | 3542<sub>(+9) | 3560<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3359<sub>(-43) | 3533<sub>(+4) | 3565<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3402<sub>(+50) | 3529<sub>(+53) | 3580<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3352<sub>(+42) | 3476<sub>(-2) | 3507<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3310<sub>(+new) | 3478<sub>(+new) | 3526<sub>(+new) |  |
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

Generated: 2026-08-26 06:24:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3310, 3352, 3402, 3359, 3378, 3426]
  line "STC (8.0+0.08s)" [3310, 3352, 3402, 3359, 3378, 3426]
  line "LTC (60.0+0.60s)" [3478, 3476, 3529, 3533, 3542, 3551]
  line "VLTC (2m24s+1.12s)" [3526, 3507, 3580, 3565, 3560, 3572]
  line "VLTC (2m24s+1.12s)" [3526, 3507, 3580, 3565, 3560, 3572]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 36 | 172 | 51% | 3565 | 93% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 32 | 218 | 50% | 3552 | 89% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3426 | 30 | 264 | 49% | 3432 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 29 | 264 | 50% | 3560 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 25 | 354 | 51% | 3537 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3378 | 27 | 322 | 49% | 3387 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 39 | 152 | 49% | 3572 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 43 | 120 | 50% | 3533 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3359 | 44 | 124 | 49% | 3367 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 44 | 118 | 50% | 3578 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 44 | 120 | 52% | 3517 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3402 | 35 | 192 | 48% | 3414 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 23 | 424 | 50% | 3506 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 25 | 368 | 50% | 3476 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 21 | 564 | 49% | 3359 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 43 | 128 | 54% | 3491 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 50 | 108 | 56% | 3375 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3310 | 68 | 72 | 65% | 3062 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |