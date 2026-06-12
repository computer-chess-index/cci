# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-06-05 | 3328<sub>(+31) | 3461<sub>(+21) | 3515<sub>(+29) |  |
| 1.0 | 2026-04-26 | 3297 | 3440 | 3486 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-12 06:25:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3297, 3328]
  line "STC (8.0+0.08s)" [3297, 3328]
  line "LTC (60.0+0.60s)" [3440, 3461]
  line "VLTC (2m24s+1.12s)" [3486, 3515]
  line "VLTC (2m24s+1.12s)" [3486, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 39 | 152 | 50% | 3519 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 35 | 194 | 53% | 3440 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3328 | 35 | 196 | 53% | 3309 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 27 | 334 | 50% | 3482 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 26 | 338 | 51% | 3434 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3297 | 27 | 348 | 51% | 3290 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |