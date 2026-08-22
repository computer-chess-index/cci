# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2515<sub>(+260) | 2769<sub>(+271) | 2820<sub>(+262) |  |
| 1.0 | 2026-01-01 | 2255 | 2498 | 2558 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Revolver+<version>&body=###%20Engine%20name%0ARevolver%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:29:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "STC (8.0+0.08s)" [2255, 2515]
  line "STC (8.0+0.08s)" [2255, 2515]
  line "LTC (60.0+0.60s)" [2498, 2769]
  line "VLTC (2m24s+1.12s)" [2558, 2820]
  line "VLTC (2m24s+1.12s)" [2558, 2820]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 26 | 468 | 51% | 2805 | 39% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2769 | 25 | 496 | 51% | 2762 | 38% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2515 | 27 | 472 | 51% | 2511 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2558 | 27 | 450 | 46% | 2599 | 32% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2498 | 29 | 408 | 49% | 2508 | 25% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2255 | 26 | 516 | 51% | 2242 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |