# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2792<sub>(-57) | 3140<sub>(-6) | 3244<sub>(+28) |  |
| 2.3.0 | 2026-11-08 | 2849<sub>(+52) | 3146<sub>(+2) | 3216<sub>(+4) |  |
| 2.2.0 | 2026-11-07 | 2797<sub>(+4) | 3144<sub>(+16) | 3212<sub>(-29) |  |
| 2.1.0 | 2026-10-31 | 2793<sub>(-22) | 3128<sub>(-42) | 3241<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2815<sub>(+81) | 3170<sub>(+81) | 3198<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2734 | 3089 | 3191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2792<sub>(-12) | 3154<sub>(+34) | 3195<sub>(-2) |  |
| 2.3.0 | 2026-11-08 | 2804<sub>(+12) | 3120<sub>(-20) | 3197<sub>(+11) |  |
| 2.2.0 | 2026-11-07 | 2792<sub>(-7) | 3140<sub>(-1) | 3186<sub>(-7) |  |
| 2.1.0 | 2026-10-31 | 2799<sub>(-40) | 3141<sub>(+16) | 3193<sub>(-20) |  |
| 1.0.0 | 2026-10-15 | 2839<sub>(+74) | 3125<sub>(-12) | 3213<sub>(+67) |  |
| 0.13.593 | 2026-06-30 | 2765 | 3137 | 3146 |  |
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

Generated: 2026-11-19 05:41:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2734, 2815, 2793, 2797, 2849, 2792]
  line "E1: LTC (60.0+0.60s)" [3089, 3170, 3128, 3144, 3146, 3140]
  line "E1: VLTC (2m24s+1.12s)" [3191, 3198, 3241, 3212, 3216, 3244]
  line "P1: STC (8.0+0.08s)" [2765, 2839, 2799, 2792, 2804, 2792]
  line "P1: LTC (60.0+0.60s)" [3137, 3125, 3141, 3140, 3120, 3154]
  line "P1: VLTC (2m24s+1.12s)" [3146, 3213, 3193, 3186, 3197, 3195]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3195 | 36 | 212 | 49% | 3204 | 59% |
|  |  | E1 | 3244 | 29 | 308 | 51% | 3232 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3154 | 43 | 148 | 48% | 3164 | 59% |
|  |  | E1 | 3140 | 29 | 320 | 52% | 3124 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2792 | 31 | 346 | 47% | 2822 | 35% |
|  |  | P1 | 2792 | 44 | 164 | 50% | 2800 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3197 | 43 | 144 | 48% | 3210 | 59% |
|  |  | E1 | 3216 | 35 | 212 | 49% | 3227 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3120 | 37 | 198 | 52% | 3101 | 58% |
|  |  | E1 | 3146 | 31 | 278 | 47% | 3171 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2804 | 34 | 266 | 45% | 2842 | 41% |
|  |  | E1 | 2849 | 31 | 316 | 47% | 2873 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3212 | 32 | 262 | 51% | 3208 | 57% |
|  |  | P1 | 3186 | 38 | 178 | 53% | 3167 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3140 | 48 | 116 | 48% | 3155 | 60% |
|  |  | E1 | 3144 | 32 | 280 | 53% | 3123 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2792 | 50 | 126 | 51% | 2780 | 36% |
|  |  | E1 | 2797 | 32 | 292 | 53% | 2770 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3193 | 34 | 232 | 47% | 3213 | 64% |
|  |  | E1 | 3241 | 28 | 340 | 53% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3141 | 41 | 152 | 49% | 3147 | 63% |
|  |  | E1 | 3128 | 29 | 344 | 54% | 3097 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2799 | 38 | 212 | 45% | 2843 | 40% |
|  |  | E1 | 2793 | 37 | 228 | 49% | 2801 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3213 | 40 | 160 | 50% | 3216 | 66% |
|  |  | E1 | 3198 | 34 | 232 | 50% | 3195 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3125 | 39 | 180 | 50% | 3121 | 58% |
|  |  | E1 | 3170 | 32 | 276 | 51% | 3163 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2839 | 39 | 198 | 52% | 2820 | 45% |
|  |  | E1 | 2815 | 28 | 394 | 47% | 2840 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3146 | 35 | 220 | 46% | 3177 | 56% |
|  |  | E1 | 3191 | 30 | 312 | 47% | 3212 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3137 | 34 | 248 | 52% | 3119 | 49% |
|  |  | E1 | 3089 | 31 | 300 | 48% | 3108 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2765 | 41 | 192 | 46% | 2803 | 35% |
|  |  | E1 | 2734 | 30 | 382 | 46% | 2772 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |