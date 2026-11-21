# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2854<sub>(+301) | 3216<sub>(+247) | 3333<sub>(+240) |  |
| 6.5.1 | 2026-11-07 | 2553<sub>(+458) | 2969<sub>(+511) | 3093<sub>(+562) |  |
| 6.5.0 | 2026-11-06 | 2095<sub>(+189) | 2458<sub>(+264) | 2531<sub>(+247) |  |
| 6.3.0 | 2026-10-27 | 1906<sub>(+121) | 2194<sub>(+34) | 2284<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1785 | 2160 | 2346 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2831<sub>(+217) | 3158<sub>(+191) | 3258<sub>(+223) |  |
| 6.5.1 | 2026-11-07 | 2614<sub>(+616) | 2967<sub>(+623) | 3035<sub>(+527) |  |
| 6.5.0 | 2026-11-06 | 1998<sub>(+94) | 2344<sub>(+134) | 2508<sub>(+204) |  |
| 6.3.0 | 2026-10-27 | 1904<sub>(+83) | 2210<sub>(+32) | 2304<sub>(0) |  |
| 6.1.0 | 2026-09-24 | 1821 | 2178 | 2304 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1821 | 2178 | 2304 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:39:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1785, 1906, 2095, 2553, 2854]
  line "E1: LTC (60.0+0.60s)" [2160, 2194, 2458, 2969, 3216]
  line "E1: VLTC (2m24s+1.12s)" [2346, 2284, 2531, 3093, 3333]
  line "P1: STC (8.0+0.08s)" [1821, 1904, 1998, 2614, 2831]
  line "P1: LTC (60.0+0.60s)" [2178, 2210, 2344, 2967, 3158]
  line "P1: VLTC (2m24s+1.12s)" [2304, 2304, 2508, 3035, 3258]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 49 | 104 | 53% | 3231 | 68% |
|  |  | E1 | 3333 | 38 | 184 | 51% | 3321 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3158 | 54 | 100 | 55% | 3114 | 48% |
|  |  | E1 | 3216 | 32 | 260 | 49% | 3217 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2831 | 46 | 146 | 50% | 2828 | 42% |
|  |  | E1 | 2854 | 37 | 228 | 52% | 2842 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3035 | 32 | 310 | 58% | 2955 | 44% |
|  |  | E1 | 3093 | 30 | 344 | 57% | 3023 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2967 | 45 | 168 | 55% | 2905 | 34% |
|  |  | E1 | 2969 | 27 | 430 | 48% | 2977 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2614 | 42 | 196 | 55% | 2553 | 33% |
|  |  | E1 | 2553 | 33 | 302 | 55% | 2484 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2508 | 50 | 144 | 52% | 2476 | 23% |
|  |  | E1 | 2531 | 41 | 208 | 53% | 2492 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2344 | 51 | 144 | 49% | 2368 | 19% |
|  |  | E1 | 2458 | 39 | 228 | 53% | 2421 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1998 | 46 | 164 | 48% | 2020 | 22% |
|  |  | E1 | 2095 | 41 | 200 | 52% | 2076 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2304 | 50 | 140 | 53% | 2283 | 24% |
|  |  | E1 | 2284 | 39 | 240 | 50% | 2277 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2210 | 45 | 176 | 53% | 2184 | 18% |
|  |  | E1 | 2194 | 42 | 204 | 51% | 2186 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1904 | 42 | 204 | 47% | 1935 | 21% |
|  |  | E1 | 1906 | 42 | 212 | 51% | 1897 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2304 | 63 | 80 | 50% | 2303 | 30% |
|  |  | E1 | 2346 | 44 | 182 | 49% | 2360 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2178 | 48 | 164 | 55% | 2117 | 18% |
|  |  | E1 | 2160 | 44 | 200 | 52% | 2128 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1821 | 44 | 212 | 59% | 1693 | 18% |
|  |  | E1 | 1785 | 40 | 250 | 55% | 1690 | 17% |