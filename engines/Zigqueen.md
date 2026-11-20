# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3372<sub>(+42) | 3619<sub>(+60) | 3661<sub>(+36) |  |
| 6.5.0 | 2026-10-21 | 3330<sub>(+72) | 3559<sub>(+48) | 3625<sub>(+22) |  |
| 6.4.0 | 2026-10-10 | 3258<sub>(+216) | 3511<sub>(+93) | 3603<sub>(+143) |  |
| 6.1.1 | 2026-09-03 | 3042 | 3418 | 3460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3413<sub>(+34) | 3499<sub>(-60) | 3602<sub>(+20) |  |
| 6.5.0 | 2026-10-21 | 3379<sub>(+74) | 3559<sub>(+80) | 3582<sub>(+50) |  |
| 6.4.0 | 2026-10-10 | 3305<sub>(+182) | 3479<sub>(+88) | 3532<sub>(+77) |  |
| 6.1.1 | 2026-09-03 | 3123 | 3391 | 3455 |  |
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

Generated: 2026-11-20 05:44:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.4.0", "6.5.0", "6.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3042, 3258, 3330, 3372]
  line "E1: LTC (60.0+0.60s)" [3418, 3511, 3559, 3619]
  line "E1: VLTC (2m24s+1.12s)" [3460, 3603, 3625, 3661]
  line "P1: STC (8.0+0.08s)" [3123, 3305, 3379, 3413]
  line "P1: LTC (60.0+0.60s)" [3391, 3479, 3559, 3499]
  line "P1: VLTC (2m24s+1.12s)" [3455, 3532, 3582, 3602]
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
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3661 | 44 | 116 | 52% | 3650 | 91% |
|  |  | P1 | 3602 | 65 | 52 | 50% | 3600 | 92% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3499 | 97 | 24 | 44% | 3540 | 79% |
|  |  | E1 | 3619 | 45 | 116 | 53% | 3595 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3413 | 88 | 28 | 48% | 3425 | 89% |
|  |  | E1 | 3372 | 47 | 112 | 52% | 3357 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3582 | 50 | 92 | 50% | 3582 | 87% |
|  |  | E1 | 3625 | 37 | 172 | 52% | 3611 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3559 | 52 | 84 | 50% | 3557 | 86% |
|  |  | E1 | 3559 | 37 | 170 | 52% | 3548 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3379 | 49 | 100 | 53% | 3357 | 80% |
|  |  | E1 | 3330 | 36 | 192 | 52% | 3317 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 56 | 72 | 54% | 3503 | 89% |
|  |  | E1 | 3603 | 44 | 120 | 53% | 3586 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3479 | 65 | 56 | 56% | 3436 | 80% |
|  |  | E1 | 3511 | 47 | 108 | 50% | 3505 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3305 | 51 | 100 | 55% | 3266 | 62% |
|  |  | E1 | 3258 | 32 | 250 | 56% | 3212 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  |  | P1 | 3455 | 57 | 78 | 58% | 3351 | 73% |
|  |  | E1 | 3460 | 49 | 124 | 59% | 3274 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  |  | P1 | 3391 | 68 | 78 | 70% | 2978 | 47% |
|  |  | E1 | 3418 | 53 | 116 | 68% | 3038 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3173 | 34 | 240 | 52% | 3160 | 57% |
|  |  | P1 | 3123 | 73 | 54 | 56% | 3046 | 56% |
|  |  | E1 | 3042 | 57 | 88 | 54% | 3006 | 58% |
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