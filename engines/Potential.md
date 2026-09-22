# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2754<sub>(+532) | 3097<sub>(+617) | 3141<sub>(+537) |  |
| 1.1.0 | 2026-05-16 | 2222<sub>(-319) | 2480<sub>(-381) | 2604<sub>(-346) |  |
| 3.0.0 | 2025-08-28 | 2541 | 2861 | 2950 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0Aunlocked" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-22 04:40:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2541, 2222, 2754]
  line "STC (8.0+0.08s)" [2541, 2222, 2754]
  line "LTC (60.0+0.60s)" [2861, 2480, 3097]
  line "" [2950, 2604, 3141]
  line "VLTC (2m24s+1.12s)" [2950, 2604, 3141]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3141 | 28 | 348 | 51% | 3136 | 56% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3097 | 27 | 412 | 52% | 3075 | 46% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2754 | 30 | 340 | 52% | 2735 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 29 | 416 | 48% | 2622 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2480 | 28 | 416 | 50% | 2480 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2222 | 31 | 352 | 49% | 2221 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2950 | 28 | 404 | 49% | 2958 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2861 | 29 | 380 | 49% | 2869 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2541 | 27 | 452 | 49% | 2545 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |