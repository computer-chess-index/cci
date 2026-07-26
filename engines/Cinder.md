# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.2 | 2026-07-12 | 3368<sub>(+20) | 3530<sub>(+8) | 3546<sub>(-10) |  |
| 0.5.1 | 2026-07-08 | 3348<sub>(-45) | 3522<sub>(+4) | 3556<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3393<sub>(+50) | 3518<sub>(+53) | 3571<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3343<sub>(+44) | 3465<sub>(-3) | 3497<sub>(-18) |  |
| 0.4.0 | 2025-12-04 | 3299<sub>(+new) | 3468<sub>(+new) | 3515<sub>(+new) |  |
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

Generated: 2026-07-26 06:23:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3299, 3343, 3393, 3348, 3368]
  line "STC (8.0+0.08s)" [3299, 3343, 3393, 3348, 3368]
  line "LTC (60.0+0.60s)" [3468, 3465, 3518, 3522, 3530]
  line "VLTC (2m24s+1.12s)" [3515, 3497, 3571, 3556, 3546]
  line "VLTC (2m24s+1.12s)" [3515, 3497, 3571, 3556, 3546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 33 | 208 | 49% | 3553 | 90% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 28 | 286 | 51% | 3522 | 93% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3368 | 30 | 266 | 48% | 3380 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 39 | 152 | 49% | 3563 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 43 | 120 | 50% | 3522 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 44 | 124 | 49% | 3356 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 44 | 118 | 50% | 3568 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 44 | 120 | 52% | 3507 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3393 | 35 | 192 | 48% | 3403 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 23 | 424 | 50% | 3495 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 25 | 368 | 50% | 3465 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 21 | 564 | 49% | 3349 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 43 | 128 | 54% | 3480 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 50 | 108 | 56% | 3364 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3299 | 68 | 72 | 65% | 3052 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |