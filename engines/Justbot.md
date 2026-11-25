# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3376<sub>(+368) | 3580<sub>(+286) | 3623<sub>(+268) |  |
| 0.3.0 | 2026-07-19 | 3008 | 3294 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3395<sub>(+359) | 3545<sub>(+255) | 3565<sub>(+229) |  |
| 0.3.0 | 2026-07-19 | 3036 | 3290 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3382<sub>(+84) | 3542<sub>(+86) | 3552<sub>(+28) |  |
| 0.4.0 | 2026-08-11 | 3298<sub>(+231) | 3456<sub>(+178) | 3524<sub>(+192) |  |
| 0.3.0 | 2026-07-19 | 3067<sub>(+484) | 3278<sub>(+380) | 3332<sub>(+365) |  |
| 0.2.0 | 2026-06-24 | 2583<sub>(+555) | 2898<sub>(+577) | 2967<sub>(+550) |  |
| 0.1.0 | 2026-06-09 | 2028 | 2321 | 2417 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:39:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3008, 3376]
  line "E1: LTC (60.0+0.60s)" [3294, 3580]
  line "E1: VLTC (2m24s+1.12s)" [3355, 3623]
  line "P1: STC (8.0+0.08s)" [3036, 3395]
  line "P1: LTC (60.0+0.60s)" [3290, 3545]
  line "P1: VLTC (2m24s+1.12s)" [3336, 3565]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0", "0.5.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "T1: STC (8.0+0.08s)" [2028, 2583, 3067, 3298, 3382]
  line "T1: LTC (60.0+0.60s)" [2321, 2898, 3278, 3456, 3542]
  line "T1: VLTC (2m24s+1.12s)" [2417, 2967, 3332, 3524, 3552]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3552 | 36 | 178 | 52% | 3542 | 88% |
|  |  | P1 | 3565 | 45 | 116 | 53% | 3540 | 79% |
|  |  | E1 | 3623 | 31 | 242 | 50% | 3618 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3542 | 31 | 244 | 55% | 3511 | 83% |
|  |  | P1 | 3545 | 35 | 188 | 53% | 3526 | 83% |
|  |  | E1 | 3580 | 30 | 264 | 51% | 3575 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3382 | 36 | 194 | 53% | 3364 | 74% |
|  |  | P1 | 3395 | 38 | 174 | 51% | 3386 | 74% |
|  |  | E1 | 3376 | 27 | 340 | 50% | 3372 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3524 | 81 | 36 | 56% | 3482 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 66 | 56 | 51% | 3445 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 59 | 76 | 47% | 3316 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3332 | 26 | 376 | 53% | 3310 | 65% |
|  |  | P1 | 3336 | 36 | 208 | 51% | 3328 | 62% |
|  |  | E1 | 3355 | 27 | 350 | 50% | 3352 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3278 | 27 | 352 | 50% | 3275 | 68% |
|  |  | P1 | 3290 | 32 | 252 | 50% | 3293 | 70% |
|  |  | E1 | 3294 | 28 | 340 | 50% | 3297 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 27 | 384 | 51% | 3059 | 50% |
|  |  | P1 | 3036 | 34 | 242 | 48% | 3062 | 51% |
|  |  | E1 | 3008 | 27 | 400 | 45% | 3043 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 37 | 212 | 50% | 2957 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2898 | 32 | 296 | 47% | 2917 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2583 | 36 | 252 | 46% | 2622 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2417 | 36 | 278 | 49% | 2438 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 35 | 284 | 49% | 2327 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2028 | 37 | 266 | 48% | 2041 | 21% |