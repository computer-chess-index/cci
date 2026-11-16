# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2851<sub>(+59) | 3168<sub>(+67) | 3274<sub>(+146) |  |
| 2.1 | 2026-04-08 | 2792 | 3101 | 3128 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2846<sub>(+130) | 3164<sub>(+112) | 3225<sub>(-81) |  |
| 2.1 | 2026-04-08 | 2716 | 3052 | 3306 |  |
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

Generated: 2026-11-16 05:43:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "2.2"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2792, 2851]
  line "E1: LTC (60.0+0.60s)" [3101, 3168]
  line "E1: VLTC (2m24s+1.12s)" [3128, 3274]
  line "P1: STC (8.0+0.08s)" [2716, 2846]
  line "P1: LTC (60.0+0.60s)" [3052, 3164]
  line "P1: VLTC (2m24s+1.12s)" [3306, 3225]
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
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3274 | 24 | 456 | 48% | 3287 | 59% |
|  |  | T1 | 3289 | 30 | 284 | 50% | 3286 | 68% |
|  |  | P1 | 3225 | 29 | 310 | 47% | 3244 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3168 | 23 | 498 | 46% | 3197 | 58% |
|  |  | T1 | 3183 | 33 | 244 | 49% | 3186 | 61% |
|  |  | P1 | 3164 | 29 | 324 | 49% | 3173 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2851 | 26 | 428 | 47% | 2862 | 47% |
|  |  | T1 | 2919 | 34 | 252 | 50% | 2919 | 51% |
|  |  | P1 | 2846 | 32 | 290 | 47% | 2877 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3221 | 24 | 488 | 50% | 3217 | 59% |
|  |  | P1 | 3306 | 112 | 20 | 58% | 3241 | 65% |
|  |  | E1 | 3128 | 64 | 80 | 53% | 3038 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3152 | 24 | 458 | 52% | 3135 | 59% |
|  |  | P1 | 3052 | 76 | 52 | 56% | 2967 | 46% |
|  |  | E1 | 3101 | 64 | 68 | 53% | 2988 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2820 | 23 | 540 | 48% | 2838 | 46% |
|  |  | P1 | 2716 | 74 | 68 | 49% | 2704 | 26% |
|  |  | E1 | 2792 | 62 | 90 | 44% | 2842 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2936 | 30 | 356 | 51% | 2920 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2855 | 31 | 328 | 50% | 2849 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 31 | 368 | 50% | 2504 | 25% |