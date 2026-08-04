# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.2 | 2026-07-12 | 3366<sub>(+19) | 3533<sub>(+12) | 3548<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3347<sub>(-44) | 3521<sub>(+4) | 3555<sub>(-14) |  |
| 0.5.0 | 2026-07-04 | 3391<sub>(+50) | 3517<sub>(+53) | 3569<sub>(+74) |  |
| 0.4.1 | 2025-12-05 | 3341<sub>(+43) | 3464<sub>(-3) | 3495<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3298<sub>(+new) | 3467<sub>(+new) | 3514<sub>(+new) |  |
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

Generated: 2026-08-04 06:24:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3298, 3341, 3391, 3347, 3366]
  line "STC (8.0+0.08s)" [3298, 3341, 3391, 3347, 3366]
  line "LTC (60.0+0.60s)" [3467, 3464, 3517, 3521, 3533]
  line "VLTC (2m24s+1.12s)" [3514, 3495, 3569, 3555, 3548]
  line "VLTC (2m24s+1.12s)" [3514, 3495, 3569, 3555, 3548]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 30 | 252 | 50% | 3549 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 26 | 342 | 51% | 3525 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3366 | 28 | 294 | 48% | 3376 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 39 | 152 | 49% | 3561 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 43 | 120 | 50% | 3521 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 44 | 124 | 49% | 3355 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 44 | 118 | 50% | 3565 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 44 | 120 | 52% | 3506 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3391 | 35 | 192 | 48% | 3403 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 23 | 424 | 50% | 3494 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 25 | 368 | 50% | 3464 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3341 | 21 | 564 | 49% | 3348 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 43 | 128 | 54% | 3479 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 50 | 108 | 56% | 3363 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 68 | 72 | 65% | 3051 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |