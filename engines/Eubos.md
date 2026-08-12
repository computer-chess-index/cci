# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2309<sub>(+134) | 2626<sub>(+134) | 2692<sub>(+103) |  |
| 4.4 | 2026-05-06 | 2175<sub>(+85) | 2492<sub>(+53) | 2589<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2090<sub>(-58) | 2439<sub>(+31) | 2557<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2148 | 2408 | 2534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eubos+<version>&body=###%20Engine%20name%0AEubos%0A%0A###%20Version%0A4.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:49:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2148, 2090, 2175, 2309]
  line "STC (8.0+0.08s)" [2148, 2090, 2175, 2309]
  line "LTC (60.0+0.60s)" [2408, 2439, 2492, 2626]
  line "VLTC (2m24s+1.12s)" [2534, 2557, 2589, 2692]
  line "VLTC (2m24s+1.12s)" [2534, 2557, 2589, 2692]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2692 | 31 | 326 | 49% | 2703 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2626 | 31 | 360 | 49% | 2638 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2309 | 30 | 398 | 47% | 2344 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2589 | 32 | 320 | 48% | 2608 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2492 | 32 | 334 | 49% | 2496 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2175 | 32 | 344 | 50% | 2168 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 30 | 388 | 50% | 2546 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 31 | 368 | 49% | 2445 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2090 | 28 | 452 | 50% | 2076 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2534 | 36 | 266 | 52% | 2516 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2408 | 35 | 272 | 50% | 2404 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2148 | 34 | 310 | 52% | 2121 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |