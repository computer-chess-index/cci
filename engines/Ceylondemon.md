# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2908<sub>(+321) | 3235<sub>(+262) | 3324<sub>(+230) |  |
| 2.0 | 2026-08-28 | 2587 | 2973 | 3094 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 3029<sub>(+232) | 3329<sub>(+206) | 3432<sub>(+123) |  |
| 2.0 | 2026-08-28 | 2797 | 3123 | 3309 |  |
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

Generated: 2026-10-21 04:36:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2587, 2908]
  line "E1: LTC (60.0+0.60s)" [2973, 3235]
  line "E1: VLTC (2m24s+1.12s)" [3094, 3324]
  line "P1: STC (8.0+0.08s)" [2797, 3029]
  line "P1: LTC (60.0+0.60s)" [3123, 3329]
  line "P1: VLTC (2m24s+1.12s)" [3309, 3432]
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
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3432 | 43 | 138 | 51% | 3421 | 65% |
|  |  | E1 | 3324 | 38 | 182 | 51% | 3317 | 59% |
|  |  | T1 | 3301 | 35 | 216 | 52% | 3282 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3235 | 34 | 240 | 51% | 3222 | 55% |
|  |  | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  |  | P1 | 3329 | 43 | 152 | 53% | 3305 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2908 | 38 | 224 | 50% | 2909 | 36% |
|  |  | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
|  |  | P1 | 3029 | 45 | 156 | 55% | 2984 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3309 | 36 | 214 | 49% | 3318 | 52% |
|  |  | E1 | 3094 | 30 | 316 | 47% | 3120 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 3123 | 33 | 274 | 51% | 3112 | 43% |
|  |  | E1 | 2973 | 30 | 328 | 45% | 3011 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2797 | 32 | 304 | 51% | 2770 | 40% |
|  |  | E1 | 2587 | 32 | 314 | 47% | 2619 | 34% |