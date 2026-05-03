# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-04-18 | 2441<sub>(+76) | 2761<sub>(+180) | 2826<sub>(+129) |  |
| 1.0 | 2025-12-27 | 2365 | 2581 | 2697 |  |
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

Generated: 2026-05-03 08:15:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2365, 2441]
  line "STC (8.0+0.08s)" [2365, 2441]
  line "LTC (60.0+0.60s)" [2581, 2761]
  line "VLTC (2m24s+1.12s)" [2697, 2826]
  line "VLTC (2m24s+1.12s)" [2697, 2826]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 31 | 330 | 49% | 2835 | 39% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2761 | 30 | 358 | 51% | 2755 | 36% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2441 | 32 | 336 | 50% | 2439 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2697 | 28 | 396 | 49% | 2701 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2581 | 31 | 328 | 52% | 2562 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2365 | 27 | 480 | 50% | 2363 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |