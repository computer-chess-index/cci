# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.0 | 2026-10-21 | 3348<sub>(+5) | 3556<sub>(-35) | 3607<sub>(-49) |  |
| 6.5.0 | 2026-10-21 | 3343<sub>(+67) | 3591<sub>(+53) | 3656<sub>(+26) |  |
| 6.4.0 | 2026-10-10 | 3276<sub>(+218) | 3538<sub>(+95) | 3630<sub>(+144) |  |
| 6.1.1 | 2026-09-03 | 3058 | 3443 | 3486 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.0 | 2026-10-21 | 3521<sub>(+70) | 3717<sub>(+102) | 3725<sub>(+52) |  |
| 6.4.0 | 2026-10-10 | 3451<sub>(+191) | 3615<sub>(+81) | 3673<sub>(+74) |  |
| 6.1.1 | 2026-09-03 | 3260 | 3534 | 3599 |  |
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

Generated: 2026-10-23 04:45:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.4.0", "6.5.0", "6.5.0"]
  y-axis "Elo Rating" 3000 --> 3800
  line "E1: STC (8.0+0.08s)" [3058, 3276, 3348, 3343]
  line "E1: LTC (60.0+0.60s)" [3443, 3538, 3556, 3591]
  line "E1: VLTC (2m24s+1.12s)" [3486, 3630, 3607, 3656]
  line "P1: STC (8.0+0.08s)" [3260, 3451, 3521]
  line "P1: LTC (60.0+0.60s)" [3534, 3615, 3717]
  line "P1: VLTC (2m24s+1.12s)" [3599, 3673, 3725]
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
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3607 | 85 | 32 | 48% | 3621 | 78% |
|  |  | P1 | 3725 | 97 | 24 | 52% | 3710 | 79% |
|  |  | E1 | 3656 | 43 | 128 | 53% | 3636 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3556 | 84 | 32 | 52% | 3545 | 84% |
|  |  | P1 | 3717 | 107 | 20 | 53% | 3695 | 75% |
|  |  | E1 | 3591 | 43 | 128 | 53% | 3572 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3348 | 80 | 40 | 58% | 3298 | 65% |
|  |  | P1 | 3521 | 98 | 24 | 56% | 3480 | 79% |
|  |  | E1 | 3343 | 45 | 120 | 53% | 3326 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3673 | 56 | 72 | 54% | 3646 | 89% |
|  |  | E1 | 3630 | 45 | 112 | 52% | 3615 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3615 | 70 | 48 | 56% | 3573 | 79% |
|  |  | E1 | 3538 | 52 | 88 | 51% | 3529 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3451 | 51 | 100 | 55% | 3411 | 62% |
|  |  | E1 | 3276 | 33 | 238 | 57% | 3225 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  |  | P1 | 3599 | 57 | 78 | 58% | 3492 | 73% |
|  |  | E1 | 3486 | 49 | 124 | 59% | 3297 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  |  | P1 | 3534 | 68 | 78 | 70% | 3097 | 47% |
|  |  | E1 | 3443 | 53 | 116 | 68% | 3060 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3173 | 34 | 240 | 52% | 3160 | 57% |
|  |  | P1 | 3260 | 73 | 54 | 56% | 3178 | 56% |
|  |  | E1 | 3058 | 57 | 88 | 54% | 3023 | 58% |
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