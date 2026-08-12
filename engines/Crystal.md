# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3414<sub>(+47) | 3555<sub>(+46) | 3580<sub>(+50) |  |
| 5 | 2022-11-05 | 3367 | 3509 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 06:26:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3367, 3414]
  line "STC (8.0+0.08s)" [3367, 3414]
  line "LTC (60.0+0.60s)" [3509, 3555]
  line "VLTC (2m24s+1.12s)" [3530, 3580]
  line "VLTC (2m24s+1.12s)" [3530, 3580]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 36 | 180 | 53% | 3559 | 88% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 21 | 500 | 51% | 3548 | 88% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3414 | 19 | 686 | 51% | 3409 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 27 | 320 | 55% | 3486 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 12 | 1640 | 50% | 3510 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3367 | 12 | 1796 | 52% | 3355 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |