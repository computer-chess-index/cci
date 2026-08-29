# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3467<sub>(+30) | 3572<sub>(+8) | 3588<sub>(+25) |  |
| 7.0.0 | 2025-09-25 | 3437<sub>(+new) | 3564<sub>(+new) | 3563<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3557<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3366<sub>(+6) | 3532<sub>(+new) | 3556<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3360<sub>(+65) |  | 3532<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3295<sub>(-30) | 3437<sub>(-33) | 3528<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3325 | 3470 | 3505 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-29 06:27:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3325, 3295, 3366, 3437, 3467]
  line "STC (8.0+0.08s)" [3325, 3295, 3366, 3437, 3467]
  line "LTC (60.0+0.60s)" [3470, 3437, 3532, 3564, 3572]
  line "" [3505, 3528, 3556, 3563, 3588]
  line "VLTC (2m24s+1.12s)" [3505, 3528, 3556, 3563, 3588]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 41 | 136 | 52% | 3576 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3572 | 39 | 148 | 50% | 3572 | 92% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3467 | 33 | 224 | 48% | 3479 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 24 | 392 | 51% | 3557 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3564 | 42 | 130 | 50% | 3563 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3437 | 35 | 204 | 49% | 3438 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 34 | 192 | 51% | 3553 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 26 | 332 | 51% | 3546 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 68 | 48 | 48% | 3545 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3366 | 208 | 4 | 50% | 3366 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 20 | 600 | 50% | 3530 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3360 | 59 | 72 | 52% | 3344 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 21 | 544 | 50% | 3525 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 36 | 208 | 50% | 3430 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3295 | 33 | 248 | 47% | 3313 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 23 | 460 | 52% | 3491 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 63 | 64 | 63% | 3367 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 98 | 92 | 92% | 2525 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |