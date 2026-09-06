# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3465<sub>(+25) | 3573<sub>(+6) | 3590<sub>(+25) |  |
| 7.0.0 | 2025-09-25 | 3440<sub>(+new) | 3567<sub>(+new) | 3565<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3559<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3367<sub>(+4) | 3534<sub>(+new) | 3559<sub>(+25) |  |
| 4.0.1 | 2025-01-18 | 3363<sub>(+66) |  | 3534<sub>(+5) |  |
| 3.0.1 | 2024-11-22 | 3297<sub>(-29) | 3438<sub>(-33) | 3529<sub>(+22) |  |
| 2.1.0 | 2024-07-02 | 3326 | 3471 | 3507 |  |
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

Generated: 2026-09-06 06:26:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3326, 3297, 3367, 3440, 3465]
  line "STC (8.0+0.08s)" [3326, 3297, 3367, 3440, 3465]
  line "LTC (60.0+0.60s)" [3471, 3438, 3534, 3567, 3573]
  line "" [3507, 3529, 3559, 3565, 3590]
  line "VLTC (2m24s+1.12s)" [3507, 3529, 3559, 3565, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 41 | 136 | 52% | 3578 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3573 | 39 | 148 | 50% | 3575 | 92% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3465 | 32 | 236 | 48% | 3480 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 24 | 392 | 51% | 3560 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 42 | 130 | 50% | 3564 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3440 | 35 | 204 | 49% | 3440 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 34 | 192 | 51% | 3556 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 26 | 332 | 51% | 3549 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 68 | 48 | 48% | 3546 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3367 | 208 | 4 | 50% | 3367 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 20 | 600 | 50% | 3533 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3363 | 59 | 72 | 52% | 3345 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 21 | 544 | 50% | 3528 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 36 | 208 | 50% | 3432 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3297 | 33 | 248 | 47% | 3314 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 23 | 460 | 52% | 3492 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 63 | 64 | 63% | 3368 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3326 | 98 | 92 | 92% | 2526 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |