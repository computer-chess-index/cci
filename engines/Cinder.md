# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3438<sub>(+51) | 3567<sub>(+14) | 3576<sub>(+7) |  |
| 0.5.2 | 2026-07-12 | 3387<sub>(+19) | 3553<sub>(+9) | 3569<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3368<sub>(-45) | 3544<sub>(+4) | 3576<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3413<sub>(+51) | 3540<sub>(+54) | 3591<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3362<sub>(+44) | 3486<sub>(-2) | 3517<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3318<sub>(+new) | 3488<sub>(+new) | 3537<sub>(+new) |  |
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

Generated: 2026-09-26 04:37:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3318, 3362, 3413, 3368, 3387, 3438]
  line "STC (8.0+0.08s)" [3318, 3362, 3413, 3368, 3387, 3438]
  line "LTC (60.0+0.60s)" [3488, 3486, 3540, 3544, 3553, 3567]
  line "" [3537, 3517, 3591, 3576, 3569, 3576]
  line "VLTC (2m24s+1.12s)" [3537, 3517, 3591, 3576, 3569, 3576]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 32 | 220 | 51% | 3572 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 29 | 274 | 51% | 3561 | 88% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3438 | 27 | 328 | 50% | 3441 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 29 | 264 | 50% | 3571 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 25 | 354 | 51% | 3546 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3387 | 27 | 322 | 49% | 3397 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 39 | 152 | 49% | 3583 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 43 | 120 | 50% | 3542 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3368 | 44 | 124 | 49% | 3375 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3591 | 44 | 118 | 50% | 3587 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 44 | 120 | 52% | 3528 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3413 | 35 | 192 | 48% | 3425 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 23 | 424 | 50% | 3517 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 25 | 368 | 50% | 3487 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3362 | 21 | 564 | 49% | 3368 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 43 | 128 | 54% | 3501 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 50 | 108 | 56% | 3384 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3318 | 68 | 72 | 65% | 3070 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |