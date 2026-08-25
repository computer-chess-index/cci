# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3428<sub>(+52) | 3551<sub>(+10) | 3571<sub>(+12) |  |
| 0.5.2 | 2026-07-12 | 3376<sub>(+19) | 3541<sub>(+9) | 3559<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3357<sub>(-44) | 3532<sub>(+4) | 3564<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3401<sub>(+50) | 3528<sub>(+53) | 3579<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3351<sub>(+42) | 3475<sub>(-1) | 3506<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3309<sub>(+new) | 3476<sub>(+new) | 3525<sub>(+new) |  |
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

Generated: 2026-08-25 06:24:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3309, 3351, 3401, 3357, 3376, 3428]
  line "STC (8.0+0.08s)" [3309, 3351, 3401, 3357, 3376, 3428]
  line "LTC (60.0+0.60s)" [3476, 3475, 3528, 3532, 3541, 3551]
  line "VLTC (2m24s+1.12s)" [3525, 3506, 3579, 3564, 3559, 3571]
  line "VLTC (2m24s+1.12s)" [3525, 3506, 3579, 3564, 3559, 3571]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 36 | 172 | 51% | 3564 | 93% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 32 | 218 | 50% | 3551 | 89% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3428 | 32 | 240 | 49% | 3432 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 29 | 264 | 50% | 3560 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 25 | 354 | 51% | 3536 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3376 | 27 | 322 | 49% | 3386 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 39 | 152 | 49% | 3571 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 43 | 120 | 50% | 3532 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3357 | 44 | 124 | 49% | 3366 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 44 | 118 | 50% | 3576 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 44 | 120 | 52% | 3515 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3401 | 35 | 192 | 48% | 3413 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 23 | 424 | 50% | 3505 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 25 | 368 | 50% | 3475 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 21 | 564 | 49% | 3357 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 43 | 128 | 54% | 3490 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 50 | 108 | 56% | 3374 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3309 | 68 | 72 | 65% | 3060 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |