# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.2 | 2026-07-12 | 3367<sub>(+22) | 3519<sub>(+1) | 3551<sub>(-2) |  |
| 0.5.1 | 2026-07-08 | 3345<sub>(-44) | 3518<sub>(+4) | 3553<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3389<sub>(+50) | 3514<sub>(+51) | 3568<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3339<sub>(+42) | 3463<sub>(-1) | 3494<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3297<sub>(+new) | 3464<sub>(+new) | 3513<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
| 0.3.0 | 2025-08-16 |  |  |  |  |
| 0.2.0 | 2025-05-29 |  |  |  |  |
| 0.1.4 | 2025-04-10 |  |  |  |  |
| 0.1.3 | 2025-02-28 |  |  |  |  |
| 0.1.2 | 2025-02-25 |  |  |  |  |
| 0.1.1 | 2025-02-23 |  |  |  |  |
| 0.1.0 | 2025-02-23 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-19 06:23:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3297, 3339, 3389, 3345, 3367]
  line "STC (8.0+0.08s)" [3297, 3339, 3389, 3345, 3367]
  line "LTC (60.0+0.60s)" [3464, 3463, 3514, 3518, 3519]
  line "VLTC (2m24s+1.12s)" [3513, 3494, 3568, 3553, 3551]
  line "VLTC (2m24s+1.12s)" [3513, 3494, 3568, 3553, 3551]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 47 | 102 | 49% | 3557 | 90% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 36 | 174 | 52% | 3509 | 92% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3367 | 33 | 218 | 47% | 3384 | 81% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 39 | 152 | 49% | 3560 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 43 | 120 | 50% | 3518 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3345 | 44 | 124 | 49% | 3353 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 44 | 118 | 50% | 3565 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 44 | 120 | 52% | 3503 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3389 | 35 | 192 | 48% | 3401 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 23 | 424 | 50% | 3492 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 25 | 368 | 50% | 3463 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3339 | 21 | 564 | 49% | 3345 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 43 | 128 | 54% | 3478 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 50 | 108 | 56% | 3362 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3297 | 68 | 72 | 65% | 3048 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |