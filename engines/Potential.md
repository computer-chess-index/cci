# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2751<sub>(+530) | 3094<sub>(+615) | 3143<sub>(+540) |  |
| 1.1.0 | 2026-05-16 | 2221<sub>(-317) | 2479<sub>(-379) | 2603<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2538 | 2858 | 2946 |  |
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

Generated: 2026-09-08 04:40:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2538, 2221, 2751]
  line "STC (8.0+0.08s)" [2538, 2221, 2751]
  line "LTC (60.0+0.60s)" [2858, 2479, 3094]
  line "" [2946, 2603, 3143]
  line "VLTC (2m24s+1.12s)" [2946, 2603, 3143]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3143 | 29 | 336 | 51% | 3135 | 56% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3094 | 27 | 400 | 52% | 3073 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2751 | 30 | 340 | 52% | 2732 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2603 | 29 | 416 | 48% | 2620 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2479 | 28 | 416 | 50% | 2480 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2221 | 31 | 352 | 49% | 2219 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 28 | 404 | 49% | 2955 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2858 | 29 | 380 | 49% | 2866 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2538 | 27 | 452 | 49% | 2543 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |