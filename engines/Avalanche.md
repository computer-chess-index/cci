# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3256<sub>(+131) | 3491<sub>(+65) | 3552<sub>(+72) |  |
| 4.0.0 | 2026-08-08 | 3125 | 3426 | 3480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3258<sub>(+118) | 3457<sub>(+79) | 3522<sub>(+104) |  |
| 4.0.0 | 2026-08-08 | 3140 | 3378 | 3418 |  |
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

Generated: 2026-11-24 05:36:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3125, 3256]
  line "E1: LTC (60.0+0.60s)" [3426, 3491]
  line "E1: VLTC (2m24s+1.12s)" [3480, 3552]
  line "P1: STC (8.0+0.08s)" [3140, 3258]
  line "P1: LTC (60.0+0.60s)" [3378, 3457]
  line "P1: VLTC (2m24s+1.12s)" [3418, 3522]
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
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3552 | 31 | 248 | 50% | 3548 | 77% |
|  |  | P1 | 3522 | 36 | 182 | 49% | 3530 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3457 | 38 | 168 | 52% | 3444 | 77% |
|  |  | E1 | 3491 | 25 | 394 | 53% | 3472 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3258 | 32 | 256 | 49% | 3264 | 65% |
|  |  | E1 | 3256 | 27 | 362 | 49% | 3262 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3480 | 30 | 272 | 49% | 3490 | 75% |
|  |  | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  |  | P1 | 3418 | 34 | 202 | 48% | 3430 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  |  | P1 | 3378 | 37 | 180 | 49% | 3379 | 72% |
|  |  | E1 | 3426 | 30 | 296 | 49% | 3434 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
|  |  | P1 | 3140 | 35 | 228 | 47% | 3163 | 55% |
|  |  | E1 | 3125 | 28 | 340 | 46% | 3144 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |