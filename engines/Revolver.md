# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2519<sub>(+262) | 2774<sub>(+274) | 2830<sub>(+269) |  |
| 1.0 | 2026-01-01 | 2257 | 2500 | 2561 |  |
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

Generated: 2026-08-30 13:12:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "" [2257, 2519]
  line "STC (8.0+0.08s)" [2257, 2519]
  line "LTC (60.0+0.60s)" [2500, 2774]
  line "" [2561, 2830]
  line "VLTC (2m24s+1.12s)" [2561, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 25 | 488 | 52% | 2809 | 39% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 25 | 500 | 51% | 2766 | 38% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2519 | 27 | 476 | 51% | 2514 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2561 | 27 | 450 | 46% | 2601 | 32% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2500 | 29 | 408 | 49% | 2511 | 25% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2257 | 26 | 516 | 51% | 2245 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |