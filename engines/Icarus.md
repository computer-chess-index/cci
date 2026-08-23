# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3326<sub>(-10) | 3492<sub>(+2) | 3515<sub>(-17) |  |
| 1.1 | 2026-06-05 | 3336<sub>(+24) | 3490<sub>(+35) | 3532<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3312 | 3455 | 3501 |  |
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

Generated: 2026-08-23 06:25:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3312, 3336, 3326]
  line "STC (8.0+0.08s)" [3312, 3336, 3326]
  line "LTC (60.0+0.60s)" [3455, 3490, 3492]
  line "VLTC (2m24s+1.12s)" [3501, 3532, 3515]
  line "VLTC (2m24s+1.12s)" [3501, 3532, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 28 | 302 | 50% | 3517 | 87% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 30 | 260 | 50% | 3494 | 85% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3326 | 31 | 256 | 49% | 3332 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 28 | 300 | 50% | 3529 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 24 | 404 | 52% | 3476 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3336 | 28 | 324 | 51% | 3330 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 27 | 334 | 50% | 3497 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 26 | 338 | 51% | 3449 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3312 | 27 | 348 | 51% | 3305 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |