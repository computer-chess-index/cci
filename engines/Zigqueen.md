# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3367<sub>(+37) | 3622<sub>(+62) | 3661<sub>(+36) |  |
| 6.5.0 | 2026-10-21 | 3330<sub>(+72) | 3560<sub>(+49) | 3625<sub>(+20) |  |
| 6.4.0 | 2026-10-10 | 3258<sub>(+26) | 3511<sub>(+5) | 3605<sub>(+7) |  |
| 6.3.0 | 2026-09-25 | 3232<sub>(+190) | 3506<sub>(+89) | 3598<sub>(+138) |  |
| 6.1.1 | 2026-09-03 | 3042 | 3417 | 3460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3393<sub>(+10) | 3502<sub>(-57) | 3605<sub>(+21) |  |
| 6.5.0 | 2026-10-21 | 3383<sub>(+74) | 3559<sub>(+79) | 3584<sub>(+51) |  |
| 6.4.0 | 2026-10-10 | 3309<sub>(+180) | 3480<sub>(+85) | 3533<sub>(+77) |  |
| 6.1.1 | 2026-09-03 | 3129 | 3395 | 3456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-09-25 | 3258<sub>(+85) | 3487<sub>(+55) | 3525<sub>(+47) |  |
| 6.1.1 | 2026-09-03 | 3173<sub>(-27) | 3432<sub>(+81) | 3478<sub>(-13) |  |
| 6.1.0 | 2026-08-31 | 3200<sub>(+75) | 3351<sub>(-12) | 3491<sub>(+88) |  |
| 6.0.0 | 2026-08-19 | 3125<sub>(+116) | 3363<sub>(+37) | 3403<sub>(+17) |  |
| 5.8.3 | 2026-07-25 | 3009 | 3326 | 3386 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:44:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.3.0", "6.4.0", "6.5.0", "6.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3042, 3232, 3258, 3330, 3367]
  line "E1: LTC (60.0+0.60s)" [3417, 3506, 3511, 3560, 3622]
  line "E1: VLTC (2m24s+1.12s)" [3460, 3598, 3605, 3625, 3661]
  line "P1: STC (8.0+0.08s)" [3129, 3309, 3383, 3393]
  line "P1: LTC (60.0+0.60s)" [3395, 3480, 3559, 3502]
  line "P1: VLTC (2m24s+1.12s)" [3456, 3533, 3584, 3605]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1", "6.3.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "T1: STC (8.0+0.08s)" [3009, 3125, 3200, 3173, 3258]
  line "T1: LTC (60.0+0.60s)" [3326, 3363, 3351, 3432, 3487]
  line "T1: VLTC (2m24s+1.12s)" [3386, 3403, 3491, 3478, 3525]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3605 | 55 | 72 | 50% | 3603 | 94% |
|  |  | E1 | 3661 | 43 | 124 | 52% | 3650 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3502 | 80 | 36 | 46% | 3530 | 81% |
|  |  | E1 | 3622 | 39 | 152 | 53% | 3603 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3367 | 43 | 132 | 51% | 3360 | 74% |
|  |  | P1 | 3393 | 69 | 48 | 46% | 3421 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3584 | 50 | 92 | 50% | 3583 | 87% |
|  |  | E1 | 3625 | 37 | 172 | 52% | 3611 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3559 | 50 | 92 | 49% | 3560 | 86% |
|  |  | E1 | 3560 | 37 | 170 | 52% | 3548 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3383 | 49 | 100 | 53% | 3362 | 80% |
|  |  | E1 | 3330 | 36 | 192 | 52% | 3316 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3605 | 44 | 120 | 53% | 3587 | 85% |
|  |  | P1 | 3533 | 56 | 72 | 54% | 3505 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3511 | 47 | 108 | 50% | 3505 | 82% |
|  |  | P1 | 3480 | 65 | 56 | 56% | 3438 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3258 | 32 | 250 | 56% | 3212 | 69% |
|  |  | P1 | 3309 | 51 | 100 | 55% | 3270 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  |  | E1 | 3598 | 55 | 76 | 46% | 3623 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  |  | E1 | 3506 | 83 | 36 | 49% | 3514 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
|  |  | E1 | 3232 | 76 | 44 | 44% | 3272 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3456 | 57 | 78 | 58% | 3353 | 73% |
|  |  | E1 | 3460 | 49 | 124 | 59% | 3274 | 57% |
|  |  | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3395 | 68 | 78 | 70% | 2984 | 47% |
|  |  | E1 | 3417 | 53 | 116 | 68% | 3036 | 55% |
|  |  | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3129 | 73 | 54 | 56% | 3052 | 56% |
|  |  | E1 | 3042 | 57 | 88 | 54% | 3006 | 58% |
|  |  | T1 | 3173 | 34 | 240 | 52% | 3160 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3491 | 41 | 140 | 53% | 3472 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3351 | 47 | 112 | 49% | 3357 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 44 | 136 | 49% | 3209 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3403 | 45 | 120 | 50% | 3399 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3363 | 39 | 160 | 50% | 3362 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3125 | 45 | 132 | 50% | 3123 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3386 | 33 | 228 | 48% | 3399 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3326 | 40 | 160 | 51% | 3318 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3009 | 38 | 188 | 54% | 2977 | 57% |