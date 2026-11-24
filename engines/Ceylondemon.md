# Engine: Ceylondemon

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2911<sub>(+324) | 3222<sub>(+259) | 3310<sub>(+224) |  |
| 2.0 | 2026-08-28 | 2587 | 2963 | 3086 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2907<sub>(+219) | 3205<sub>(+219) | 3278<sub>(+124) |  |
| 2.0 | 2026-08-28 | 2688 | 2986 | 3154 |  |
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

Generated: 2026-11-24 05:36:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2587, 2911]
  line "E1: LTC (60.0+0.60s)" [2963, 3222]
  line "E1: VLTC (2m24s+1.12s)" [3086, 3310]
  line "P1: STC (8.0+0.08s)" [2688, 2907]
  line "P1: LTC (60.0+0.60s)" [2986, 3205]
  line "P1: VLTC (2m24s+1.12s)" [3154, 3278]
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
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3278 | 35 | 208 | 52% | 3267 | 64% |
|  |  | E1 | 3310 | 30 | 302 | 50% | 3309 | 58% |
|  |  | T1 | 3301 | 35 | 216 | 52% | 3282 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3205 | 28 | 354 | 53% | 3179 | 56% |
|  |  | E1 | 3222 | 28 | 368 | 50% | 3225 | 54% |
|  |  | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2907 | 36 | 244 | 53% | 2881 | 39% |
|  |  | E1 | 2911 | 28 | 396 | 49% | 2915 | 39% |
|  |  | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3154 | 35 | 234 | 49% | 3163 | 52% |
|  |  | E1 | 3086 | 30 | 336 | 47% | 3108 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 2986 | 32 | 290 | 51% | 2977 | 44% |
|  |  | E1 | 2963 | 28 | 376 | 45% | 3002 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2688 | 31 | 328 | 51% | 2647 | 38% |
|  |  | E1 | 2587 | 30 | 354 | 47% | 2615 | 34% |