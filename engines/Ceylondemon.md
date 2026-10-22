# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2928<sub>(+329) | 3249<sub>(+261) | 3341<sub>(+232) |  |
| 2.0 | 2026-08-28 | 2599 | 2988 | 3109 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 3032<sub>(+233) | 3340<sub>(+215) | 3430<sub>(+117) |  |
| 2.0 | 2026-08-28 | 2799 | 3125 | 3313 |  |
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

Generated: 2026-10-22 04:36:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2599, 2928]
  line "E1: LTC (60.0+0.60s)" [2988, 3249]
  line "E1: VLTC (2m24s+1.12s)" [3109, 3341]
  line "P1: STC (8.0+0.08s)" [2799, 3032]
  line "P1: LTC (60.0+0.60s)" [3125, 3340]
  line "P1: VLTC (2m24s+1.12s)" [3313, 3430]
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
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3301 | 35 | 216 | 52% | 3282 | 58% |
|  |  | P1 | 3430 | 43 | 142 | 51% | 3425 | 63% |
|  |  | E1 | 3341 | 38 | 190 | 51% | 3333 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  |  | P1 | 3340 | 38 | 188 | 53% | 3314 | 53% |
|  |  | E1 | 3249 | 34 | 244 | 51% | 3239 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
|  |  | P1 | 3032 | 45 | 156 | 55% | 2986 | 38% |
|  |  | E1 | 2928 | 35 | 256 | 50% | 2925 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3313 | 36 | 214 | 49% | 3322 | 52% |
|  |  | E1 | 3109 | 30 | 316 | 47% | 3133 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3125 | 33 | 274 | 51% | 3114 | 43% |
|  |  | E1 | 2988 | 30 | 328 | 45% | 3025 | 44% |
|  |  | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2799 | 32 | 304 | 51% | 2773 | 40% |
|  |  | E1 | 2599 | 32 | 314 | 47% | 2631 | 34% |
|  |  | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |