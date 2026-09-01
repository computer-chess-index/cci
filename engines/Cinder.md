# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3429<sub>(+49) | 3553<sub>(+7) | 3569<sub>(+6) |  |
| 0.5.2 | 2026-07-12 | 3380<sub>(+18) | 3546<sub>(+10) | 3563<sub>(-6) |  |
| 0.5.1 | 2026-07-08 | 3362<sub>(-44) | 3536<sub>(+4) | 3569<sub>(-14) |  |
| 0.5.0 | 2026-07-04 | 3406<sub>(+51) | 3532<sub>(+53) | 3583<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3355<sub>(+42) | 3479<sub>(-3) | 3510<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3313<sub>(+new) | 3482<sub>(+new) | 3529<sub>(+new) |  |
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

Generated: 2026-09-01 04:34:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3313, 3355, 3406, 3362, 3380, 3429]
  line "STC (8.0+0.08s)" [3313, 3355, 3406, 3362, 3380, 3429]
  line "LTC (60.0+0.60s)" [3482, 3479, 3532, 3536, 3546, 3553]
  line "" [3529, 3510, 3583, 3569, 3563, 3569]
  line "VLTC (2m24s+1.12s)" [3529, 3510, 3583, 3569, 3563, 3569]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 35 | 180 | 51% | 3563 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 32 | 230 | 50% | 3553 | 87% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3429 | 28 | 304 | 49% | 3433 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 29 | 264 | 50% | 3564 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 25 | 354 | 51% | 3540 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3380 | 27 | 322 | 49% | 3390 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 39 | 152 | 49% | 3575 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 43 | 120 | 50% | 3536 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3362 | 44 | 124 | 49% | 3370 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 44 | 118 | 50% | 3580 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 44 | 120 | 52% | 3521 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3406 | 35 | 192 | 48% | 3417 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 23 | 424 | 50% | 3509 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 25 | 368 | 50% | 3479 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 21 | 564 | 49% | 3362 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 43 | 128 | 54% | 3494 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 50 | 108 | 56% | 3378 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 68 | 72 | 65% | 3065 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |