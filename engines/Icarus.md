# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3321<sub>(-3) | 3480<sub>(+1) | 3506<sub>(-13) |  |
| 1.1 | 2026-06-05 | 3324<sub>(+25) | 3479<sub>(+36) | 3519<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3299 | 3443 | 3488 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-19 06:25:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3299, 3324, 3321]
  line "STC (8.0+0.08s)" [3299, 3324, 3321]
  line "LTC (60.0+0.60s)" [3443, 3479, 3480]
  line "VLTC (2m24s+1.12s)" [3488, 3519, 3506]
  line "VLTC (2m24s+1.12s)" [3488, 3519, 3506]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 40 | 140 | 51% | 3501 | 87% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 54 | 80 | 51% | 3476 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3321 | 47 | 108 | 48% | 3333 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 28 | 300 | 50% | 3517 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 24 | 404 | 52% | 3465 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 28 | 324 | 51% | 3318 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 27 | 334 | 50% | 3484 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 26 | 338 | 51% | 3437 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3299 | 27 | 348 | 51% | 3293 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |