# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3428<sub>(+48) | 3552<sub>(+7) | 3569<sub>(+8) |  |
| 0.5.2 | 2026-07-12 | 3380<sub>(+20) | 3545<sub>(+9) | 3561<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3360<sub>(-45) | 3536<sub>(+4) | 3568<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3405<sub>(+50) | 3532<sub>(+54) | 3583<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3355<sub>(+43) | 3478<sub>(-2) | 3509<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3312<sub>(+new) | 3480<sub>(+new) | 3529<sub>(+new) |  |
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

Generated: 2026-09-01 18:59:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3312, 3355, 3405, 3360, 3380, 3428]
  line "STC (8.0+0.08s)" [3312, 3355, 3405, 3360, 3380, 3428]
  line "LTC (60.0+0.60s)" [3480, 3478, 3532, 3536, 3545, 3552]
  line "" [3529, 3509, 3583, 3568, 3561, 3569]
  line "VLTC (2m24s+1.12s)" [3529, 3509, 3583, 3568, 3561, 3569]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 35 | 180 | 51% | 3561 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 32 | 230 | 50% | 3553 | 87% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3428 | 28 | 304 | 49% | 3433 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 29 | 264 | 50% | 3563 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 25 | 354 | 51% | 3538 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3380 | 27 | 322 | 49% | 3389 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 39 | 152 | 49% | 3575 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 43 | 120 | 50% | 3534 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3360 | 44 | 124 | 49% | 3368 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 44 | 118 | 50% | 3579 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 44 | 120 | 52% | 3519 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3405 | 35 | 192 | 48% | 3417 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 23 | 424 | 50% | 3509 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 25 | 368 | 50% | 3479 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 21 | 564 | 49% | 3362 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 43 | 128 | 54% | 3492 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 50 | 108 | 56% | 3376 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3312 | 68 | 72 | 65% | 3063 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |