# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2789<sub>(-72) | 3147<sub>(-3) | 3248<sub>(+27) |  |
| 2.3.0 | 2026-11-08 | 2861<sub>(+58) | 3150<sub>(-1) | 3221<sub>(+3) |  |
| 2.2.0 | 2026-11-07 | 2803<sub>(+4) | 3151<sub>(+16) | 3218<sub>(-30) |  |
| 2.1.0 | 2026-10-31 | 2799<sub>(-21) | 3135<sub>(-42) | 3248<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2820<sub>(+82) | 3177<sub>(+81) | 3205<sub>(+8) |  |
| 0.13.593 | 2026-06-30 | 2738 | 3096 | 3197 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2776<sub>(-14) | 3148<sub>(+38) | 3190<sub>(-1) |  |
| 2.3.0 | 2026-11-08 | 2790<sub>(+10) | 3110<sub>(-25) | 3191<sub>(+10) |  |
| 2.2.0 | 2026-11-07 | 2780<sub>(-5) | 3135<sub>(0) | 3181<sub>(-8) |  |
| 2.1.0 | 2026-10-31 | 2785<sub>(-42) | 3135<sub>(+18) | 3189<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2827<sub>(+73) | 3117<sub>(-12) | 3208<sub>(+68) |  |
| 0.13.593 | 2026-06-30 | 2754 | 3129 | 3140 |  |
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

Generated: 2026-11-16 05:40:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2738, 2820, 2799, 2803, 2861, 2789]
  line "E1: LTC (60.0+0.60s)" [3096, 3177, 3135, 3151, 3150, 3147]
  line "E1: VLTC (2m24s+1.12s)" [3197, 3205, 3248, 3218, 3221, 3248]
  line "P1: STC (8.0+0.08s)" [2754, 2827, 2785, 2780, 2790, 2776]
  line "P1: LTC (60.0+0.60s)" [3129, 3117, 3135, 3135, 3110, 3148]
  line "P1: VLTC (2m24s+1.12s)" [3140, 3208, 3189, 3181, 3191, 3190]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3190 | 38 | 184 | 49% | 3197 | 60% |
|  |  | E1 | 3248 | 30 | 292 | 51% | 3237 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3148 | 44 | 140 | 49% | 3158 | 60% |
|  |  | E1 | 3147 | 30 | 308 | 52% | 3129 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2776 | 48 | 140 | 49% | 2788 | 34% |
|  |  | E1 | 2789 | 32 | 314 | 47% | 2811 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3221 | 35 | 212 | 49% | 3232 | 62% |
|  |  | P1 | 3191 | 43 | 144 | 48% | 3205 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3110 | 37 | 198 | 52% | 3092 | 58% |
|  |  | E1 | 3150 | 32 | 266 | 46% | 3179 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2790 | 34 | 258 | 45% | 2830 | 41% |
|  |  | E1 | 2861 | 31 | 308 | 48% | 2880 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3181 | 38 | 178 | 53% | 3160 | 63% |
|  |  | E1 | 3218 | 32 | 262 | 51% | 3214 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3135 | 48 | 116 | 48% | 3150 | 60% |
|  |  | E1 | 3151 | 32 | 280 | 53% | 3129 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2780 | 50 | 126 | 51% | 2769 | 36% |
|  |  | E1 | 2803 | 32 | 292 | 53% | 2776 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3189 | 34 | 232 | 47% | 3208 | 64% |
|  |  | E1 | 3248 | 28 | 340 | 53% | 3225 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3135 | 41 | 152 | 49% | 3140 | 63% |
|  |  | E1 | 3135 | 29 | 344 | 54% | 3105 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2785 | 38 | 212 | 45% | 2831 | 40% |
|  |  | E1 | 2799 | 37 | 228 | 49% | 2807 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3208 | 40 | 160 | 50% | 3212 | 66% |
|  |  | E1 | 3205 | 34 | 232 | 50% | 3202 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3117 | 39 | 180 | 50% | 3114 | 58% |
|  |  | E1 | 3177 | 32 | 276 | 51% | 3168 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2820 | 28 | 394 | 47% | 2846 | 40% |
|  |  | P1 | 2827 | 39 | 198 | 52% | 2808 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3140 | 35 | 220 | 46% | 3170 | 56% |
|  |  | E1 | 3197 | 30 | 312 | 47% | 3217 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3129 | 34 | 248 | 52% | 3110 | 49% |
|  |  | E1 | 3096 | 31 | 300 | 48% | 3114 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2754 | 41 | 192 | 46% | 2790 | 35% |
|  |  | E1 | 2738 | 30 | 382 | 46% | 2776 | 31% |