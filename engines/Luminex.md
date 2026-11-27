# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2853<sub>(+303) | 3198<sub>(+235) | 3329<sub>(+239) |  |
| 6.5.1 | 2026-11-07 | 2550<sub>(+448) | 2963<sub>(+499) | 3090<sub>(+553) |  |
| 6.5.0 | 2026-11-06 | 2102<sub>(+192) | 2464<sub>(+263) | 2537<sub>(+246) |  |
| 6.3.0 | 2026-10-27 | 1910<sub>(+119) | 2201<sub>(+34) | 2291<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1791 | 2167 | 2353 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2873<sub>(+245) | 3167<sub>(+177) | 3272<sub>(+218) |  |
| 6.5.1 | 2026-11-07 | 2628<sub>(+616) | 2990<sub>(+632) | 3054<sub>(+529) |  |
| 6.5.0 | 2026-11-06 | 2012<sub>(+99) | 2358<sub>(+132) | 2525<sub>(+206) |  |
| 6.3.0 | 2026-10-27 | 1913<sub>(+81) | 2226<sub>(+32) | 2319<sub>(+1) |  |
| 6.1.0 | 2026-09-24 | 1832 | 2194 | 2318 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1832 | 2194 | 2318 |  |
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

Generated: 2026-11-27 05:40:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1791, 1910, 2102, 2550, 2853]
  line "E1: LTC (60.0+0.60s)" [2167, 2201, 2464, 2963, 3198]
  line "E1: VLTC (2m24s+1.12s)" [2353, 2291, 2537, 3090, 3329]
  line "P1: STC (8.0+0.08s)" [1832, 1913, 2012, 2628, 2873]
  line "P1: LTC (60.0+0.60s)" [2194, 2226, 2358, 2990, 3167]
  line "P1: VLTC (2m24s+1.12s)" [2318, 2319, 2525, 3054, 3272]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3272 | 42 | 144 | 52% | 3258 | 67% |
|  |  | E1 | 3329 | 35 | 220 | 51% | 3321 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3167 | 41 | 166 | 52% | 3150 | 51% |
|  |  | E1 | 3198 | 28 | 352 | 48% | 3212 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2873 | 34 | 262 | 52% | 2855 | 45% |
|  |  | E1 | 2853 | 34 | 264 | 51% | 2844 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3054 | 32 | 310 | 58% | 2975 | 44% |
|  |  | E1 | 3090 | 30 | 344 | 57% | 3021 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2990 | 45 | 168 | 55% | 2927 | 34% |
|  |  | E1 | 2963 | 26 | 446 | 48% | 2975 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2628 | 41 | 208 | 55% | 2573 | 33% |
|  |  | E1 | 2550 | 32 | 326 | 54% | 2493 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2525 | 50 | 144 | 52% | 2492 | 23% |
|  |  | E1 | 2537 | 41 | 208 | 53% | 2498 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2358 | 51 | 144 | 49% | 2383 | 19% |
|  |  | E1 | 2464 | 39 | 228 | 53% | 2425 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2012 | 46 | 164 | 48% | 2033 | 22% |
|  |  | E1 | 2102 | 41 | 200 | 52% | 2083 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2319 | 50 | 140 | 53% | 2296 | 24% |
|  |  | E1 | 2291 | 39 | 240 | 50% | 2284 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2226 | 45 | 176 | 53% | 2199 | 18% |
|  |  | E1 | 2201 | 42 | 204 | 51% | 2194 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1913 | 42 | 204 | 47% | 1944 | 21% |
|  |  | E1 | 1910 | 42 | 212 | 51% | 1902 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2318 | 63 | 80 | 50% | 2317 | 30% |
|  |  | E1 | 2353 | 44 | 182 | 49% | 2365 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2194 | 48 | 164 | 55% | 2132 | 18% |
|  |  | E1 | 2167 | 44 | 200 | 52% | 2136 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1832 | 44 | 212 | 59% | 1702 | 18% |
|  |  | E1 | 1791 | 40 | 250 | 55% | 1696 | 17% |