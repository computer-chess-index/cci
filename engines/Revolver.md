# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2526<sub>(+266) | 2780<sub>(+276) | 2831<sub>(+266) |  |
| 1.0 | 2026-01-01 | 2260 | 2504 | 2565 |  |
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

Generated: 2026-09-14 04:41:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "" [2260, 2526]
  line "STC (8.0+0.08s)" [2260, 2526]
  line "LTC (60.0+0.60s)" [2504, 2780]
  line "" [2565, 2831]
  line "VLTC (2m24s+1.12s)" [2565, 2831]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 25 | 496 | 52% | 2813 | 39% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 25 | 508 | 51% | 2769 | 38% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2526 | 26 | 500 | 51% | 2518 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2565 | 27 | 450 | 46% | 2606 | 32% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2504 | 29 | 408 | 49% | 2515 | 25% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2260 | 26 | 516 | 51% | 2246 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |