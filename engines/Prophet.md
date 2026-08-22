# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2110<sub>(-51) | 2379<sub>(-40) | 2488<sub>(-7) |  |
| 5.1 | 2025-09-16 | 2161 | 2419 | 2495 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prophet+<version>&body=###%20Engine%20name%0AProphet%0A%0A###%20Version%0A5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:28:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2161, 2110]
  line "STC (8.0+0.08s)" [2161, 2110]
  line "LTC (60.0+0.60s)" [2419, 2379]
  line "VLTC (2m24s+1.12s)" [2495, 2488]
  line "VLTC (2m24s+1.12s)" [2495, 2488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2488 | 29 | 422 | 48% | 2506 | 26% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2379 | 28 | 420 | 48% | 2392 | 30% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2110 | 32 | 348 | 52% | 2084 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 30 | 380 | 48% | 2526 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 28 | 416 | 49% | 2434 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2161 | 27 | 482 | 51% | 2156 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |