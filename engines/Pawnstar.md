# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2793<sub>(-56) | 3141<sub>(-6) | 3245<sub>(+27) |  |
| 2.3.0 | 2026-11-08 | 2849<sub>(+50) | 3147<sub>(+1) | 3218<sub>(+4) |  |
| 2.2.0 | 2026-11-07 | 2799<sub>(+6) | 3146<sub>(+18) | 3214<sub>(-29) |  |
| 2.1.0 | 2026-10-31 | 2793<sub>(-22) | 3128<sub>(-43) | 3243<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2815<sub>(+81) | 3171<sub>(+81) | 3200<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2734 | 3090 | 3193 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2805<sub>(-14) | 3171<sub>(+32) | 3214<sub>(-3) |  |
| 2.3.0 | 2026-11-08 | 2819<sub>(+10) | 3139<sub>(-20) | 3217<sub>(+12) |  |
| 2.2.0 | 2026-11-07 | 2809<sub>(-4) | 3159<sub>(-1) | 3205<sub>(-7) |  |
| 2.1.0 | 2026-10-31 | 2813<sub>(-42) | 3160<sub>(+16) | 3212<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2855<sub>(+73) | 3144<sub>(-12) | 3231<sub>(+67) |  |
| 0.13.593 | 2026-06-30 | 2782 | 3156 | 3164 |  |
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

Generated: 2026-11-23 05:41:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2734, 2815, 2793, 2799, 2849, 2793]
  line "E1: LTC (60.0+0.60s)" [3090, 3171, 3128, 3146, 3147, 3141]
  line "E1: VLTC (2m24s+1.12s)" [3193, 3200, 3243, 3214, 3218, 3245]
  line "P1: STC (8.0+0.08s)" [2782, 2855, 2813, 2809, 2819, 2805]
  line "P1: LTC (60.0+0.60s)" [3156, 3144, 3160, 3159, 3139, 3171]
  line "P1: VLTC (2m24s+1.12s)" [3164, 3231, 3212, 3205, 3217, 3214]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3214 | 35 | 216 | 49% | 3224 | 59% |
|  |  | E1 | 3245 | 29 | 308 | 51% | 3235 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3171 | 40 | 168 | 49% | 3181 | 59% |
|  |  | E1 | 3141 | 29 | 320 | 52% | 3125 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2805 | 43 | 168 | 49% | 2816 | 37% |
|  |  | E1 | 2793 | 30 | 378 | 47% | 2822 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3217 | 43 | 144 | 48% | 3231 | 59% |
|  |  | E1 | 3218 | 35 | 212 | 49% | 3228 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3139 | 37 | 198 | 52% | 3120 | 58% |
|  |  | E1 | 3147 | 31 | 278 | 47% | 3174 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2819 | 33 | 274 | 45% | 2857 | 41% |
|  |  | E1 | 2849 | 31 | 316 | 47% | 2874 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3205 | 38 | 178 | 53% | 3186 | 63% |
|  |  | E1 | 3214 | 32 | 262 | 51% | 3209 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3159 | 48 | 116 | 48% | 3174 | 60% |
|  |  | E1 | 3146 | 32 | 280 | 53% | 3124 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2809 | 50 | 126 | 51% | 2797 | 36% |
|  |  | E1 | 2799 | 32 | 292 | 53% | 2772 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3212 | 34 | 232 | 47% | 3231 | 64% |
|  |  | E1 | 3243 | 28 | 340 | 53% | 3221 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3160 | 41 | 152 | 49% | 3166 | 63% |
|  |  | E1 | 3128 | 29 | 344 | 54% | 3098 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2813 | 38 | 212 | 45% | 2859 | 40% |
|  |  | E1 | 2793 | 37 | 228 | 49% | 2801 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3231 | 40 | 160 | 50% | 3235 | 66% |
|  |  | E1 | 3200 | 34 | 232 | 50% | 3197 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3171 | 32 | 276 | 51% | 3164 | 53% |
|  |  | P1 | 3144 | 39 | 180 | 50% | 3140 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2815 | 28 | 394 | 47% | 2840 | 40% |
|  |  | P1 | 2855 | 39 | 198 | 52% | 2836 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3164 | 35 | 220 | 46% | 3194 | 56% |
|  |  | E1 | 3193 | 30 | 312 | 47% | 3213 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3156 | 34 | 248 | 52% | 3137 | 49% |
|  |  | E1 | 3090 | 31 | 300 | 48% | 3109 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2782 | 41 | 192 | 46% | 2819 | 35% |
|  |  | E1 | 2734 | 30 | 382 | 46% | 2772 | 31% |