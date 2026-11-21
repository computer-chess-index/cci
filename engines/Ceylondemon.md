# Engine: Ceylondemon

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2911<sub>(+326) | 3220<sub>(+259) | 3309<sub>(+223) |  |
| 2.0 | 2026-08-28 | 2585 | 2961 | 3086 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2898<sub>(+218) | 3195<sub>(+220) | 3268<sub>(+125) |  |
| 2.0 | 2026-08-28 | 2680 | 2975 | 3143 |  |
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

Generated: 2026-11-21 05:36:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2585, 2911]
  line "E1: LTC (60.0+0.60s)" [2961, 3220]
  line "E1: VLTC (2m24s+1.12s)" [3086, 3309]
  line "P1: STC (8.0+0.08s)" [2680, 2898]
  line "P1: LTC (60.0+0.60s)" [2975, 3195]
  line "P1: VLTC (2m24s+1.12s)" [3143, 3268]
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
|  |  | P1 | 3268 | 35 | 208 | 52% | 3256 | 64% |
|  |  | E1 | 3309 | 30 | 302 | 50% | 3308 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3195 | 28 | 350 | 53% | 3168 | 57% |
|  |  | E1 | 3220 | 28 | 356 | 49% | 3224 | 54% |
|  |  | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2898 | 36 | 236 | 53% | 2871 | 39% |
|  |  | E1 | 2911 | 29 | 364 | 49% | 2915 | 39% |
|  |  | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3086 | 30 | 336 | 47% | 3108 | 47% |
|  |  | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3143 | 35 | 234 | 49% | 3152 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 2975 | 32 | 290 | 51% | 2966 | 44% |
|  |  | E1 | 2961 | 28 | 372 | 45% | 3001 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2680 | 31 | 328 | 51% | 2639 | 38% |
|  |  | E1 | 2585 | 30 | 354 | 47% | 2612 | 34% |