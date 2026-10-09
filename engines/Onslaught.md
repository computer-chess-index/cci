# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-12 | 2854 | 3166 | 3217 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-12 | 3079 | 3409 | 3468 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-12 | 2997<sub>(+445) | 3243<sub>(+431) | 3303<sub>(+376) |  |
| 1.0 | 2026-06-02 | 2552 | 2812 | 2927 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onslaught+<version>&body=###%20Engine%20name%0AOnslaught%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 14:14:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "" [2552, 2997]
  line "STC (8.0+0.08s)" [2552, 2997]
  line "LTC (60.0+0.60s)" [2812, 3243]
  line "" [2927, 3303]
  line "VLTC (2m24s+1.12s)" [2927, 3303]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3217 | 32 | 252 | 46% | 3244 | 61% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 32 | 264 | 53% | 3282 | 65% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 35 | 212 | 48% | 3482 | 60% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 29 | 314 | 53% | 3220 | 61% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 38 | 186 | 50% | 3407 | 60% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 33 | 260 | 48% | 3181 | 55% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2997 | 36 | 232 | 51% | 2986 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3079 | 37 | 216 | 47% | 3101 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2854 | 34 | 262 | 45% | 2898 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 29 | 364 | 51% | 2920 | 45% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2812 | 31 | 324 | 51% | 2797 | 43% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2552 | 30 | 372 | 50% | 2547 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |