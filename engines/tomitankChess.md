# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2522<sub>(+51) | 2831<sub>(+28) | 2892<sub>(+22) |  |
| 6.0 | 2026-03-31 | 2471<sub>(+94) | 2803<sub>(+94) | 2870<sub>(+73) |  |
| 5.3 | 2025-09-26 | 2377 | 2709 | 2797 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-07 08:52:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2377, 2471, 2522]
  line "STC (8.0+0.08s)" [2377, 2471, 2522]
  line "LTC (60.0+0.60s)" [2709, 2803, 2831]
  line "VLTC (2m24s+1.12s)" [2797, 2870, 2892]
  line "VLTC (2m24s+1.12s)" [2797, 2870, 2892]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 31 | 308 | 52% | 2878 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2831 | 32 | 296 | 51% | 2824 | 44% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2522 | 33 | 312 | 48% | 2539 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2870 | 27 | 406 | 50% | 2871 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2803 | 29 | 362 | 50% | 2801 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2471 | 26 | 476 | 48% | 2489 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2797 | 31 | 312 | 48% | 2813 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 32 | 310 | 52% | 2692 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2377 | 29 | 420 | 50% | 2375 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |