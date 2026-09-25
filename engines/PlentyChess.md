# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3474<sub>(+27) | 3582<sub>(+9) | 3598<sub>(+26) |  |
| 7.0.0 | 2025-09-25 | 3447<sub>(+new) | 3573<sub>(+new) | 3572<sub>(+7) |  |
| 6.0.2 | 2025-06-06 |  |  | 3565<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3374<sub>(+4) | 3541<sub>(+new) | 3565<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3370<sub>(+67) |  | 3541<sub>(+5) |  |
| 3.0.1 | 2024-11-22 | 3303<sub>(-29) | 3445<sub>(-33) | 3536<sub>(+22) |  |
| 2.1.0 | 2024-07-02 | 3332 | 3478 | 3514 |  |
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

Generated: 2026-09-25 04:41:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3332, 3303, 3374, 3447, 3474]
  line "STC (8.0+0.08s)" [3332, 3303, 3374, 3447, 3474]
  line "LTC (60.0+0.60s)" [3478, 3445, 3541, 3573, 3582]
  line "" [3514, 3536, 3565, 3572, 3598]
  line "VLTC (2m24s+1.12s)" [3514, 3536, 3565, 3572, 3598]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3598 | 38 | 156 | 52% | 3587 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3582 | 37 | 160 | 50% | 3582 | 93% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3474 | 32 | 240 | 48% | 3487 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 24 | 392 | 51% | 3567 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3573 | 42 | 130 | 50% | 3572 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3447 | 35 | 204 | 49% | 3447 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 34 | 192 | 51% | 3563 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 26 | 332 | 51% | 3556 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 68 | 48 | 48% | 3555 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 208 | 4 | 50% | 3374 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 20 | 600 | 50% | 3540 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3370 | 59 | 72 | 52% | 3352 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 21 | 544 | 50% | 3534 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 36 | 208 | 50% | 3438 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3303 | 33 | 248 | 47% | 3321 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 23 | 460 | 52% | 3499 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 63 | 64 | 63% | 3376 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 98 | 92 | 92% | 2530 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |