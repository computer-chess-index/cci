# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2996<sub>(+338) | 3313<sub>(+262) | 3395<sub>(+224) |  |
| 2.0 | 2026-08-28 | 2658 | 3051 | 3171 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 3077<sub>(+220) | 3426<sub>(+236) | 3507<sub>(+131) |  |
| 2.0 | 2026-08-28 | 2857 | 3190 | 3376 |  |
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

Generated: 2026-11-07 05:36:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3600
  line "E1: STC (8.0+0.08s)" [2658, 2996]
  line "E1: LTC (60.0+0.60s)" [3051, 3313]
  line "E1: VLTC (2m24s+1.12s)" [3171, 3395]
  line "P1: STC (8.0+0.08s)" [2857, 3077]
  line "P1: LTC (60.0+0.60s)" [3190, 3426]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3507]
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
|  |  | P1 | 3507 | 37 | 186 | 52% | 3494 | 64% |
|  |  | E1 | 3395 | 32 | 266 | 50% | 3394 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3232 | 37 | 196 | 52% | 3216 | 58% |
|  |  | P1 | 3426 | 31 | 282 | 54% | 3393 | 57% |
|  |  | E1 | 3313 | 31 | 288 | 51% | 3305 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2988 | 44 | 158 | 54% | 2948 | 42% |
|  |  | P1 | 3077 | 41 | 188 | 53% | 3051 | 38% |
|  |  | E1 | 2996 | 32 | 300 | 50% | 2992 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 36 | 214 | 49% | 3386 | 52% |
|  |  | E1 | 3171 | 30 | 316 | 47% | 3197 | 48% |
|  |  | T1 | 3137 | 29 | 360 | 54% | 3096 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3051 | 30 | 328 | 45% | 3089 | 44% |
|  |  | T1 | 3052 | 31 | 312 | 52% | 3025 | 48% |
|  |  | P1 | 3190 | 33 | 274 | 51% | 3178 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2658 | 32 | 314 | 47% | 2691 | 34% |
|  |  | T1 | 2637 | 31 | 348 | 48% | 2650 | 28% |
|  |  | P1 | 2857 | 32 | 304 | 51% | 2832 | 40% |