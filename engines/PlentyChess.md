# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3468<sub>(+30) | 3573<sub>(+8) | 3590<sub>(+26) |  |
| 7.0.0 | 2025-09-25 | 3438<sub>(+new) | 3565<sub>(+new) | 3564<sub>(+7) |  |
| 6.0.2 | 2025-06-06 |  |  | 3557<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3367<sub>(+5) | 3533<sub>(+new) | 3557<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3362<sub>(+67) |  | 3533<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3295<sub>(-31) | 3438<sub>(-33) | 3529<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3326 | 3471 | 3506 |  |
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

Generated: 2026-09-01 15:57:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3326, 3295, 3367, 3438, 3468]
  line "STC (8.0+0.08s)" [3326, 3295, 3367, 3438, 3468]
  line "LTC (60.0+0.60s)" [3471, 3438, 3533, 3565, 3573]
  line "" [3506, 3529, 3557, 3564, 3590]
  line "VLTC (2m24s+1.12s)" [3506, 3529, 3557, 3564, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 41 | 136 | 52% | 3576 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3573 | 39 | 148 | 50% | 3573 | 92% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3468 | 32 | 228 | 48% | 3479 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 24 | 392 | 51% | 3559 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 42 | 130 | 50% | 3564 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3438 | 35 | 204 | 49% | 3440 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 34 | 192 | 51% | 3555 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 26 | 332 | 51% | 3548 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 68 | 48 | 48% | 3546 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3367 | 208 | 4 | 50% | 3367 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 20 | 600 | 50% | 3532 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3362 | 59 | 72 | 52% | 3345 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 21 | 544 | 50% | 3526 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 36 | 208 | 50% | 3432 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3295 | 33 | 248 | 47% | 3314 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 23 | 460 | 52% | 3491 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 63 | 64 | 63% | 3368 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3326 | 98 | 92 | 92% | 2525 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |