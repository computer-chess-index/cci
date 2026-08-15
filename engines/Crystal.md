# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3416<sub>(+48) | 3556<sub>(+46) | 3583<sub>(+51) |  |
| 5 | 2022-11-05 | 3368 | 3510 | 3532 |  |
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

Generated: 2026-08-15 06:24:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3368, 3416]
  line "STC (8.0+0.08s)" [3368, 3416]
  line "LTC (60.0+0.60s)" [3510, 3556]
  line "VLTC (2m24s+1.12s)" [3532, 3583]
  line "VLTC (2m24s+1.12s)" [3532, 3583]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 36 | 180 | 53% | 3560 | 88% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 21 | 500 | 51% | 3549 | 88% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3416 | 19 | 686 | 51% | 3410 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 27 | 320 | 55% | 3487 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 12 | 1640 | 50% | 3511 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3368 | 12 | 1796 | 52% | 3356 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |