# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2755<sub>(+530) | 3100<sub>(+617) | 3146<sub>(+539) |  |
| 1.1.0 | 2026-05-16 | 2225<sub>(-318) | 2483<sub>(-379) | 2607<sub>(-344) |  |
| 3.0.0 | 2025-08-28 | 2543 | 2862 | 2951 |  |
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

Generated: 2026-09-25 04:41:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "" [2543, 2225, 2755]
  line "STC (8.0+0.08s)" [2543, 2225, 2755]
  line "LTC (60.0+0.60s)" [2862, 2483, 3100]
  line "" [2951, 2607, 3146]
  line "VLTC (2m24s+1.12s)" [2951, 2607, 3146]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3146 | 28 | 352 | 51% | 3139 | 56% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3100 | 27 | 416 | 52% | 3078 | 47% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2755 | 30 | 344 | 52% | 2738 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 29 | 416 | 48% | 2624 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2483 | 28 | 416 | 50% | 2483 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2225 | 31 | 352 | 49% | 2223 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 28 | 404 | 49% | 2961 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2862 | 29 | 380 | 49% | 2871 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2543 | 27 | 452 | 49% | 2547 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |