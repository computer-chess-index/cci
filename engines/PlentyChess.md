# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3470<sub>(+27) | 3578<sub>(+9) | 3594<sub>(+26) |  |
| 7.0.0 | 2025-09-25 | 3443<sub>(+new) | 3569<sub>(+new) | 3568<sub>(+5) |  |
| 6.0.2 | 2025-06-06 |  |  | 3563<sub>(+2) |  |
| 5.0.0 | 2025-03-23 | 3370<sub>(+4) | 3537<sub>(+new) | 3561<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3366<sub>(+67) |  | 3537<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3299<sub>(-30) | 3443<sub>(-31) | 3533<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3329 | 3474 | 3510 |  |
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

Generated: 2026-09-14 04:40:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3329, 3299, 3370, 3443, 3470]
  line "STC (8.0+0.08s)" [3329, 3299, 3370, 3443, 3470]
  line "LTC (60.0+0.60s)" [3474, 3443, 3537, 3569, 3578]
  line "" [3510, 3533, 3561, 3568, 3594]
  line "VLTC (2m24s+1.12s)" [3510, 3533, 3561, 3568, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 38 | 156 | 52% | 3583 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3578 | 37 | 160 | 50% | 3578 | 93% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3470 | 32 | 240 | 48% | 3483 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 24 | 392 | 51% | 3563 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 42 | 130 | 50% | 3568 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3443 | 35 | 204 | 49% | 3444 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 34 | 192 | 51% | 3559 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 26 | 332 | 51% | 3552 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 68 | 48 | 48% | 3551 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3370 | 208 | 4 | 50% | 3370 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 20 | 600 | 50% | 3536 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3366 | 59 | 72 | 52% | 3349 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 21 | 544 | 50% | 3530 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 36 | 208 | 50% | 3436 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3299 | 33 | 248 | 47% | 3317 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 23 | 460 | 52% | 3495 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 63 | 64 | 63% | 3372 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 98 | 92 | 92% | 2527 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |