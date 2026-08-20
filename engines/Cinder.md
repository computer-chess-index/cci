# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3425<sub>(+51) | 3564<sub>(+26) | 3576<sub>(+20) |  |
| 0.5.2 | 2026-07-12 | 3374<sub>(+19) | 3538<sub>(+9) | 3556<sub>(-5) |  |
| 0.5.1 | 2026-07-08 | 3355<sub>(-43) | 3529<sub>(+5) | 3561<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3398<sub>(+50) | 3524<sub>(+53) | 3576<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3348<sub>(+43) | 3471<sub>(-3) | 3502<sub>(-20) |  |
| 0.4.0 | 2025-12-04 | 3305<sub>(+new) | 3474<sub>(+new) | 3522<sub>(+new) |  |
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

Generated: 2026-08-20 06:24:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3305, 3348, 3398, 3355, 3374, 3425]
  line "STC (8.0+0.08s)" [3305, 3348, 3398, 3355, 3374, 3425]
  line "LTC (60.0+0.60s)" [3474, 3471, 3524, 3529, 3538, 3564]
  line "VLTC (2m24s+1.12s)" [3522, 3502, 3576, 3561, 3556, 3576]
  line "VLTC (2m24s+1.12s)" [3522, 3502, 3576, 3561, 3556, 3576]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 45 | 108 | 51% | 3571 | 91% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3564 | 48 | 98 | 50% | 3563 | 90% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3425 | 38 | 172 | 49% | 3429 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 29 | 264 | 50% | 3556 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 25 | 354 | 51% | 3533 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3374 | 27 | 322 | 49% | 3382 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 39 | 152 | 49% | 3568 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 43 | 120 | 50% | 3528 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 44 | 124 | 49% | 3362 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 44 | 118 | 50% | 3573 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 44 | 120 | 52% | 3513 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3398 | 35 | 192 | 48% | 3410 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 23 | 424 | 50% | 3501 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 25 | 368 | 50% | 3472 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 21 | 564 | 49% | 3355 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 43 | 128 | 54% | 3486 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 50 | 108 | 56% | 3370 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3305 | 68 | 72 | 65% | 3056 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |