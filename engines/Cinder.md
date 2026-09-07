# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3430<sub>(+48) | 3557<sub>(+11) | 3571<sub>(+8) |  |
| 0.5.2 | 2026-07-12 | 3382<sub>(+20) | 3546<sub>(+9) | 3563<sub>(-6) |  |
| 0.5.1 | 2026-07-08 | 3362<sub>(-44) | 3537<sub>(+4) | 3569<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3406<sub>(+51) | 3533<sub>(+54) | 3584<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3355<sub>(+42) | 3479<sub>(-3) | 3510<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3313<sub>(+new) | 3482<sub>(+new) | 3530<sub>(+new) |  |
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

Generated: 2026-09-07 04:37:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3313, 3355, 3406, 3362, 3382, 3430]
  line "STC (8.0+0.08s)" [3313, 3355, 3406, 3362, 3382, 3430]
  line "LTC (60.0+0.60s)" [3482, 3479, 3533, 3537, 3546, 3557]
  line "" [3530, 3510, 3584, 3569, 3563, 3571]
  line "VLTC (2m24s+1.12s)" [3530, 3510, 3584, 3569, 3563, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 34 | 196 | 51% | 3565 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 30 | 254 | 50% | 3553 | 87% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3430 | 28 | 316 | 49% | 3433 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 29 | 264 | 50% | 3564 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 25 | 354 | 51% | 3541 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3382 | 27 | 322 | 49% | 3390 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 39 | 152 | 49% | 3576 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 43 | 120 | 50% | 3537 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3362 | 44 | 124 | 49% | 3370 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 44 | 118 | 50% | 3580 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 44 | 120 | 52% | 3521 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3406 | 35 | 192 | 48% | 3418 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 23 | 424 | 50% | 3510 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 25 | 368 | 50% | 3480 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 21 | 564 | 49% | 3362 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 43 | 128 | 54% | 3494 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 50 | 108 | 56% | 3378 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 68 | 72 | 65% | 3065 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |