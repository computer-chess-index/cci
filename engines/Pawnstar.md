# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2789<sub>(-61) | 3140<sub>(-4) | 3245<sub>(+25) |  |
| 2.3.0 | 2026-11-08 | 2850<sub>(+50) | 3144<sub>(0) | 3220<sub>(+7) |  |
| 2.2.0 | 2026-11-07 | 2800<sub>(+4) | 3144<sub>(+17) | 3213<sub>(-28) |  |
| 2.1.0 | 2026-10-31 | 2796<sub>(-19) | 3127<sub>(-43) | 3241<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2815<sub>(+80) | 3170<sub>(+81) | 3198<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2735 | 3089 | 3191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2809<sub>(-29) | 3174<sub>(+23) | 3227<sub>(-2) |  |
| 2.3.0 | 2026-11-08 | 2838<sub>(+18) | 3151<sub>(-19) | 3229<sub>(+13) |  |
| 2.2.0 | 2026-11-07 | 2820<sub>(-7) | 3170<sub>(0) | 3216<sub>(-6) |  |
| 2.1.0 | 2026-10-31 | 2827<sub>(-42) | 3170<sub>(+15) | 3222<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2869<sub>(+74) | 3155<sub>(-13) | 3241<sub>(+66) |  |
| 0.13.593 | 2026-06-30 | 2795 | 3168 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:41:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2735, 2815, 2796, 2800, 2850, 2789]
  line "E1: LTC (60.0+0.60s)" [3089, 3170, 3127, 3144, 3144, 3140]
  line "E1: VLTC (2m24s+1.12s)" [3191, 3198, 3241, 3213, 3220, 3245]
  line "P1: STC (8.0+0.08s)" [2795, 2869, 2827, 2820, 2838, 2809]
  line "P1: LTC (60.0+0.60s)" [3168, 3155, 3170, 3170, 3151, 3174]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3241, 3222, 3216, 3229, 3227]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3227 | 35 | 216 | 49% | 3237 | 59% |
|  |  | E1 | 3245 | 29 | 312 | 52% | 3233 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3174 | 35 | 216 | 48% | 3187 | 60% |
|  |  | E1 | 3140 | 28 | 340 | 52% | 3125 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2809 | 41 | 188 | 49% | 2826 | 38% |
|  |  | E1 | 2789 | 28 | 406 | 46% | 2820 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3229 | 43 | 144 | 48% | 3243 | 59% |
|  |  | E1 | 3220 | 35 | 216 | 49% | 3228 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3144 | 30 | 298 | 47% | 3170 | 58% |
|  |  | P1 | 3151 | 37 | 198 | 52% | 3132 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2850 | 30 | 332 | 48% | 2870 | 40% |
|  |  | P1 | 2838 | 33 | 286 | 46% | 2870 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3216 | 38 | 178 | 53% | 3197 | 63% |
|  |  | E1 | 3213 | 32 | 262 | 51% | 3208 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3170 | 48 | 116 | 48% | 3183 | 60% |
|  |  | E1 | 3144 | 32 | 280 | 53% | 3123 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2820 | 50 | 126 | 51% | 2809 | 36% |
|  |  | E1 | 2800 | 32 | 292 | 53% | 2773 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3222 | 34 | 232 | 47% | 3243 | 64% |
|  |  | E1 | 3241 | 28 | 340 | 53% | 3220 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3170 | 41 | 152 | 49% | 3177 | 63% |
|  |  | E1 | 3127 | 29 | 344 | 54% | 3097 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2827 | 38 | 212 | 45% | 2873 | 40% |
|  |  | E1 | 2796 | 37 | 228 | 49% | 2804 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3241 | 40 | 160 | 50% | 3245 | 66% |
|  |  | E1 | 3198 | 34 | 232 | 50% | 3195 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3155 | 39 | 180 | 50% | 3152 | 58% |
|  |  | E1 | 3170 | 32 | 276 | 51% | 3163 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2869 | 39 | 198 | 52% | 2849 | 45% |
|  |  | E1 | 2815 | 28 | 394 | 47% | 2840 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3191 | 30 | 312 | 47% | 3212 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3175 | 35 | 220 | 46% | 3205 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3168 | 34 | 248 | 52% | 3150 | 49% |
|  |  | E1 | 3089 | 31 | 300 | 48% | 3106 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2795 | 41 | 192 | 46% | 2831 | 35% |
|  |  | E1 | 2735 | 30 | 382 | 46% | 2773 | 31% |