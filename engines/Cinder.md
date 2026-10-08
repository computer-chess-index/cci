# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3440<sub>(+51) | 3567<sub>(+14) | 3578<sub>(+7) |  |
| 0.5.2 | 2026-07-12 | 3389<sub>(+21) | 3553<sub>(+9) | 3571<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3368<sub>(-45) | 3544<sub>(+3) | 3576<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3413<sub>(+50) | 3541<sub>(+54) | 3591<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3363<sub>(+43) | 3487<sub>(-3) | 3518<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3320<sub>(+new) | 3490<sub>(+new) | 3537<sub>(+new) |  |
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

Generated: 2026-10-08 04:37:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3320, 3363, 3413, 3368, 3389, 3440]
  line "STC (8.0+0.08s)" [3320, 3363, 3413, 3368, 3389, 3440]
  line "LTC (60.0+0.60s)" [3490, 3487, 3541, 3544, 3553, 3567]
  line "" [3537, 3518, 3591, 3576, 3571, 3578]
  line "VLTC (2m24s+1.12s)" [3537, 3518, 3591, 3576, 3571, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 32 | 220 | 51% | 3572 | 92% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 29 | 276 | 51% | 3561 | 88% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3440 | 27 | 328 | 50% | 3441 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 29 | 264 | 50% | 3571 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 25 | 354 | 51% | 3548 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3389 | 27 | 322 | 49% | 3397 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 39 | 152 | 49% | 3583 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 43 | 120 | 50% | 3544 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3368 | 44 | 124 | 49% | 3376 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3591 | 44 | 118 | 50% | 3587 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 44 | 120 | 52% | 3529 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3413 | 35 | 192 | 48% | 3425 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 23 | 424 | 50% | 3517 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 25 | 368 | 50% | 3487 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3363 | 21 | 564 | 49% | 3370 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 43 | 128 | 54% | 3502 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 50 | 108 | 56% | 3384 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3320 | 68 | 72 | 65% | 3071 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |