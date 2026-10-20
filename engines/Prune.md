# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3263 | 3515 | 3572 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3363 | 3603 | 3656 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3263<sub>(+158) | 3457<sub>(+122) | 3518<sub>(+123) |  |
| 3.2.1 | 2026-02-24 | 3105<sub>(+189) | 3335<sub>(+164) | 3395<sub>(+178) |  |
| 3.1.0 | 2026-01-10 | 2916<sub>(+269) | 3171<sub>(+267) | 3217<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2647<sub>(-45) | 2904<sub>(-12) | 3016<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2692<sub>(+159) | 2916<sub>(+127) | 3031<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2533<sub>(+49) | 2789<sub>(-6) | 2878<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2484<sub>(-53) | 2795<sub>(+30) | 2878<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2537 | 2765 | 2831 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A4.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-20 04:41:58

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "T1: STC (8.0+0.08s)" [2537, 2484, 2533, 2692, 2647, 2916, 3105, 3263]
  line "T1: LTC (60.0+0.60s)" [2765, 2795, 2789, 2916, 2904, 3171, 3335, 3457]
  line "T1: VLTC (2m24s+1.12s)" [2831, 2878, 2878, 3031, 3016, 3217, 3395, 3518]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3656 | 38 | 168 | 48% | 3669 | 80% |
|  |  | E1 | 3572 | 29 | 284 | 49% | 3583 | 80% |
|  |  | T1 | 3518 | 24 | 400 | 50% | 3518 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3515 | 32 | 238 | 50% | 3514 | 72% |
|  |  | T1 | 3457 | 24 | 418 | 51% | 3451 | 75% |
|  |  | P1 | 3603 | 37 | 174 | 49% | 3609 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3263 | 29 | 324 | 50% | 3264 | 61% |
|  |  | T1 | 3263 | 28 | 336 | 51% | 3258 | 65% |
|  |  | P1 | 3363 | 35 | 212 | 50% | 3364 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3395 | 24 | 410 | 50% | 3393 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3335 | 25 | 398 | 52% | 3321 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3105 | 24 | 482 | 51% | 3087 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3217 | 32 | 284 | 51% | 3212 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3171 | 31 | 288 | 52% | 3160 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2916 | 33 | 276 | 51% | 2897 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3016 | 35 | 236 | 48% | 3032 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2904 | 36 | 236 | 52% | 2892 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2647 | 39 | 212 | 47% | 2676 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3031 | 72 | 56 | 57% | 2977 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2916 | 66 | 72 | 49% | 2931 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2692 | 90 | 40 | 55% | 2650 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2878 | 54 | 108 | 49% | 2893 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 54 | 108 | 45% | 2850 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2533 | 55 | 118 | 40% | 2647 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2878 | 95 | 32 | 50% | 2877 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2795 | 64 | 72 | 47% | 2820 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2484 | 60 | 92 | 48% | 2499 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 53 | 108 | 50% | 2827 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2765 | 51 | 112 | 51% | 2757 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2537 | 53 | 116 | 46% | 2596 | 34% |