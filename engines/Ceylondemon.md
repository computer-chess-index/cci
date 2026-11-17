# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2917<sub>(+328) | 3225<sub>(+259) | 3314<sub>(+221) |  |
| 2.0 | 2026-08-28 | 2589 | 2966 | 3093 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2873<sub>(+211) | 3178<sub>(+219) | 3255<sub>(+128) |  |
| 2.0 | 2026-08-28 | 2662 | 2959 | 3127 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2988<sub>(+351) | 3232<sub>(+180) | 3301<sub>(+164) |  |
| 2.0 | 2026-08-28 | 2637 | 3052 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ceylondemon+<version>&body=###%20Engine%20name%0ACeylondemon%0A%0A###%20Version%0A3.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:37:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2589, 2917]
  line "E1: LTC (60.0+0.60s)" [2966, 3225]
  line "E1: VLTC (2m24s+1.12s)" [3093, 3314]
  line "P1: STC (8.0+0.08s)" [2662, 2873]
  line "P1: LTC (60.0+0.60s)" [2959, 3178]
  line "P1: VLTC (2m24s+1.12s)" [3127, 3255]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3400
  line "T1: STC (8.0+0.08s)" [2637, 2988]
  line "T1: LTC (60.0+0.60s)" [3052, 3232]
  line "T1: VLTC (2m24s+1.12s)" [3137, 3301]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3255 | 35 | 208 | 52% | 3243 | 64% |
|  |  | E1 | 3314 | 30 | 298 | 50% | 3313 | 58% |
|  |  | T1 | 3301 | 35 | 216 | 52% | 3282 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3178 | 28 | 338 | 54% | 3151 | 56% |
|  |  | E1 | 3225 | 28 | 348 | 49% | 3231 | 54% |
|  |  | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2873 | 38 | 216 | 53% | 2850 | 39% |
|  |  | E1 | 2917 | 30 | 344 | 50% | 2916 | 40% |
|  |  | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3127 | 35 | 234 | 49% | 3136 | 52% |
|  |  | E1 | 3093 | 30 | 336 | 47% | 3114 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 2959 | 32 | 290 | 51% | 2950 | 44% |
|  |  | E1 | 2966 | 28 | 372 | 45% | 3008 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2662 | 32 | 324 | 51% | 2622 | 38% |
|  |  | E1 | 2589 | 30 | 354 | 47% | 2618 | 34% |