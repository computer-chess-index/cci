# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2846<sub>(+80) | 3167<sub>(+74) | 3267<sub>(+157) |  |
| 2.1 | 2026-04-08 | 2766 | 3093 | 3110 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2898<sub>(+113) | 3195<sub>(+86) | 3258<sub>(0) |  |
| 2.1 | 2026-04-08 | 2785 | 3109 | 3258 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2919<sub>(+99) | 3183<sub>(+31) | 3289<sub>(+68) |  |
| 2.1 | 2026-04-08 | 2820<sub>(+309) | 3152<sub>(+297) | 3221<sub>(+285) |  |
| 2.0 | 2026-03-18 | 2511 | 2855 | 2936 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:44:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "2.2"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2766, 2846]
  line "E1: LTC (60.0+0.60s)" [3093, 3167]
  line "E1: VLTC (2m24s+1.12s)" [3110, 3267]
  line "P1: STC (8.0+0.08s)" [2785, 2898]
  line "P1: LTC (60.0+0.60s)" [3109, 3195]
  line "P1: VLTC (2m24s+1.12s)" [3258, 3258]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "T1: STC (8.0+0.08s)" [2511, 2820, 2919]
  line "T1: LTC (60.0+0.60s)" [2855, 3152, 3183]
  line "T1: VLTC (2m24s+1.12s)" [2936, 3221, 3289]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 28 | 334 | 47% | 3276 | 62% |
|  |  | E1 | 3267 | 24 | 472 | 48% | 3281 | 58% |
|  |  | T1 | 3289 | 30 | 284 | 50% | 3286 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3195 | 26 | 388 | 48% | 3210 | 59% |
|  |  | E1 | 3167 | 23 | 530 | 47% | 3190 | 58% |
|  |  | T1 | 3183 | 33 | 244 | 49% | 3186 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2898 | 31 | 310 | 48% | 2915 | 45% |
|  |  | E1 | 2846 | 25 | 472 | 47% | 2855 | 46% |
|  |  | T1 | 2919 | 34 | 252 | 50% | 2919 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3221 | 24 | 488 | 50% | 3217 | 59% |
|  |  | P1 | 3258 | 80 | 40 | 45% | 3289 | 65% |
|  |  | E1 | 3110 | 47 | 136 | 50% | 3067 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3152 | 24 | 458 | 52% | 3135 | 59% |
|  |  | P1 | 3109 | 59 | 80 | 55% | 3042 | 55% |
|  |  | E1 | 3093 | 49 | 116 | 51% | 3031 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2820 | 23 | 540 | 48% | 2838 | 46% |
|  |  | P1 | 2785 | 54 | 114 | 51% | 2759 | 33% |
|  |  | E1 | 2766 | 46 | 150 | 46% | 2807 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2936 | 30 | 356 | 51% | 2920 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2855 | 31 | 328 | 50% | 2849 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 31 | 368 | 50% | 2504 | 25% |