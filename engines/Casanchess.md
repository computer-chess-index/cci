# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.2 | 2026-09-06 | 2379<sub>(+19) | 2746<sub>(+47) | 2807<sub>(+46) |  |
| 1.1 | 2026-08-15 | 2360 | 2699 | 2761 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.2 | 2026-09-06 | 2419<sub>(+65) | 2673<sub>(+1) | 2776<sub>(+77) |  |
| 1.1 | 2026-08-15 | 2354 | 2672 | 2699 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.2 | 2026-09-06 | 2475<sub>(+21) | 2711<sub>(-74) | 2830<sub>(-5) |  |
| 1.1 | 2026-08-15 | 2454<sub>(+104) | 2785<sub>(+151) | 2835<sub>(+90) |  |
| 1.0 | 2026-07-14 | 2350 | 2634 | 2745 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A1.1.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:36:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2360, 2379]
  line "E1: LTC (60.0+0.60s)" [2699, 2746]
  line "E1: VLTC (2m24s+1.12s)" [2761, 2807]
  line "P1: STC (8.0+0.08s)" [2354, 2419]
  line "P1: LTC (60.0+0.60s)" [2672, 2673]
  line "P1: VLTC (2m24s+1.12s)" [2699, 2776]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2350, 2454, 2475]
  line "T1: LTC (60.0+0.60s)" [2634, 2785, 2711]
  line "T1: VLTC (2m24s+1.12s)" [2745, 2835, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2830 | 36 | 230 | 50% | 2834 | 40% |
|  |  | P1 | 2776 | 34 | 256 | 49% | 2785 | 46% |
|  |  | E1 | 2807 | 26 | 468 | 47% | 2822 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2711 | 34 | 252 | 50% | 2709 | 46% |
|  |  | P1 | 2673 | 34 | 268 | 49% | 2684 | 45% |
|  |  | E1 | 2746 | 29 | 364 | 50% | 2724 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2475 | 36 | 236 | 51% | 2469 | 41% |
|  |  | P1 | 2419 | 37 | 236 | 50% | 2408 | 39% |
|  |  | E1 | 2379 | 27 | 430 | 45% | 2425 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2699 | 63 | 84 | 51% | 2661 | 44% |
|  |  | E1 | 2761 | 59 | 96 | 48% | 2774 | 33% |
|  |  | T1 | 2835 | 34 | 256 | 51% | 2831 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2672 | 65 | 76 | 50% | 2643 | 45% |
|  |  | E1 | 2699 | 55 | 110 | 56% | 2558 | 39% |
|  |  | T1 | 2785 | 32 | 284 | 51% | 2772 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2360 | 58 | 104 | 38% | 2493 | 36% |
|  |  | T1 | 2454 | 29 | 356 | 48% | 2475 | 43% |
|  |  | P1 | 2354 | 68 | 88 | 57% | 2157 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2745 | 32 | 326 | 60% | 2507 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2634 | 32 | 338 | 58% | 2471 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2350 | 32 | 352 | 62% | 2109 | 34% |