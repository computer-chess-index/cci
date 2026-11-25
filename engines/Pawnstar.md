# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2797<sub>(-58) | 3146<sub>(-4) | 3249<sub>(+25) |  |
| 2.3.0 | 2026-11-08 | 2855<sub>(+52) | 3150<sub>(+2) | 3224<sub>(+7) |  |
| 2.2.0 | 2026-11-07 | 2803<sub>(+4) | 3148<sub>(+17) | 3217<sub>(-30) |  |
| 2.1.0 | 2026-10-31 | 2799<sub>(-20) | 3131<sub>(-43) | 3247<sub>(+45) |  |
| 1.0.0 | 2026-10-15 | 2819<sub>(+81) | 3174<sub>(+81) | 3202<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2738 | 3093 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2809<sub>(-29) | 3177<sub>(+25) | 3228<sub>(-1) |  |
| 2.3.0 | 2026-11-08 | 2838<sub>(+18) | 3152<sub>(-18) | 3229<sub>(+13) |  |
| 2.2.0 | 2026-11-07 | 2820<sub>(-7) | 3170<sub>(-1) | 3216<sub>(-8) |  |
| 2.1.0 | 2026-10-31 | 2827<sub>(-40) | 3171<sub>(+15) | 3224<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2867<sub>(+72) | 3156<sub>(-12) | 3243<sub>(+68) |  |
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

Generated: 2026-11-25 05:41:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2738, 2819, 2799, 2803, 2855, 2797]
  line "E1: LTC (60.0+0.60s)" [3093, 3174, 3131, 3148, 3150, 3146]
  line "E1: VLTC (2m24s+1.12s)" [3195, 3202, 3247, 3217, 3224, 3249]
  line "P1: STC (8.0+0.08s)" [2795, 2867, 2827, 2820, 2838, 2809]
  line "P1: LTC (60.0+0.60s)" [3168, 3156, 3171, 3170, 3152, 3177]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3243, 3224, 3216, 3229, 3228]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3228 | 35 | 216 | 49% | 3237 | 59% |
|  |  | E1 | 3249 | 29 | 308 | 51% | 3237 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3177 | 38 | 184 | 48% | 3191 | 59% |
|  |  | E1 | 3146 | 29 | 328 | 52% | 3128 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2809 | 41 | 188 | 49% | 2826 | 38% |
|  |  | E1 | 2797 | 29 | 394 | 47% | 2824 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3229 | 43 | 144 | 48% | 3244 | 59% |
|  |  | E1 | 3224 | 35 | 216 | 49% | 3232 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3152 | 37 | 198 | 52% | 3133 | 58% |
|  |  | E1 | 3150 | 31 | 290 | 47% | 3175 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2838 | 33 | 286 | 46% | 2869 | 41% |
|  |  | E1 | 2855 | 31 | 324 | 48% | 2876 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3217 | 32 | 262 | 51% | 3213 | 57% |
|  |  | P1 | 3216 | 38 | 178 | 53% | 3197 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3148 | 32 | 280 | 53% | 3127 | 53% |
|  |  | P1 | 3170 | 48 | 116 | 48% | 3185 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2803 | 32 | 292 | 53% | 2776 | 43% |
|  |  | P1 | 2820 | 50 | 126 | 51% | 2809 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3224 | 34 | 232 | 47% | 3243 | 64% |
|  |  | E1 | 3247 | 28 | 340 | 53% | 3224 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3171 | 41 | 152 | 49% | 3178 | 63% |
|  |  | E1 | 3131 | 29 | 344 | 54% | 3101 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2827 | 38 | 212 | 45% | 2873 | 40% |
|  |  | E1 | 2799 | 37 | 228 | 49% | 2807 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3202 | 34 | 232 | 50% | 3200 | 62% |
|  |  | P1 | 3243 | 40 | 160 | 50% | 3245 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3156 | 39 | 180 | 50% | 3154 | 58% |
|  |  | E1 | 3174 | 32 | 276 | 51% | 3167 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2867 | 39 | 198 | 52% | 2849 | 45% |
|  |  | E1 | 2819 | 28 | 394 | 47% | 2844 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3175 | 35 | 220 | 46% | 3206 | 56% |
|  |  | E1 | 3195 | 30 | 312 | 47% | 3216 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3168 | 34 | 248 | 52% | 3150 | 49% |
|  |  | E1 | 3093 | 31 | 300 | 48% | 3112 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2795 | 41 | 192 | 46% | 2831 | 35% |
|  |  | E1 | 2738 | 30 | 382 | 46% | 2776 | 31% |