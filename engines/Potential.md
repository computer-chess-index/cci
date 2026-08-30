# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2751<sub>(+532) | 3094<sub>(+618) | 3140<sub>(+540) |  |
| 1.1.0 | 2026-05-16 | 2219<sub>(-316) | 2476<sub>(-379) | 2600<sub>(-344) |  |
| 3.0.0 | 2025-08-28 | 2535 | 2855 | 2944 |  |
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

Generated: 2026-08-30 06:27:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2535, 2219, 2751]
  line "STC (8.0+0.08s)" [2535, 2219, 2751]
  line "LTC (60.0+0.60s)" [2855, 2476, 3094]
  line "" [2944, 2600, 3140]
  line "VLTC (2m24s+1.12s)" [2944, 2600, 3140]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3140 | 30 | 296 | 51% | 3131 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3094 | 28 | 376 | 53% | 3067 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2751 | 31 | 328 | 52% | 2732 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2600 | 29 | 416 | 48% | 2618 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2476 | 28 | 416 | 50% | 2477 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2219 | 31 | 352 | 49% | 2218 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 28 | 404 | 49% | 2952 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2855 | 29 | 380 | 49% | 2865 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2535 | 27 | 452 | 49% | 2541 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |