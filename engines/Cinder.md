# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3430<sub>(+56) | 3563<sub>(+23) | 3576<sub>(+20) |  |
| 0.5.2 | 2026-07-12 | 3374<sub>(+19) | 3540<sub>(+11) | 3556<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3355<sub>(-44) | 3529<sub>(+4) | 3563<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3399<sub>(+51) | 3525<sub>(+53) | 3578<sub>(+75) |  |
| 0.4.1 | 2025-12-05 | 3348<sub>(+42) | 3472<sub>(-3) | 3503<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3306<sub>(+new) | 3475<sub>(+new) | 3522<sub>(+new) |  |
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

Generated: 2026-08-21 06:24:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3306, 3348, 3399, 3355, 3374, 3430]
  line "STC (8.0+0.08s)" [3306, 3348, 3399, 3355, 3374, 3430]
  line "LTC (60.0+0.60s)" [3475, 3472, 3525, 3529, 3540, 3563]
  line "VLTC (2m24s+1.12s)" [3522, 3503, 3578, 3563, 3556, 3576]
  line "VLTC (2m24s+1.12s)" [3522, 3503, 3578, 3563, 3556, 3576]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 45 | 112 | 51% | 3571 | 91% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 45 | 110 | 50% | 3563 | 89% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3430 | 36 | 184 | 50% | 3429 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 29 | 264 | 50% | 3557 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 25 | 354 | 51% | 3533 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3374 | 27 | 322 | 49% | 3383 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 39 | 152 | 49% | 3569 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 43 | 120 | 50% | 3529 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 44 | 124 | 49% | 3363 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 44 | 118 | 50% | 3573 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 44 | 120 | 52% | 3514 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3399 | 35 | 192 | 48% | 3411 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 23 | 424 | 50% | 3502 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 25 | 368 | 50% | 3472 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 21 | 564 | 49% | 3355 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 43 | 128 | 54% | 3487 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 50 | 108 | 56% | 3371 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3306 | 68 | 72 | 65% | 3058 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |