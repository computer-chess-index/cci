# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2799<sub>(-54) | 3144<sub>(-6) | 3248<sub>(+28) |  |
| 2.3.0 | 2026-11-08 | 2853<sub>(+52) | 3150<sub>(+2) | 3220<sub>(+3) |  |
| 2.2.0 | 2026-11-07 | 2801<sub>(+4) | 3148<sub>(+16) | 3217<sub>(-28) |  |
| 2.1.0 | 2026-10-31 | 2797<sub>(-22) | 3132<sub>(-42) | 3245<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2819<sub>(+81) | 3174<sub>(+80) | 3202<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2738 | 3094 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2796<sub>(-12) | 3158<sub>(+34) | 3200<sub>(-2) |  |
| 2.3.0 | 2026-11-08 | 2808<sub>(+12) | 3124<sub>(-20) | 3202<sub>(+11) |  |
| 2.2.0 | 2026-11-07 | 2796<sub>(-7) | 3144<sub>(-2) | 3191<sub>(-7) |  |
| 2.1.0 | 2026-10-31 | 2803<sub>(-41) | 3146<sub>(+17) | 3198<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2844<sub>(+74) | 3129<sub>(-12) | 3217<sub>(+66) |  |
| 0.13.593 | 2026-06-30 | 2770 | 3141 | 3151 |  |
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

Generated: 2026-11-20 05:40:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2738, 2819, 2797, 2801, 2853, 2799]
  line "E1: LTC (60.0+0.60s)" [3094, 3174, 3132, 3148, 3150, 3144]
  line "E1: VLTC (2m24s+1.12s)" [3195, 3202, 3245, 3217, 3220, 3248]
  line "P1: STC (8.0+0.08s)" [2770, 2844, 2803, 2796, 2808, 2796]
  line "P1: LTC (60.0+0.60s)" [3141, 3129, 3146, 3144, 3124, 3158]
  line "P1: VLTC (2m24s+1.12s)" [3151, 3217, 3198, 3191, 3202, 3200]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3200 | 36 | 212 | 49% | 3209 | 59% |
|  |  | E1 | 3248 | 29 | 308 | 51% | 3237 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3158 | 43 | 148 | 48% | 3168 | 59% |
|  |  | E1 | 3144 | 29 | 320 | 52% | 3128 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 44 | 164 | 50% | 2804 | 36% |
|  |  | E1 | 2799 | 31 | 350 | 47% | 2827 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3202 | 43 | 144 | 48% | 3214 | 59% |
|  |  | E1 | 3220 | 35 | 212 | 49% | 3231 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3150 | 31 | 278 | 47% | 3175 | 58% |
|  |  | P1 | 3124 | 37 | 198 | 52% | 3105 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2853 | 31 | 316 | 47% | 2878 | 41% |
|  |  | P1 | 2808 | 34 | 270 | 45% | 2846 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3191 | 38 | 178 | 53% | 3171 | 63% |
|  |  | E1 | 3217 | 32 | 262 | 51% | 3212 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3144 | 48 | 116 | 48% | 3159 | 60% |
|  |  | E1 | 3148 | 32 | 280 | 53% | 3127 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 50 | 126 | 51% | 2785 | 36% |
|  |  | E1 | 2801 | 32 | 292 | 53% | 2774 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3198 | 34 | 232 | 47% | 3217 | 64% |
|  |  | E1 | 3245 | 28 | 340 | 53% | 3222 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3146 | 41 | 152 | 49% | 3151 | 63% |
|  |  | E1 | 3132 | 29 | 344 | 54% | 3102 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2803 | 38 | 212 | 45% | 2849 | 40% |
|  |  | E1 | 2797 | 37 | 228 | 49% | 2805 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3217 | 40 | 160 | 50% | 3220 | 66% |
|  |  | E1 | 3202 | 34 | 232 | 50% | 3200 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3129 | 39 | 180 | 50% | 3127 | 58% |
|  |  | E1 | 3174 | 32 | 276 | 51% | 3167 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2844 | 39 | 198 | 52% | 2826 | 45% |
|  |  | E1 | 2819 | 28 | 394 | 47% | 2844 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3195 | 30 | 312 | 47% | 3216 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3151 | 35 | 220 | 46% | 3181 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3141 | 34 | 248 | 52% | 3123 | 49% |
|  |  | E1 | 3094 | 31 | 300 | 48% | 3112 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2770 | 41 | 192 | 46% | 2808 | 35% |
|  |  | E1 | 2738 | 30 | 382 | 46% | 2776 | 31% |