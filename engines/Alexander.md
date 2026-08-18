# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3143<sub>(-1) | 3375<sub>(+20) | 3422<sub>(+12) |  |
| 8.2 | 2026-03-23 | 3144<sub>(-26) | 3355<sub>(-7) | 3410<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3170<sub>(+38) | 3362<sub>(-12) | 3422<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3132 | 3374 | 3410 |  |
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

Generated: 2026-08-18 06:22:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3132, 3170, 3144, 3143]
  line "STC (8.0+0.08s)" [3132, 3170, 3144, 3143]
  line "LTC (60.0+0.60s)" [3374, 3362, 3355, 3375]
  line "VLTC (2m24s+1.12s)" [3410, 3422, 3410, 3422]
  line "VLTC (2m24s+1.12s)" [3410, 3422, 3410, 3422]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 22 | 510 | 49% | 3429 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 23 | 478 | 48% | 3387 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3143 | 25 | 456 | 51% | 3133 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3410 | 26 | 380 | 49% | 3417 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 31 | 284 | 50% | 3353 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3144 | 27 | 396 | 48% | 3158 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 28 | 324 | 49% | 3426 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 30 | 290 | 51% | 3356 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3170 | 31 | 302 | 49% | 3178 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3410 | 28 | 308 | 50% | 3407 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 28 | 332 | 50% | 3371 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 31 | 300 | 49% | 3137 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |