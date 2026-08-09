# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.2 | 2026-07-12 | 3368<sub>(+19) | 3533<sub>(+9) | 3551<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3349<sub>(-44) | 3524<sub>(+5) | 3556<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3393<sub>(+50) | 3519<sub>(+52) | 3571<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3343<sub>(+42) | 3467<sub>(-1) | 3497<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3301<sub>(+new) | 3468<sub>(+new) | 3517<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
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

Generated: 2026-08-09 06:23:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3301, 3343, 3393, 3349, 3368]
  line "STC (8.0+0.08s)" [3301, 3343, 3393, 3349, 3368]
  line "LTC (60.0+0.60s)" [3468, 3467, 3519, 3524, 3533]
  line "VLTC (2m24s+1.12s)" [3517, 3497, 3571, 3556, 3551]
  line "VLTC (2m24s+1.12s)" [3517, 3497, 3571, 3556, 3551]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 29 | 260 | 50% | 3551 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 25 | 350 | 51% | 3528 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3368 | 28 | 310 | 49% | 3376 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 39 | 152 | 49% | 3563 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 43 | 120 | 50% | 3522 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3349 | 44 | 124 | 49% | 3357 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 44 | 118 | 50% | 3568 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 44 | 120 | 52% | 3507 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3393 | 35 | 192 | 48% | 3405 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 23 | 424 | 50% | 3497 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 25 | 368 | 50% | 3467 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 21 | 564 | 49% | 3349 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 43 | 128 | 54% | 3482 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 50 | 108 | 56% | 3366 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3301 | 68 | 72 | 65% | 3052 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |