# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-08-28 | 2469 | 2828 | 2994 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-08-28 | 2786 | 3123 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-09-18 | 2842<sub>(+207) | 3179<sub>(+206) | 3249<sub>(+199) |  |
| 1.3.0 | 2026-08-28 | 2635<sub>(+281) | 2973<sub>(+177) | 3050<sub>(+177) |  |
| 1.1.2 | 2026-07-08 | 2354 | 2796 | 2873 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:11:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0", "1.3.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2354, 2635, 2842]
  line "STC (8.0+0.08s)" [2354, 2635, 2842]
  line "LTC (60.0+0.60s)" [2796, 2973, 3179]
  line "" [2873, 3050, 3249]
  line "VLTC (2m24s+1.12s)" [2873, 3050, 3249]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 62 | 68 | 51% | 3235 | 62% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 50 | 112 | 54% | 3143 | 52% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2842 | 56 | 96 | 54% | 2807 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3050 | 33 | 256 | 51% | 3042 | 53% |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 40 | 180 | 49% | 3204 | 47% |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 35 | 232 | 49% | 3000 | 47% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2973 | 32 | 296 | 53% | 2946 | 45% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3123 | 37 | 216 | 52% | 3105 | 45% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 34 | 270 | 44% | 2877 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2786 | 39 | 212 | 47% | 2823 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2469 | 37 | 240 | 42% | 2550 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2635 | 35 | 264 | 52% | 2619 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 31 | 330 | 50% | 2867 | 41% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2796 | 31 | 332 | 51% | 2773 | 38% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2354 | 33 | 316 | 49% | 2358 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |