# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3144<sub>(-2) | 3376<sub>(+20) | 3422<sub>(+11) |  |
| 8.2 | 2026-03-23 | 3146<sub>(-25) | 3356<sub>(-7) | 3411<sub>(-13) |  |
| 8.1 | 2026-03-16 | 3171<sub>(+38) | 3363<sub>(-12) | 3424<sub>(+13) |  |
| 8.0 | 2026-03-10 | 3133 | 3375 | 3411 |  |
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

Generated: 2026-08-20 06:22:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3133, 3171, 3146, 3144]
  line "STC (8.0+0.08s)" [3133, 3171, 3146, 3144]
  line "LTC (60.0+0.60s)" [3375, 3363, 3356, 3376]
  line "VLTC (2m24s+1.12s)" [3411, 3424, 3411, 3422]
  line "VLTC (2m24s+1.12s)" [3411, 3424, 3411, 3422]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 22 | 514 | 49% | 3430 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 23 | 486 | 49% | 3389 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3144 | 25 | 456 | 51% | 3135 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 26 | 380 | 49% | 3418 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 31 | 284 | 50% | 3355 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3146 | 27 | 396 | 48% | 3159 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 28 | 324 | 49% | 3428 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 30 | 290 | 51% | 3357 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3171 | 31 | 302 | 49% | 3179 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 28 | 308 | 50% | 3409 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 28 | 332 | 50% | 3372 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3133 | 31 | 300 | 49% | 3137 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |