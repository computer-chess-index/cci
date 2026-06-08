# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2387<sub>(+78) | 2696<sub>(+174) | 2766<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2309 | 2522 | 2638 |  |
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

Generated: 2026-06-08 06:24:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2309, 2387]
  line "STC (8.0+0.08s)" [2309, 2387]
  line "LTC (60.0+0.60s)" [2522, 2696]
  line "VLTC (2m24s+1.12s)" [2638, 2766]
  line "VLTC (2m24s+1.12s)" [2638, 2766]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2766 | 29 | 368 | 50% | 2770 | 37% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2696 | 29 | 386 | 50% | 2692 | 35% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2387 | 31 | 364 | 50% | 2384 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2638 | 28 | 396 | 49% | 2642 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2522 | 31 | 328 | 52% | 2504 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2309 | 27 | 480 | 50% | 2306 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |