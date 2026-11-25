# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2596<sub>(+441) | 2885<sub>(+362) | 2979<sub>(+294) |  |
| 1.4.1 | 2026-04-26 | 2155 | 2523 | 2685 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2618<sub>(+358) | 2877<sub>(+298) | 2927<sub>(+282) |  |
| 1.4.1 | 2026-04-26 | 2260 | 2579 | 2645 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2674<sub>(+383) | 2871<sub>(+305) | 2938<sub>(+283) |  |
| 1.4.1 | 2026-04-26 | 2291<sub>(+23) | 2566<sub>(+67) | 2655<sub>(+63) |  |
| 1.4.0 | 2026-04-01 | 2268<sub>(+213) | 2499<sub>(+132) | 2592<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2055<sub>(+30) | 2367<sub>(+26) | 2392<sub>(+4) |  |
| 1.3.1 | 2026-03-10 | 2025<sub>(+154) | 2341<sub>(+112) | 2388<sub>(+133) |  |
| 1.3.0 | 2026-03-08 | 1871<sub>(+183) | 2229<sub>(+311) | 2255<sub>(+239) |  |
| 1.2.1 | 2026-03-07 | 1688 | 1918 | 2016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:37:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.1", "2.0.0"]
  y-axis "Elo Rating" 2100 --> 3000
  line "E1: STC (8.0+0.08s)" [2155, 2596]
  line "E1: LTC (60.0+0.60s)" [2523, 2885]
  line "E1: VLTC (2m24s+1.12s)" [2685, 2979]
  line "P1: STC (8.0+0.08s)" [2260, 2618]
  line "P1: LTC (60.0+0.60s)" [2579, 2877]
  line "P1: VLTC (2m24s+1.12s)" [2645, 2927]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 3000
  line "T1: STC (8.0+0.08s)" [1688, 1871, 2025, 2055, 2268, 2291, 2674]
  line "T1: LTC (60.0+0.60s)" [1918, 2229, 2341, 2367, 2499, 2566, 2871]
  line "T1: VLTC (2m24s+1.12s)" [2016, 2255, 2388, 2392, 2592, 2655, 2938]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2979 | 26 | 466 | 52% | 2954 | 39% |
|  |  | T1 | 2938 | 34 | 256 | 48% | 2950 | 43% |
|  |  | P1 | 2927 | 30 | 326 | 47% | 2947 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2885 | 28 | 396 | 47% | 2913 | 44% |
|  |  | T1 | 2871 | 29 | 352 | 48% | 2890 | 43% |
|  |  | P1 | 2877 | 31 | 330 | 49% | 2896 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2596 | 26 | 480 | 48% | 2619 | 31% |
|  |  | T1 | 2674 | 35 | 258 | 51% | 2661 | 36% |
|  |  | P1 | 2618 | 32 | 300 | 49% | 2623 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2655 | 25 | 498 | 52% | 2638 | 34% |
|  |  | P1 | 2645 | 58 | 104 | 58% | 2461 | 35% |
|  |  | E1 | 2685 | 55 | 120 | 51% | 2669 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2566 | 25 | 514 | 49% | 2573 | 33% |
|  |  | P1 | 2579 | 58 | 108 | 57% | 2502 | 28% |
|  |  | E1 | 2523 | 53 | 134 | 45% | 2599 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2291 | 26 | 488 | 48% | 2314 | 29% |
|  |  | P1 | 2260 | 53 | 124 | 54% | 2225 | 31% |
|  |  | E1 | 2155 | 49 | 156 | 56% | 2068 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2592 | 30 | 360 | 50% | 2589 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2499 | 32 | 320 | 49% | 2504 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2268 | 31 | 360 | 52% | 2250 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2392 | 34 | 296 | 49% | 2402 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2367 | 32 | 312 | 51% | 2361 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2055 | 32 | 320 | 48% | 2072 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2388 | 37 | 244 | 51% | 2375 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2341 | 37 | 240 | 51% | 2333 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2025 | 40 | 212 | 52% | 2010 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2255 | 44 | 188 | 54% | 2219 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2229 | 41 | 204 | 55% | 2186 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 42 | 196 | 50% | 1871 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2016 | 39 | 254 | 50% | 2025 | 15% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1918 | 45 | 192 | 46% | 1989 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1688 | 44 | 200 | 47% | 1760 | 19% |