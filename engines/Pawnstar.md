# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2792<sub>(-57) | 3141<sub>(-7) | 3244<sub>(+27) |  |
| 2.3.0 | 2026-11-08 | 2849<sub>(+52) | 3148<sub>(+2) | 3217<sub>(+3) |  |
| 2.2.0 | 2026-11-07 | 2797<sub>(+4) | 3146<sub>(+17) | 3214<sub>(-29) |  |
| 2.1.0 | 2026-10-31 | 2793<sub>(-22) | 3129<sub>(-42) | 3243<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2815<sub>(+81) | 3171<sub>(+79) | 3200<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2734 | 3092 | 3193 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2800<sub>(-4) | 3155<sub>(+34) | 3197<sub>(-3) |  |
| 2.3.0 | 2026-11-08 | 2804<sub>(+12) | 3121<sub>(-22) | 3200<sub>(+11) |  |
| 2.2.0 | 2026-11-07 | 2792<sub>(-5) | 3143<sub>(0) | 3189<sub>(-8) |  |
| 2.1.0 | 2026-10-31 | 2797<sub>(-41) | 3143<sub>(+15) | 3197<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2838<sub>(+72) | 3128<sub>(-12) | 3216<sub>(+68) |  |
| 0.13.593 | 2026-06-30 | 2766 | 3140 | 3148 |  |
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

Generated: 2026-11-18 05:41:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2734, 2815, 2793, 2797, 2849, 2792]
  line "E1: LTC (60.0+0.60s)" [3092, 3171, 3129, 3146, 3148, 3141]
  line "E1: VLTC (2m24s+1.12s)" [3193, 3200, 3243, 3214, 3217, 3244]
  line "P1: STC (8.0+0.08s)" [2766, 2838, 2797, 2792, 2804, 2800]
  line "P1: LTC (60.0+0.60s)" [3140, 3128, 3143, 3143, 3121, 3155]
  line "P1: VLTC (2m24s+1.12s)" [3148, 3216, 3197, 3189, 3200, 3197]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3197 | 36 | 212 | 49% | 3206 | 59% |
|  |  | E1 | 3244 | 29 | 300 | 51% | 3235 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3155 | 43 | 148 | 48% | 3166 | 59% |
|  |  | E1 | 3141 | 29 | 320 | 52% | 3125 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2800 | 45 | 156 | 51% | 2799 | 35% |
|  |  | E1 | 2792 | 31 | 334 | 48% | 2805 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3217 | 35 | 212 | 49% | 3228 | 62% |
|  |  | P1 | 3200 | 43 | 144 | 48% | 3213 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3121 | 37 | 198 | 52% | 3102 | 58% |
|  |  | E1 | 3148 | 31 | 278 | 47% | 3174 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2804 | 34 | 266 | 45% | 2840 | 41% |
|  |  | E1 | 2849 | 31 | 316 | 47% | 2874 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3189 | 38 | 178 | 53% | 3170 | 63% |
|  |  | E1 | 3214 | 32 | 262 | 51% | 3209 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3143 | 48 | 116 | 48% | 3156 | 60% |
|  |  | E1 | 3146 | 32 | 280 | 53% | 3124 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2792 | 50 | 126 | 51% | 2781 | 36% |
|  |  | E1 | 2797 | 32 | 292 | 53% | 2770 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3197 | 34 | 232 | 47% | 3216 | 64% |
|  |  | E1 | 3243 | 28 | 340 | 53% | 3220 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3143 | 41 | 152 | 49% | 3148 | 63% |
|  |  | E1 | 3129 | 29 | 344 | 54% | 3100 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2797 | 38 | 212 | 45% | 2843 | 40% |
|  |  | E1 | 2793 | 37 | 228 | 49% | 2801 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3216 | 40 | 160 | 50% | 3218 | 66% |
|  |  | E1 | 3200 | 34 | 232 | 50% | 3198 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3128 | 39 | 180 | 50% | 3124 | 58% |
|  |  | E1 | 3171 | 32 | 276 | 51% | 3164 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2815 | 28 | 394 | 47% | 2840 | 40% |
|  |  | P1 | 2838 | 39 | 198 | 52% | 2819 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3148 | 35 | 220 | 46% | 3179 | 56% |
|  |  | E1 | 3193 | 30 | 312 | 47% | 3213 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3140 | 34 | 248 | 52% | 3121 | 49% |
|  |  | E1 | 3092 | 31 | 300 | 48% | 3109 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2766 | 41 | 192 | 46% | 2803 | 35% |
|  |  | E1 | 2734 | 30 | 382 | 46% | 2772 | 31% |