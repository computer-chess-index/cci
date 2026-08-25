# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3279<sub>(+15) | 3445<sub>(+5) | 3470<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3264<sub>(+25) | 3440<sub>(+19) | 3471<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3239 | 3421 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:40:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3239, 3264, 3279]
  line "STC (8.0+0.08s)" [3239, 3264, 3279]
  line "LTC (60.0+0.60s)" [3421, 3440, 3445]
  line "VLTC (2m24s+1.12s)" [3471, 3471, 3470]
  line "VLTC (2m24s+1.12s)" [3471, 3471, 3470]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 12 | 1684 | 50% | 3470 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 12 | 1752 | 51% | 3441 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3279 | 12 | 1780 | 50% | 3281 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 32 | 228 | 46% | 3498 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 38 | 172 | 51% | 3432 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3264 | 36 | 208 | 48% | 3281 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 33 | 228 | 49% | 3478 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 36 | 192 | 51% | 3413 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3239 | 29 | 308 | 50% | 3240 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |