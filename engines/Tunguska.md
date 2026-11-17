# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2854<sub>(+78) | 3170<sub>(+60) | 3274<sub>(+164) |  |
| 2.1 | 2026-04-08 | 2776 | 3110 | 3110 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2853<sub>(+123) | 3166<sub>(+106) | 3225<sub>(-11) |  |
| 2.1 | 2026-04-08 | 2730 | 3060 | 3236 |  |
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

Generated: 2026-11-17 05:44:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "2.2"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2776, 2854]
  line "E1: LTC (60.0+0.60s)" [3110, 3170]
  line "E1: VLTC (2m24s+1.12s)" [3110, 3274]
  line "P1: STC (8.0+0.08s)" [2730, 2853]
  line "P1: LTC (60.0+0.60s)" [3060, 3166]
  line "P1: VLTC (2m24s+1.12s)" [3236, 3225]
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
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3225 | 29 | 314 | 47% | 3244 | 62% |
|  |  | E1 | 3274 | 24 | 456 | 48% | 3289 | 59% |
|  |  | T1 | 3289 | 30 | 284 | 50% | 3286 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3170 | 23 | 502 | 46% | 3197 | 58% |
|  |  | T1 | 3183 | 33 | 244 | 49% | 3186 | 61% |
|  |  | P1 | 3166 | 29 | 328 | 49% | 3174 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2854 | 26 | 432 | 47% | 2863 | 47% |
|  |  | T1 | 2919 | 34 | 252 | 50% | 2919 | 51% |
|  |  | P1 | 2853 | 32 | 290 | 47% | 2884 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3221 | 24 | 488 | 50% | 3217 | 59% |
|  |  | P1 | 3236 | 84 | 36 | 46% | 3260 | 64% |
|  |  | E1 | 3110 | 59 | 92 | 50% | 3051 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3152 | 24 | 458 | 52% | 3135 | 59% |
|  |  | P1 | 3060 | 70 | 60 | 55% | 2985 | 50% |
|  |  | E1 | 3110 | 61 | 76 | 53% | 3004 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2820 | 23 | 540 | 48% | 2838 | 46% |
|  |  | P1 | 2730 | 66 | 80 | 49% | 2714 | 31% |
|  |  | E1 | 2776 | 59 | 98 | 43% | 2838 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2936 | 30 | 356 | 51% | 2920 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2855 | 31 | 328 | 50% | 2849 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 31 | 368 | 50% | 2504 | 25% |