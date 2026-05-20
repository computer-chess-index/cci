# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2385<sub>(+74) | 2697<sub>(+172) | 2766<sub>(+127) |  |
| 1.0 | 2025-12-27 | 2311 | 2525 | 2639 |  |
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

Generated: 2026-05-20 06:24:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2311, 2385]
  line "STC (8.0+0.08s)" [2311, 2385]
  line "LTC (60.0+0.60s)" [2525, 2697]
  line "VLTC (2m24s+1.12s)" [2639, 2766]
  line "VLTC (2m24s+1.12s)" [2639, 2766]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2766 | 30 | 352 | 49% | 2776 | 38% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2697 | 29 | 374 | 50% | 2696 | 36% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2385 | 31 | 352 | 50% | 2384 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2639 | 28 | 396 | 49% | 2645 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2525 | 31 | 328 | 52% | 2506 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2311 | 27 | 480 | 50% | 2309 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |