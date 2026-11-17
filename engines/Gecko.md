# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2610<sub>(+13) | 2985<sub>(+66) | 3040<sub>(+27) |  |
| 0.35 | 2026-05-13 | 2597 | 2919 | 3013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2573<sub>(+9) | 2931<sub>(+84) | 3020<sub>(+63) |  |
| 0.35 | 2026-05-13 | 2564 | 2847 | 2957 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2676<sub>(+57) | 2988<sub>(+33) | 3058<sub>(+22) |  |
| 0.35 | 2026-05-13 | 2619<sub>(+112) | 2955<sub>(+71) | 3036<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2507<sub>(+18) | 2884<sub>(+121) | 2935<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2489<sub>(+89) | 2763<sub>(+97) | 2842<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2400<sub>(+517) | 2666<sub>(+595) | 2726<sub>(+565) |  |
| 0.08 | 2026-02-05 | 1883 | 2071 | 2161 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:38:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.35", "0.40"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2597, 2610]
  line "E1: LTC (60.0+0.60s)" [2919, 2985]
  line "E1: VLTC (2m24s+1.12s)" [3013, 3040]
  line "P1: STC (8.0+0.08s)" [2564, 2573]
  line "P1: LTC (60.0+0.60s)" [2847, 2931]
  line "P1: VLTC (2m24s+1.12s)" [2957, 3020]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "T1: STC (8.0+0.08s)" [1883, 2400, 2489, 2507, 2619, 2676]
  line "T1: LTC (60.0+0.60s)" [2071, 2666, 2763, 2884, 2955, 2988]
  line "T1: VLTC (2m24s+1.12s)" [2161, 2726, 2842, 2935, 3036, 3058]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3058 | 27 | 394 | 52% | 3043 | 44% |
|  |  | P1 | 3020 | 34 | 264 | 51% | 3002 | 41% |
|  |  | E1 | 3040 | 29 | 394 | 51% | 2993 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2931 | 35 | 262 | 50% | 2919 | 38% |
|  |  | E1 | 2985 | 27 | 454 | 53% | 2921 | 35% |
|  |  | T1 | 2988 | 27 | 422 | 49% | 2994 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2573 | 33 | 320 | 45% | 2627 | 24% |
|  |  | E1 | 2610 | 29 | 430 | 47% | 2637 | 23% |
|  |  | T1 | 2676 | 26 | 484 | 49% | 2685 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3036 | 28 | 388 | 51% | 3027 | 45% |
|  |  | P1 | 2957 | 82 | 56 | 52% | 2913 | 29% |
|  |  | E1 | 3013 | 57 | 92 | 45% | 3054 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2955 | 30 | 324 | 49% | 2965 | 49% |
|  |  | P1 | 2847 | 75 | 52 | 50% | 2851 | 50% |
|  |  | E1 | 2919 | 67 | 78 | 47% | 2955 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2619 | 31 | 340 | 50% | 2620 | 31% |
|  |  | P1 | 2564 | 74 | 64 | 42% | 2657 | 28% |
|  |  | E1 | 2597 | 56 | 116 | 57% | 2475 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2935 | 32 | 304 | 51% | 2928 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2884 | 30 | 336 | 49% | 2893 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2507 | 36 | 280 | 50% | 2503 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2842 | 31 | 328 | 51% | 2836 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2763 | 32 | 312 | 50% | 2763 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2489 | 31 | 356 | 51% | 2481 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2726 | 36 | 236 | 55% | 2674 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2666 | 36 | 228 | 57% | 2603 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2400 | 37 | 236 | 55% | 2354 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2161 | 28 | 392 | 46% | 2211 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2071 | 29 | 384 | 48% | 2099 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1883 | 31 | 356 | 48% | 1908 | 31% |