# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3245<sub>(+17) | 3418<sub>(-7) | 3465<sub>(-11) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-4) | 3425<sub>(+7) | 3476<sub>(+13) |  |
| 25.3 | 2025-12-28 | 3232<sub>(+new) | 3418<sub>(+new) | 3463<sub>(+new) |  |
| 25.2 | 2025-07-15 |  |  |  |  |
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

Generated: 2026-07-29 06:22:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3232, 3228, 3245]
  line "STC (8.0+0.08s)" [3232, 3228, 3245]
  line "LTC (60.0+0.60s)" [3418, 3425, 3418]
  line "VLTC (2m24s+1.12s)" [3463, 3476, 3465]
  line "VLTC (2m24s+1.12s)" [3463, 3476, 3465]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3465 | 38 | 164 | 50% | 3464 | 84% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 37 | 176 | 50% | 3421 | 81% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3245 | 33 | 232 | 49% | 3252 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3482 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3213 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3463 | 26 | 356 | 51% | 3457 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 26 | 360 | 51% | 3411 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3232 | 24 | 488 | 52% | 3216 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |