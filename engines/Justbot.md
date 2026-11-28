# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-25 | 3407<sub>(+35) | 3617<sub>(+45) | 3673<sub>(+56) |  |
| 0.5.0 | 2026-09-24 | 3372<sub>(+371) | 3572<sub>(+285) | 3617<sub>(+270) |  |
| 0.3.0 | 2026-07-19 | 3001 | 3287 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-25 | 3449<sub>(+54) | 3582<sub>(+37) | 3587<sub>(+20) |  |
| 0.5.0 | 2026-09-24 | 3395<sub>(+356) | 3545<sub>(+255) | 3567<sub>(+231) |  |
| 0.3.0 | 2026-07-19 | 3039 | 3290 | 3336 |  |
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

Generated: 2026-11-28 05:39:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3001, 3372, 3407]
  line "E1: LTC (60.0+0.60s)" [3287, 3572, 3617]
  line "E1: VLTC (2m24s+1.12s)" [3347, 3617, 3673]
  line "P1: STC (8.0+0.08s)" [3039, 3395, 3449]
  line "P1: LTC (60.0+0.60s)" [3290, 3545, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3336, 3567, 3587]
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
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3587 | 105 | 20 | 53% | 3567 | 85% |
|  |  | E1 | 3673 | 44 | 114 | 50% | 3671 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3582 | 91 | 28 | 54% | 3560 | 79% |
|  |  | E1 | 3617 | 60 | 64 | 53% | 3598 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3449 | 37 | 172 | 55% | 3418 | 78% |
|  |  | E1 | 3407 | 35 | 204 | 52% | 3394 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3617 | 31 | 246 | 51% | 3610 | 79% |
|  |  | T1 | 3552 | 36 | 178 | 52% | 3542 | 88% |
|  |  | P1 | 3567 | 45 | 116 | 53% | 3540 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3572 | 30 | 264 | 51% | 3567 | 81% |
|  |  | T1 | 3542 | 31 | 244 | 55% | 3511 | 83% |
|  |  | P1 | 3545 | 35 | 188 | 53% | 3526 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3382 | 36 | 194 | 53% | 3364 | 74% |
|  |  | P1 | 3395 | 38 | 174 | 51% | 3386 | 74% |
|  |  | E1 | 3372 | 27 | 360 | 51% | 3366 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3524 | 81 | 36 | 56% | 3482 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 66 | 56 | 51% | 3445 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 59 | 76 | 47% | 3316 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3347 | 27 | 350 | 50% | 3344 | 65% |
|  |  | T1 | 3332 | 26 | 376 | 53% | 3310 | 65% |
|  |  | P1 | 3336 | 36 | 208 | 51% | 3328 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3287 | 28 | 340 | 50% | 3290 | 63% |
|  |  | T1 | 3278 | 27 | 352 | 50% | 3275 | 68% |
|  |  | P1 | 3290 | 32 | 252 | 50% | 3293 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 27 | 384 | 51% | 3059 | 50% |
|  |  | P1 | 3039 | 34 | 242 | 48% | 3065 | 51% |
|  |  | E1 | 3001 | 27 | 400 | 45% | 3038 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 37 | 212 | 50% | 2957 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2898 | 32 | 296 | 47% | 2917 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2583 | 36 | 252 | 46% | 2622 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2417 | 36 | 278 | 49% | 2438 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 35 | 284 | 49% | 2327 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2028 | 37 | 266 | 48% | 2041 | 21% |