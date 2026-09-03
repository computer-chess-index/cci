# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2751<sub>(+530) | 3096<sub>(+617) | 3140<sub>(+539) |  |
| 1.1.0 | 2026-05-16 | 2221<sub>(-316) | 2479<sub>(-378) | 2601<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2537 | 2857 | 2944 |  |
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

Generated: 2026-09-03 04:37:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2537, 2221, 2751]
  line "STC (8.0+0.08s)" [2537, 2221, 2751]
  line "LTC (60.0+0.60s)" [2857, 2479, 3096]
  line "" [2944, 2601, 3140]
  line "VLTC (2m24s+1.12s)" [2944, 2601, 3140]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3140 | 30 | 312 | 51% | 3131 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3096 | 28 | 388 | 53% | 3071 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2751 | 31 | 332 | 52% | 2732 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2601 | 29 | 416 | 48% | 2619 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2479 | 28 | 416 | 50% | 2479 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2221 | 31 | 352 | 49% | 2218 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 28 | 404 | 49% | 2954 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2857 | 29 | 380 | 49% | 2866 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2537 | 27 | 452 | 49% | 2542 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |