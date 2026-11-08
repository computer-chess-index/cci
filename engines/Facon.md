# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2736<sub>(+326) | 3085<sub>(+276) | 3135<sub>(+214) |  |
| 1.7 | 2026-10-04 | 2410<sub>(+293) | 2809<sub>(+399) | 2921<sub>(+423) |  |
| 1.5 | 2026-05-26 | 2117 | 2410 | 2498 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2786<sub>(+394) | 3090<sub>(+254) | 3233<sub>(+290) |  |
| 1.7 | 2026-10-04 | 2392<sub>(+213) | 2836<sub>(+352) | 2943<sub>(+447) |  |
| 1.5 | 2026-05-26 | 2179 | 2484 | 2496 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2381<sub>(+216) | 2624<sub>(+220) | 2757<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+156) | 2404<sub>(+106) | 2511<sub>(+154) |  |
| 1.4 | 2026-04-25 | 2009<sub>(+489) | 2298<sub>(+436) | 2357<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1520 | 1862 | 1976 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-08 05:38:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2100 --> 3300
  line "E1: STC (8.0+0.08s)" [2117, 2410, 2736]
  line "E1: LTC (60.0+0.60s)" [2410, 2809, 3085]
  line "E1: VLTC (2m24s+1.12s)" [2498, 2921, 3135]
  line "P1: STC (8.0+0.08s)" [2179, 2392, 2786]
  line "P1: LTC (60.0+0.60s)" [2484, 2836, 3090]
  line "P1: VLTC (2m24s+1.12s)" [2496, 2943, 3233]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "T1: STC (8.0+0.08s)" [1520, 2009, 2165, 2381]
  line "T1: LTC (60.0+0.60s)" [1862, 2298, 2404, 2624]
  line "T1: VLTC (2m24s+1.12s)" [1976, 2357, 2511, 2757]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3233 | 41 | 180 | 48% | 3252 | 46% |
|  |  | E1 | 3135 | 34 | 254 | 52% | 3117 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3090 | 45 | 146 | 53% | 3063 | 47% |
|  |  | E1 | 3085 | 34 | 270 | 51% | 3073 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2786 | 48 | 136 | 51% | 2774 | 40% |
|  |  | E1 | 2736 | 38 | 220 | 55% | 2692 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2943 | 39 | 206 | 49% | 2948 | 37% |
|  |  | E1 | 2921 | 35 | 262 | 51% | 2915 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2836 | 37 | 236 | 56% | 2753 | 37% |
|  |  | E1 | 2809 | 36 | 262 | 50% | 2808 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2392 | 40 | 204 | 53% | 2380 | 30% |
|  |  | E1 | 2410 | 34 | 292 | 53% | 2387 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2496 | 49 | 144 | 48% | 2523 | 24% |
|  |  | E1 | 2498 | 41 | 208 | 51% | 2493 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2484 | 47 | 154 | 44% | 2568 | 31% |
|  |  | E1 | 2410 | 46 | 172 | 44% | 2500 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
|  |  | P1 | 2179 | 50 | 144 | 48% | 2201 | 19% |
|  |  | E1 | 2117 | 36 | 286 | 49% | 2110 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |