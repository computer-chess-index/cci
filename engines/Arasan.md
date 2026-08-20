# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3241<sub>(+8) | 3426<sub>(-4) | 3467<sub>(-15) |  |
| 25.4 | 2026-04-15 | 3233<sub>(0) | 3430<sub>(0) | 3482<sub>(0) |  |
| 25.4 | 2026-04-15 | 3233<sub>(-4) | 3430<sub>(+5) | 3482<sub>(+14) |  |
| 25.3 | 2025-12-28 | 3237 | 3425 | 3468 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arasan+<version>&body=###%20Engine%20name%0AArasan%0A%0A###%20Version%0A26.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:22:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3237, 3233, 3233, 3241]
  line "STC (8.0+0.08s)" [3237, 3233, 3233, 3241]
  line "LTC (60.0+0.60s)" [3425, 3430, 3430, 3426]
  line "VLTC (2m24s+1.12s)" [3468, 3482, 3482, 3467]
  line "VLTC (2m24s+1.12s)" [3468, 3482, 3482, 3467]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 31 | 240 | 50% | 3464 | 83% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 30 | 272 | 50% | 3424 | 79% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3241 | 28 | 328 | 49% | 3251 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 24 | 408 | 49% | 3487 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 24 | 404 | 50% | 3433 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3233 | 24 | 450 | 51% | 3218 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 26 | 356 | 51% | 3463 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 26 | 360 | 51% | 3418 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3237 | 24 | 488 | 52% | 3221 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |