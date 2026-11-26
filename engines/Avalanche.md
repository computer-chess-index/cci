# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3255<sub>(+134) | 3488<sub>(+66) | 3549<sub>(+71) |  |
| 4.0.0 | 2026-08-08 | 3121 | 3422 | 3478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3264<sub>(+124) | 3464<sub>(+80) | 3530<sub>(+105) |  |
| 4.0.0 | 2026-08-08 | 3140 | 3384 | 3425 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:36:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3121, 3255]
  line "E1: LTC (60.0+0.60s)" [3422, 3488]
  line "E1: VLTC (2m24s+1.12s)" [3478, 3549]
  line "P1: STC (8.0+0.08s)" [3140, 3264]
  line "P1: LTC (60.0+0.60s)" [3384, 3464]
  line "P1: VLTC (2m24s+1.12s)" [3425, 3530]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "T1: STC (8.0+0.08s)" [2905, 3194]
  line "T1: LTC (60.0+0.60s)" [3201, 3395]
  line "T1: VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 36 | 182 | 49% | 3538 | 81% |
|  |  | E1 | 3549 | 31 | 248 | 50% | 3545 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3488 | 25 | 398 | 53% | 3468 | 71% |
|  |  | P1 | 3464 | 38 | 168 | 52% | 3451 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3255 | 26 | 370 | 49% | 3259 | 66% |
|  |  | P1 | 3264 | 32 | 260 | 49% | 3272 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3425 | 34 | 202 | 48% | 3437 | 81% |
|  |  | E1 | 3478 | 30 | 272 | 49% | 3487 | 75% |
|  |  | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3422 | 29 | 304 | 49% | 3430 | 62% |
|  |  | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  |  | P1 | 3384 | 37 | 180 | 49% | 3386 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3121 | 28 | 344 | 45% | 3141 | 58% |
|  |  | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
|  |  | P1 | 3140 | 33 | 248 | 46% | 3171 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |