# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2315<sub>(+133) | 2635<sub>(+136) | 2700<sub>(+105) |  |
| 4.4 | 2026-05-06 | 2182<sub>(+87) | 2499<sub>(+53) | 2595<sub>(+31) |  |
| 4.3 | 2026-01-29 | 2095<sub>(-60) | 2446<sub>(+31) | 2564<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2155 | 2415 | 2541 |  |
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

Generated: 2026-08-21 06:25:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2155, 2095, 2182, 2315]
  line "STC (8.0+0.08s)" [2155, 2095, 2182, 2315]
  line "LTC (60.0+0.60s)" [2415, 2446, 2499, 2635]
  line "VLTC (2m24s+1.12s)" [2541, 2564, 2595, 2700]
  line "VLTC (2m24s+1.12s)" [2541, 2564, 2595, 2700]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2700 | 31 | 330 | 49% | 2709 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2635 | 30 | 372 | 49% | 2643 | 28% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2315 | 30 | 404 | 47% | 2352 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 32 | 320 | 48% | 2615 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2499 | 32 | 334 | 49% | 2503 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2182 | 32 | 344 | 50% | 2175 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2564 | 30 | 388 | 50% | 2552 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2446 | 31 | 368 | 49% | 2452 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2095 | 28 | 452 | 50% | 2082 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2541 | 36 | 266 | 52% | 2522 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2415 | 35 | 272 | 50% | 2411 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2155 | 34 | 310 | 52% | 2126 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |