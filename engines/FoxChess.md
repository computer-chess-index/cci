# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2387<sub>(+74) | 2700<sub>(+174) | 2773<sub>(+132) |  |
| 1.0 | 2025-12-27 | 2313 | 2526 | 2641 |  |
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

Generated: 2026-05-22 14:55:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2313, 2387]
  line "STC (8.0+0.08s)" [2313, 2387]
  line "LTC (60.0+0.60s)" [2526, 2700]
  line "VLTC (2m24s+1.12s)" [2641, 2773]
  line "VLTC (2m24s+1.12s)" [2641, 2773]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2773 | 29 | 364 | 50% | 2770 | 38% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2700 | 29 | 386 | 50% | 2696 | 35% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2387 | 31 | 356 | 50% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2641 | 28 | 396 | 49% | 2646 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2526 | 31 | 328 | 52% | 2507 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2313 | 27 | 480 | 50% | 2310 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |