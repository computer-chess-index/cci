# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2510<sub>(+119) | 2834<sub>(+133) | 2932<sub>(+162) |  |
| 1.1 | 2026-04-18 | 2391<sub>(+80) | 2701<sub>(+176) | 2770<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2311 | 2525 | 2642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:25:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2311, 2391, 2510]
  line "STC (8.0+0.08s)" [2311, 2391, 2510]
  line "LTC (60.0+0.60s)" [2525, 2701, 2834]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 32 | 292 | 51% | 2925 | 47% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2834 | 33 | 284 | 51% | 2832 | 35% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2510 | 33 | 320 | 49% | 2522 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2770 | 28 | 392 | 49% | 2776 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2701 | 28 | 418 | 50% | 2696 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2391 | 29 | 408 | 50% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2642 | 28 | 396 | 49% | 2646 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2525 | 31 | 328 | 52% | 2506 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2311 | 27 | 480 | 50% | 2307 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |