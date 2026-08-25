# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3244<sub>(+7) | 3433<sub>(-1) | 3472<sub>(-14) |  |
| 25.4 | 2026-04-15 | 3237<sub>(0) | 3434<sub>(0) | 3486<sub>(0) |  |
| 25.4 | 2026-04-15 | 3237<sub>(-4) | 3434<sub>(+6) | 3486<sub>(+15) |  |
| 25.3 | 2025-12-28 | 3241 | 3428 | 3471 |  |
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

Generated: 2026-08-25 06:22:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3241, 3237, 3237, 3244]
  line "STC (8.0+0.08s)" [3241, 3237, 3237, 3244]
  line "LTC (60.0+0.60s)" [3428, 3434, 3434, 3433]
  line "VLTC (2m24s+1.12s)" [3471, 3486, 3486, 3472]
  line "VLTC (2m24s+1.12s)" [3471, 3486, 3486, 3472]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 30 | 256 | 51% | 3468 | 84% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 29 | 284 | 51% | 3429 | 79% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3244 | 28 | 336 | 49% | 3254 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 24 | 408 | 49% | 3490 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 24 | 404 | 50% | 3436 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3237 | 24 | 450 | 51% | 3221 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 26 | 356 | 51% | 3465 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3428 | 26 | 360 | 51% | 3421 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3241 | 24 | 488 | 52% | 3224 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |