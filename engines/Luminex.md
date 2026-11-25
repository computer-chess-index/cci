# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2857<sub>(+303) | 3205<sub>(+234) | 3330<sub>(+234) |  |
| 6.5.1 | 2026-11-07 | 2554<sub>(+455) | 2971<sub>(+509) | 3096<sub>(+559) |  |
| 6.5.0 | 2026-11-06 | 2099<sub>(+190) | 2462<sub>(+263) | 2537<sub>(+249) |  |
| 6.3.0 | 2026-10-27 | 1909<sub>(+119) | 2199<sub>(+34) | 2288<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1790 | 2165 | 2352 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2869<sub>(+241) | 3181<sub>(+192) | 3272<sub>(+220) |  |
| 6.5.1 | 2026-11-07 | 2628<sub>(+619) | 2989<sub>(+632) | 3052<sub>(+527) |  |
| 6.5.0 | 2026-11-06 | 2009<sub>(+97) | 2357<sub>(+134) | 2525<sub>(+208) |  |
| 6.3.0 | 2026-10-27 | 1912<sub>(+81) | 2223<sub>(+32) | 2317<sub>(0) |  |
| 6.1.0 | 2026-09-24 | 1831 | 2191 | 2317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1831 | 2191 | 2317 |  |
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

Generated: 2026-11-25 05:40:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1790, 1909, 2099, 2554, 2857]
  line "E1: LTC (60.0+0.60s)" [2165, 2199, 2462, 2971, 3205]
  line "E1: VLTC (2m24s+1.12s)" [2352, 2288, 2537, 3096, 3330]
  line "P1: STC (8.0+0.08s)" [1831, 1912, 2009, 2628, 2869]
  line "P1: LTC (60.0+0.60s)" [2191, 2223, 2357, 2989, 3181]
  line "P1: VLTC (2m24s+1.12s)" [2317, 2317, 2525, 3052, 3272]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3272 | 42 | 144 | 52% | 3258 | 67% |
|  |  | E1 | 3330 | 35 | 216 | 50% | 3326 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3181 | 47 | 128 | 54% | 3144 | 51% |
|  |  | E1 | 3205 | 29 | 332 | 48% | 3218 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2869 | 35 | 246 | 52% | 2853 | 44% |
|  |  | E1 | 2857 | 36 | 244 | 51% | 2849 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3096 | 30 | 344 | 57% | 3025 | 43% |
|  |  | P1 | 3052 | 32 | 310 | 58% | 2974 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2971 | 27 | 438 | 48% | 2982 | 40% |
|  |  | P1 | 2989 | 45 | 168 | 55% | 2927 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2554 | 33 | 314 | 55% | 2493 | 33% |
|  |  | P1 | 2628 | 41 | 204 | 55% | 2572 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2525 | 50 | 144 | 52% | 2492 | 23% |
|  |  | E1 | 2537 | 41 | 208 | 53% | 2498 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2357 | 51 | 144 | 49% | 2383 | 19% |
|  |  | E1 | 2462 | 39 | 228 | 53% | 2425 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2009 | 46 | 164 | 48% | 2032 | 22% |
|  |  | E1 | 2099 | 41 | 200 | 52% | 2080 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2288 | 39 | 240 | 50% | 2282 | 18% |
|  |  | P1 | 2317 | 50 | 140 | 53% | 2295 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2199 | 42 | 204 | 51% | 2191 | 15% |
|  |  | P1 | 2223 | 45 | 176 | 53% | 2198 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1909 | 42 | 212 | 51% | 1901 | 16% |
|  |  | P1 | 1912 | 42 | 204 | 47% | 1943 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2317 | 63 | 80 | 50% | 2315 | 30% |
|  |  | E1 | 2352 | 44 | 182 | 49% | 2364 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2191 | 48 | 164 | 55% | 2130 | 18% |
|  |  | E1 | 2165 | 44 | 200 | 52% | 2133 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1831 | 44 | 212 | 59% | 1701 | 18% |
|  |  | E1 | 1790 | 40 | 250 | 55% | 1694 | 17% |