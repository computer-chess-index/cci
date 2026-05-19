# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2402<sub>(+75) | 2716<sub>(+177) | 2788<sub>(+133) |  |
| 1.0 | 2025-12-27 | 2327 | 2539 | 2655 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2327, 2402]
  line "STC (8.0+0.08s)" [2327, 2402]
  line "LTC (60.0+0.60s)" [2539, 2716]
  line "VLTC (2m24s+1.12s)" [2655, 2788]
  line "VLTC (2m24s+1.12s)" [2655, 2788]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2788 | 30 | 344 | 50% | 2792 | 39% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2716 | 29 | 370 | 50% | 2712 | 36% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2402 | 31 | 348 | 50% | 2399 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2655 | 28 | 396 | 49% | 2661 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 31 | 328 | 52% | 2522 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2327 | 27 | 480 | 50% | 2323 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |