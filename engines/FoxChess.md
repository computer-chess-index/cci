# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2441<sub>(+74) | 2762<sub>(+179) | 2828<sub>(+129) |  |
| 1.0 | 2025-12-27 | 2367 | 2583 | 2699 |  |
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

Generated: 2026-05-05 06:24:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2367, 2441]
  line "STC (8.0+0.08s)" [2367, 2441]
  line "LTC (60.0+0.60s)" [2583, 2762]
  line "VLTC (2m24s+1.12s)" [2699, 2828]
  line "VLTC (2m24s+1.12s)" [2699, 2828]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 30 | 340 | 49% | 2835 | 39% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 30 | 358 | 51% | 2755 | 36% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2441 | 32 | 340 | 50% | 2439 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2699 | 28 | 396 | 49% | 2703 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2583 | 31 | 328 | 52% | 2564 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2367 | 27 | 480 | 50% | 2363 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |