# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2853<sub>(+300) | 3202<sub>(+232) | 3328<sub>(+235) |  |
| 6.5.1 | 2026-11-07 | 2553<sub>(+456) | 2970<sub>(+509) | 3093<sub>(+559) |  |
| 6.5.0 | 2026-11-06 | 2097<sub>(+189) | 2461<sub>(+266) | 2534<sub>(+248) |  |
| 6.3.0 | 2026-10-27 | 1908<sub>(+119) | 2195<sub>(+34) | 2286<sub>(-63) |  |
| 6.1.0 | 2026-09-24 | 1789 | 2161 | 2349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2858<sub>(+235) | 3167<sub>(+189) | 3264<sub>(+220) |  |
| 6.5.1 | 2026-11-07 | 2623<sub>(+620) | 2978<sub>(+629) | 3044<sub>(+529) |  |
| 6.5.0 | 2026-11-06 | 2003<sub>(+95) | 2349<sub>(+131) | 2515<sub>(+206) |  |
| 6.3.0 | 2026-10-27 | 1908<sub>(+83) | 2218<sub>(+32) | 2309<sub>(+3) |  |
| 6.1.0 | 2026-09-24 | 1825 | 2186 | 2306 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1825 | 2186 | 2306 |  |
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

Generated: 2026-11-24 05:40:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1789, 1908, 2097, 2553, 2853]
  line "E1: LTC (60.0+0.60s)" [2161, 2195, 2461, 2970, 3202]
  line "E1: VLTC (2m24s+1.12s)" [2349, 2286, 2534, 3093, 3328]
  line "P1: STC (8.0+0.08s)" [1825, 1908, 2003, 2623, 2858]
  line "P1: LTC (60.0+0.60s)" [2186, 2218, 2349, 2978, 3167]
  line "P1: VLTC (2m24s+1.12s)" [2306, 2309, 2515, 3044, 3264]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3264 | 42 | 144 | 52% | 3248 | 67% |
|  |  | E1 | 3328 | 35 | 216 | 50% | 3324 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3167 | 50 | 116 | 54% | 3131 | 50% |
|  |  | E1 | 3202 | 29 | 332 | 48% | 3216 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2858 | 36 | 234 | 51% | 2843 | 44% |
|  |  | E1 | 2853 | 36 | 244 | 51% | 2844 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3044 | 32 | 310 | 58% | 2965 | 44% |
|  |  | E1 | 3093 | 30 | 344 | 57% | 3023 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2978 | 45 | 168 | 55% | 2916 | 34% |
|  |  | E1 | 2970 | 27 | 434 | 48% | 2978 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2623 | 42 | 196 | 55% | 2561 | 33% |
|  |  | E1 | 2553 | 33 | 306 | 55% | 2487 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2515 | 50 | 144 | 52% | 2484 | 23% |
|  |  | E1 | 2534 | 41 | 208 | 53% | 2495 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2349 | 51 | 144 | 49% | 2373 | 19% |
|  |  | E1 | 2461 | 39 | 228 | 53% | 2422 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2003 | 46 | 164 | 48% | 2026 | 22% |
|  |  | E1 | 2097 | 41 | 200 | 52% | 2078 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2309 | 50 | 140 | 53% | 2286 | 24% |
|  |  | E1 | 2286 | 39 | 240 | 50% | 2280 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2218 | 45 | 176 | 53% | 2191 | 18% |
|  |  | E1 | 2195 | 42 | 204 | 51% | 2188 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1908 | 42 | 204 | 47% | 1940 | 21% |
|  |  | E1 | 1908 | 42 | 212 | 51% | 1899 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2306 | 63 | 80 | 50% | 2304 | 30% |
|  |  | E1 | 2349 | 44 | 182 | 49% | 2361 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2186 | 48 | 164 | 55% | 2125 | 18% |
|  |  | E1 | 2161 | 44 | 200 | 52% | 2130 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1825 | 44 | 212 | 59% | 1697 | 18% |
|  |  | E1 | 1789 | 40 | 250 | 55% | 1694 | 17% |