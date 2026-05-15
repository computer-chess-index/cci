# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2444<sub>(+76) | 2762<sub>(+178) | 2834<sub>(+133) |  |
| 1.0 | 2025-12-27 | 2368 | 2584 | 2701 |  |
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

Generated: 2026-05-15 06:24:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2368, 2444]
  line "STC (8.0+0.08s)" [2368, 2444]
  line "LTC (60.0+0.60s)" [2584, 2762]
  line "VLTC (2m24s+1.12s)" [2701, 2834]
  line "VLTC (2m24s+1.12s)" [2701, 2834]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2834 | 30 | 344 | 50% | 2838 | 39% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 29 | 370 | 50% | 2758 | 36% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2444 | 31 | 344 | 50% | 2442 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2701 | 28 | 396 | 49% | 2705 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2584 | 31 | 328 | 52% | 2565 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2368 | 27 | 480 | 50% | 2365 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |