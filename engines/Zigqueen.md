# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3368<sub>(+43) | 3614<sub>(+59) | 3654<sub>(+35) |  |
| 6.5.0 | 2026-10-21 | 3325<sub>(+73) | 3555<sub>(+49) | 3619<sub>(+20) |  |
| 6.4.0 | 2026-10-10 | 3252<sub>(+216) | 3506<sub>(+93) | 3599<sub>(+143) |  |
| 6.1.1 | 2026-09-03 | 3036 | 3413 | 3456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3426<sub>(+51) | 3559<sub>(0) | 3600<sub>(+17) |  |
| 6.5.0 | 2026-10-21 | 3375<sub>(+74) | 3559<sub>(+83) | 3583<sub>(+54) |  |
| 6.4.0 | 2026-10-10 | 3301<sub>(+182) | 3476<sub>(+90) | 3529<sub>(+78) |  |
| 6.1.1 | 2026-09-03 | 3119 | 3386 | 3451 |  |
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

Generated: 2026-11-19 05:45:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.4.0", "6.5.0", "6.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3036, 3252, 3325, 3368]
  line "E1: LTC (60.0+0.60s)" [3413, 3506, 3555, 3614]
  line "E1: VLTC (2m24s+1.12s)" [3456, 3599, 3619, 3654]
  line "P1: STC (8.0+0.08s)" [3119, 3301, 3375, 3426]
  line "P1: LTC (60.0+0.60s)" [3386, 3476, 3559, 3559]
  line "P1: VLTC (2m24s+1.12s)" [3451, 3529, 3583, 3600]
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
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3600 | 74 | 40 | 50% | 3600 | 90% |
|  |  | E1 | 3654 | 51 | 84 | 52% | 3640 | 95% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3559 | 155 | 8 | 50% | 3559 | 100% |
|  |  | E1 | 3614 | 56 | 76 | 55% | 3579 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3426 | 116 | 16 | 50% | 3425 | 88% |
|  |  | E1 | 3368 | 52 | 92 | 53% | 3349 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 50 | 92 | 50% | 3583 | 87% |
|  |  | E1 | 3619 | 37 | 172 | 52% | 3606 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3559 | 52 | 84 | 50% | 3557 | 86% |
|  |  | E1 | 3555 | 37 | 170 | 52% | 3542 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3375 | 49 | 100 | 53% | 3353 | 80% |
|  |  | E1 | 3325 | 36 | 192 | 52% | 3312 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3529 | 56 | 72 | 54% | 3501 | 89% |
|  |  | E1 | 3599 | 44 | 120 | 53% | 3582 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3476 | 65 | 56 | 56% | 3433 | 80% |
|  |  | E1 | 3506 | 47 | 108 | 50% | 3499 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3301 | 51 | 100 | 55% | 3262 | 62% |
|  |  | E1 | 3252 | 32 | 250 | 56% | 3208 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3451 | 57 | 78 | 58% | 3347 | 73% |
|  |  | E1 | 3456 | 49 | 124 | 59% | 3270 | 57% |
|  |  | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3386 | 68 | 78 | 70% | 2974 | 47% |
|  |  | E1 | 3413 | 53 | 116 | 68% | 3033 | 55% |
|  |  | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3119 | 73 | 54 | 56% | 3042 | 56% |
|  |  | E1 | 3036 | 57 | 88 | 54% | 3002 | 58% |
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