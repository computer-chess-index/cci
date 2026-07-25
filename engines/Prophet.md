# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2097<sub>(-58) | 2379<sub>(-36) | 2488<sub>(-3) |  |
| 5.1 | 2025-09-16 | 2155<sub>(+new) | 2415<sub>(+new) | 2491<sub>(+new) |  |
| 5.0 | 2025-08-05 |  |  |  |  |
| 4.4 | 2024-10-22 |  |  |  |  |
| 4.3 | 2022-10-21 |  |  |  |  |
| 4.2 | 2022-06-23 |  |  |  |  |
| 4.1 | 2022-01-02 |  |  |  |  |
| 4.0 | 2021-10-02 |  |  |  |  |
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

Generated: 2026-07-25 06:27:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2155, 2097]
  line "STC (8.0+0.08s)" [2155, 2097]
  line "LTC (60.0+0.60s)" [2415, 2379]
  line "VLTC (2m24s+1.12s)" [2491, 2488]
  line "VLTC (2m24s+1.12s)" [2491, 2488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2488 | 30 | 378 | 49% | 2503 | 26% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2379 | 30 | 384 | 49% | 2388 | 29% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2097 | 33 | 320 | 51% | 2075 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2491 | 30 | 380 | 48% | 2520 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2415 | 28 | 416 | 49% | 2429 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2155 | 27 | 482 | 51% | 2148 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |