# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3322<sub>(-8) | 3487<sub>(+1) | 3511<sub>(-17) |  |
| 1.1 | 2026-06-05 | 3330<sub>(+22) | 3486<sub>(+35) | 3528<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3308 | 3451 | 3497 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:25:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3308, 3330, 3322]
  line "STC (8.0+0.08s)" [3308, 3330, 3322]
  line "LTC (60.0+0.60s)" [3451, 3486, 3487]
  line "VLTC (2m24s+1.12s)" [3497, 3528, 3511]
  line "VLTC (2m24s+1.12s)" [3497, 3528, 3511]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 28 | 292 | 50% | 3513 | 87% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 31 | 248 | 50% | 3490 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3322 | 31 | 256 | 49% | 3328 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 28 | 300 | 50% | 3525 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 24 | 404 | 52% | 3472 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3330 | 28 | 324 | 51% | 3326 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 27 | 334 | 50% | 3492 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 26 | 338 | 51% | 3445 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 27 | 348 | 51% | 3301 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |