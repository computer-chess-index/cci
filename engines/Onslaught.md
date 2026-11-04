# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 2998<sub>(+10) | 3368<sub>(+81) | 3424<sub>(+60) |  |
| 2.0 | 2026-09-12 | 2988 | 3287 | 3364 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 3177<sub>(+103) | 3491<sub>(+77) | 3557<sub>(+97) |  |
| 2.0 | 2026-09-12 | 3074 | 3414 | 3460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-04 05:40:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2900 --> 3600
  line "E1: STC (8.0+0.08s)" [2988, 2998]
  line "E1: LTC (60.0+0.60s)" [3287, 3368]
  line "E1: VLTC (2m24s+1.12s)" [3364, 3424]
  line "P1: STC (8.0+0.08s)" [3074, 3177]
  line "P1: LTC (60.0+0.60s)" [3414, 3491]
  line "P1: VLTC (2m24s+1.12s)" [3460, 3557]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "T1: STC (8.0+0.08s)" [2552, 2997]
  line "T1: LTC (60.0+0.60s)" [2812, 3243]
  line "T1: VLTC (2m24s+1.12s)" [2927, 3303]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3557 | 35 | 208 | 49% | 3568 | 71% |
|  |  | E1 | 3424 | 31 | 270 | 49% | 3432 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 33 | 244 | 46% | 3518 | 65% |
|  |  | E1 | 3368 | 35 | 202 | 51% | 3357 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2998 | 32 | 292 | 53% | 2971 | 40% |
|  |  | P1 | 3177 | 40 | 174 | 47% | 3202 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3364 | 29 | 320 | 48% | 3384 | 63% |
|  |  | T1 | 3303 | 32 | 264 | 53% | 3282 | 65% |
|  |  | P1 | 3460 | 32 | 256 | 47% | 3482 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3243 | 29 | 314 | 53% | 3220 | 61% |
|  |  | P1 | 3414 | 34 | 232 | 51% | 3406 | 56% |
|  |  | E1 | 3287 | 28 | 368 | 47% | 3314 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2997 | 36 | 232 | 51% | 2986 | 45% |
|  |  | P1 | 3074 | 32 | 292 | 48% | 3092 | 41% |
|  |  | E1 | 2988 | 31 | 302 | 45% | 3028 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2927 | 29 | 364 | 51% | 2920 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2812 | 31 | 324 | 51% | 2797 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2552 | 30 | 372 | 50% | 2547 | 33% |