# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3141<sub>(+1) | 3372<sub>(+23) | 3418<sub>(+13) |  |
| 8.2 | 2026-03-23 | 3140<sub>(-26) | 3349<sub>(-8) | 3405<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3166<sub>(+39) | 3357<sub>(-11) | 3417<sub>(+11) |  |
| 8.0 | 2026-03-10 | 3127 | 3368 | 3406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 08:23:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3127, 3166, 3140, 3141]
  line "STC (8.0+0.08s)" [3127, 3166, 3140, 3141]
  line "LTC (60.0+0.60s)" [3368, 3357, 3349, 3372]
  line "VLTC (2m24s+1.12s)" [3406, 3417, 3405, 3418]
  line "VLTC (2m24s+1.12s)" [3406, 3417, 3405, 3418]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 23 | 490 | 49% | 3424 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 24 | 462 | 49% | 3383 | 67% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3141 | 26 | 440 | 52% | 3128 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 26 | 380 | 49% | 3413 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3349 | 31 | 284 | 50% | 3348 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3140 | 27 | 396 | 48% | 3154 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 28 | 324 | 49% | 3422 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 30 | 290 | 51% | 3352 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3166 | 31 | 302 | 49% | 3173 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 28 | 308 | 50% | 3403 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 28 | 332 | 50% | 3367 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 31 | 300 | 49% | 3132 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |