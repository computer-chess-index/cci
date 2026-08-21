# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3324<sub>(-9) | 3490<sub>(+2) | 3514<sub>(-15) |  |
| 1.1 | 2026-06-05 | 3333<sub>(+24) | 3488<sub>(+35) | 3529<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3309 | 3453 | 3498 |  |
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

Generated: 2026-08-21 06:26:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3309, 3333, 3324]
  line "STC (8.0+0.08s)" [3309, 3333, 3324]
  line "LTC (60.0+0.60s)" [3453, 3488, 3490]
  line "VLTC (2m24s+1.12s)" [3498, 3529, 3514]
  line "VLTC (2m24s+1.12s)" [3498, 3529, 3514]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 28 | 292 | 50% | 3515 | 87% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 31 | 248 | 50% | 3491 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 31 | 256 | 49% | 3330 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 28 | 300 | 50% | 3528 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 24 | 404 | 52% | 3475 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3333 | 28 | 324 | 51% | 3329 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 27 | 334 | 50% | 3495 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 26 | 338 | 51% | 3448 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3309 | 27 | 348 | 51% | 3303 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |