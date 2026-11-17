# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2799<sub>(-55) | 3148<sub>(-6) | 3249<sub>(+25) |  |
| 2.3.0 | 2026-11-08 | 2854<sub>(+50) | 3154<sub>(+2) | 3224<sub>(+4) |  |
| 2.2.0 | 2026-11-07 | 2804<sub>(+4) | 3152<sub>(+17) | 3220<sub>(-29) |  |
| 2.1.0 | 2026-10-31 | 2800<sub>(-22) | 3135<sub>(-42) | 3249<sub>(+44) |  |
| 1.0.0 | 2026-10-15 | 2822<sub>(+83) | 3177<sub>(+80) | 3205<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2739 | 3097 | 3198 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2782<sub>(-15) | 3148<sub>(+34) | 3194<sub>(+1) |  |
| 2.3.0 | 2026-11-08 | 2797<sub>(+12) | 3114<sub>(-22) | 3193<sub>(+11) |  |
| 2.2.0 | 2026-11-07 | 2785<sub>(-7) | 3136<sub>(0) | 3182<sub>(-7) |  |
| 2.1.0 | 2026-10-31 | 2792<sub>(-40) | 3136<sub>(+16) | 3189<sub>(-20) |  |
| 1.0.0 | 2026-10-15 | 2832<sub>(+71) | 3120<sub>(-13) | 3209<sub>(+68) |  |
| 0.13.593 | 2026-06-30 | 2761 | 3133 | 3141 |  |
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

Generated: 2026-11-17 05:41:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2739, 2822, 2800, 2804, 2854, 2799]
  line "E1: LTC (60.0+0.60s)" [3097, 3177, 3135, 3152, 3154, 3148]
  line "E1: VLTC (2m24s+1.12s)" [3198, 3205, 3249, 3220, 3224, 3249]
  line "P1: STC (8.0+0.08s)" [2761, 2832, 2792, 2785, 2797, 2782]
  line "P1: LTC (60.0+0.60s)" [3133, 3120, 3136, 3136, 3114, 3148]
  line "P1: VLTC (2m24s+1.12s)" [3141, 3209, 3189, 3182, 3193, 3194]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3194 | 37 | 200 | 49% | 3200 | 60% |
|  |  | E1 | 3249 | 30 | 292 | 51% | 3240 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3148 | 43 | 144 | 48% | 3160 | 60% |
|  |  | E1 | 3148 | 30 | 308 | 52% | 3131 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2782 | 48 | 140 | 49% | 2793 | 34% |
|  |  | E1 | 2799 | 31 | 330 | 48% | 2812 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3224 | 35 | 212 | 49% | 3235 | 62% |
|  |  | P1 | 3193 | 43 | 144 | 48% | 3206 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3154 | 31 | 278 | 47% | 3179 | 58% |
|  |  | P1 | 3114 | 37 | 198 | 52% | 3096 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2797 | 34 | 266 | 45% | 2834 | 41% |
|  |  | E1 | 2854 | 31 | 316 | 47% | 2880 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3182 | 38 | 178 | 53% | 3162 | 63% |
|  |  | E1 | 3220 | 32 | 262 | 51% | 3214 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3136 | 48 | 116 | 48% | 3151 | 60% |
|  |  | E1 | 3152 | 32 | 280 | 53% | 3131 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2785 | 50 | 126 | 51% | 2774 | 36% |
|  |  | E1 | 2804 | 32 | 292 | 53% | 2777 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3189 | 34 | 232 | 47% | 3209 | 64% |
|  |  | E1 | 3249 | 28 | 340 | 53% | 3227 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3136 | 41 | 152 | 49% | 3141 | 63% |
|  |  | E1 | 3135 | 29 | 344 | 54% | 3105 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2792 | 38 | 212 | 45% | 2838 | 40% |
|  |  | E1 | 2800 | 37 | 228 | 49% | 2808 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3209 | 40 | 160 | 50% | 3212 | 66% |
|  |  | E1 | 3205 | 34 | 232 | 50% | 3204 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3120 | 39 | 180 | 50% | 3117 | 58% |
|  |  | E1 | 3177 | 32 | 276 | 51% | 3170 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2832 | 39 | 198 | 52% | 2813 | 45% |
|  |  | E1 | 2822 | 28 | 394 | 47% | 2846 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3141 | 35 | 220 | 46% | 3171 | 56% |
|  |  | E1 | 3198 | 30 | 312 | 47% | 3218 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3133 | 34 | 248 | 52% | 3113 | 49% |
|  |  | E1 | 3097 | 31 | 300 | 48% | 3116 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2761 | 41 | 192 | 46% | 2797 | 35% |
|  |  | E1 | 2739 | 30 | 382 | 46% | 2777 | 31% |