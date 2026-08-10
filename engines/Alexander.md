# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3144<sub>(+3) | 3371<sub>(+20) | 3421<sub>(+15) |  |
| 8.2 | 2026-03-23 | 3141<sub>(-26) | 3351<sub>(-8) | 3406<sub>(-14) |  |
| 8.1 | 2026-03-16 | 3167<sub>(+38) | 3359<sub>(-11) | 3420<sub>(+13) |  |
| 8.0 | 2026-03-10 | 3129 | 3370 | 3407 |  |
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

Generated: 2026-08-10 06:58:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3129, 3167, 3141, 3144]
  line "STC (8.0+0.08s)" [3129, 3167, 3141, 3144]
  line "LTC (60.0+0.60s)" [3370, 3359, 3351, 3371]
  line "VLTC (2m24s+1.12s)" [3407, 3420, 3406, 3421]
  line "VLTC (2m24s+1.12s)" [3407, 3420, 3406, 3421]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 23 | 494 | 49% | 3425 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 23 | 470 | 48% | 3384 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3144 | 26 | 444 | 52% | 3129 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 26 | 380 | 49% | 3414 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 31 | 284 | 50% | 3349 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3141 | 27 | 396 | 48% | 3155 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 28 | 324 | 49% | 3424 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 30 | 290 | 51% | 3353 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3167 | 31 | 302 | 49% | 3175 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 28 | 308 | 50% | 3405 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 28 | 332 | 50% | 3368 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3129 | 31 | 300 | 49% | 3135 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |