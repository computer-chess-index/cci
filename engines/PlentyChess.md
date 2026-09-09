# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3468<sub>(+27) | 3576<sub>(+8) | 3594<sub>(+27) |  |
| 7.0.0 | 2025-09-25 | 3441<sub>(+new) | 3568<sub>(+new) | 3567<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3561<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3368<sub>(+4) | 3536<sub>(+new) | 3560<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3364<sub>(+66) |  | 3536<sub>(+6) |  |
| 3.0.1 | 2024-11-22 | 3298<sub>(-30) | 3440<sub>(-32) | 3530<sub>(+21) |  |
| 2.1.0 | 2024-07-02 | 3328 | 3472 | 3509 |  |
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

Generated: 2026-09-09 04:41:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3328, 3298, 3368, 3441, 3468]
  line "STC (8.0+0.08s)" [3328, 3298, 3368, 3441, 3468]
  line "LTC (60.0+0.60s)" [3472, 3440, 3536, 3568, 3576]
  line "" [3509, 3530, 3560, 3567, 3594]
  line "VLTC (2m24s+1.12s)" [3509, 3530, 3560, 3567, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 38 | 152 | 52% | 3582 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 38 | 152 | 50% | 3576 | 92% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3468 | 32 | 236 | 48% | 3482 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 24 | 392 | 51% | 3561 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 42 | 130 | 50% | 3567 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3441 | 35 | 204 | 49% | 3443 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 34 | 192 | 51% | 3557 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 26 | 332 | 51% | 3551 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 68 | 48 | 48% | 3549 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3368 | 208 | 4 | 50% | 3368 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 20 | 600 | 50% | 3534 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3364 | 59 | 72 | 52% | 3348 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 21 | 544 | 50% | 3529 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 36 | 208 | 50% | 3434 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3298 | 33 | 248 | 47% | 3316 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 23 | 460 | 52% | 3494 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 63 | 64 | 63% | 3371 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3328 | 98 | 92 | 92% | 2526 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |