# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3148<sub>(-3) | 3380<sub>(+20) | 3428<sub>(+12) |  |
| 8.2 | 2026-03-23 | 3151<sub>(-24) | 3360<sub>(-8) | 3416<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3175<sub>(+38) | 3368<sub>(-11) | 3428<sub>(+11) |  |
| 8.0 | 2026-03-10 | 3137 | 3379 | 3417 |  |
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

Generated: 2026-08-26 06:22:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3137, 3175, 3151, 3148]
  line "STC (8.0+0.08s)" [3137, 3175, 3151, 3148]
  line "LTC (60.0+0.60s)" [3379, 3368, 3360, 3380]
  line "VLTC (2m24s+1.12s)" [3417, 3428, 3416, 3428]
  line "VLTC (2m24s+1.12s)" [3417, 3428, 3416, 3428]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 22 | 518 | 49% | 3434 | 69% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 23 | 494 | 48% | 3393 | 67% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3148 | 25 | 464 | 51% | 3137 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 26 | 380 | 49% | 3424 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 31 | 284 | 50% | 3359 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3151 | 27 | 396 | 48% | 3163 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 28 | 324 | 49% | 3433 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 30 | 290 | 51% | 3363 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3175 | 31 | 302 | 49% | 3183 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 28 | 308 | 50% | 3414 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 28 | 332 | 50% | 3378 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3137 | 31 | 300 | 49% | 3143 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |