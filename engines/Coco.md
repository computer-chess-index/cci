# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2381<sub>(+18) | 2687<sub>(-39) | 2809<sub>(-22) |  |
| 1.5.0 | 2026-09-14 | 2363<sub>(+new) | 2726<sub>(+new) | 2831<sub>(+new) |  |
| 1.4.0 | 2026-07-13 |  |  |  |  |
| 1.3.0 | 2026-07-10 |  |  |  |  |
| 1.1.1 | 2026-07-09 |  |  |  |  |
| 1.1.0 | 2026-07-09 |  |  |  |  |
| 1.0.1 | 2026-07-06 |  |  |  |  |
| 1.0.0 | 2026-07-01 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coco+<version>&body=###%20Engine%20name%0ACoco%0A%0A###%20Version%0A1.5.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-07 04:37:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2363, 2381]
  line "STC (8.0+0.08s)" [2363, 2381]
  line "LTC (60.0+0.60s)" [2726, 2687]
  line "" [2831, 2809]
  line "VLTC (2m24s+1.12s)" [2831, 2809]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2809 | 41 | 190 | 49% | 2815 | 31% |
| 1.5.1 | LTC <sub>(60.0+0.60s)</sub> | 2687 | 41 | 186 | 49% | 2697 | 35% |
| 1.5.1 | STC <sub>(8.0+0.08s)</sub> | 2381 | 37 | 260 | 44% | 2439 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 37 | 238 | 50% | 2823 | 30% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2726 | 35 | 260 | 50% | 2724 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2363 | 35 | 280 | 50% | 2360 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |