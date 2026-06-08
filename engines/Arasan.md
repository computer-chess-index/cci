# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3221<sub>(-6) | 3421<sub>(+10) | 3472<sub>(+17) |  |
| 25.3 | 2025-12-28 | 3227<sub>(+new) | 3411<sub>(+new) | 3455<sub>(+new) |  |
| 25.2 | 2025-07-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arasan+<version>&body=###%20Engine%20name%0AArasan%0A%0A###%20Version%0A25.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:22:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3227, 3221]
  line "STC (8.0+0.08s)" [3227, 3221]
  line "LTC (60.0+0.60s)" [3411, 3421]
  line "VLTC (2m24s+1.12s)" [3455, 3472]
  line "VLTC (2m24s+1.12s)" [3455, 3472]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 26 | 328 | 50% | 3475 | 88% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 26 | 348 | 50% | 3420 | 79% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3221 | 26 | 376 | 51% | 3212 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3455 | 26 | 356 | 51% | 3449 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 26 | 360 | 51% | 3406 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3227 | 24 | 488 | 52% | 3210 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |