# Engine: Ceylondemon

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2916<sub>(+329) | 3225<sub>(+258) | 3313<sub>(+224) |  |
| 2.0 | 2026-08-28 | 2587 | 2967 | 3089 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2917<sub>(+224) | 3214<sub>(+214) | 3287<sub>(+124) |  |
| 2.0 | 2026-08-28 | 2693 | 3000 | 3163 |  |
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

Generated: 2026-11-25 05:37:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2587, 2916]
  line "E1: LTC (60.0+0.60s)" [2967, 3225]
  line "E1: VLTC (2m24s+1.12s)" [3089, 3313]
  line "P1: STC (8.0+0.08s)" [2693, 2917]
  line "P1: LTC (60.0+0.60s)" [3000, 3214]
  line "P1: VLTC (2m24s+1.12s)" [3163, 3287]
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
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3313 | 30 | 302 | 50% | 3312 | 58% |
|  |  | T1 | 3301 | 35 | 216 | 52% | 3282 | 58% |
|  |  | P1 | 3287 | 35 | 208 | 52% | 3275 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  |  | P1 | 3214 | 28 | 354 | 53% | 3189 | 56% |
|  |  | E1 | 3225 | 27 | 372 | 50% | 3228 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
|  |  | P1 | 2917 | 35 | 260 | 53% | 2892 | 38% |
|  |  | E1 | 2916 | 28 | 404 | 50% | 2919 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  |  | P1 | 3163 | 35 | 234 | 49% | 3171 | 52% |
|  |  | E1 | 3089 | 30 | 336 | 47% | 3110 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 3000 | 32 | 298 | 51% | 2986 | 44% |
|  |  | E1 | 2967 | 28 | 380 | 45% | 3006 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2693 | 31 | 336 | 51% | 2655 | 38% |
|  |  | E1 | 2587 | 30 | 362 | 47% | 2618 | 33% |