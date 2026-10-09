# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2384<sub>(+19) | 2697<sub>(-31) | 2811<sub>(-21) |  |
| 1.5.0 | 2026-09-14 | 2365<sub>(+new) | 2728<sub>(+new) | 2832<sub>(+new) |  |
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

Generated: 2026-10-09 04:37:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2365, 2384]
  line "STC (8.0+0.08s)" [2365, 2384]
  line "LTC (60.0+0.60s)" [2728, 2697]
  line "" [2832, 2811]
  line "VLTC (2m24s+1.12s)" [2832, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2811 | 41 | 190 | 49% | 2816 | 31% |
| 1.5.1 | LTC <sub>(60.0+0.60s)</sub> | 2697 | 41 | 194 | 50% | 2699 | 34% |
| 1.5.1 | STC <sub>(8.0+0.08s)</sub> | 2384 | 36 | 280 | 45% | 2435 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2832 | 37 | 238 | 50% | 2824 | 30% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2728 | 35 | 260 | 50% | 2726 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2365 | 35 | 280 | 50% | 2361 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |