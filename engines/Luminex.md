# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2857<sub>(+301) | 3214<sub>(+241) | 3336<sub>(+240) |  |
| 6.5.1 | 2026-11-07 | 2556<sub>(+459) | 2973<sub>(+512) | 3096<sub>(+561) |  |
| 6.5.0 | 2026-11-06 | 2097<sub>(+191) | 2461<sub>(+265) | 2535<sub>(+248) |  |
| 6.3.0 | 2026-10-27 | 1906<sub>(+119) | 2196<sub>(+33) | 2287<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1787 | 2163 | 2349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2853<sub>(+239) | 3158<sub>(+191) | 3254<sub>(+219) |  |
| 6.5.1 | 2026-11-07 | 2614<sub>(+616) | 2967<sub>(+623) | 3035<sub>(+527) |  |
| 6.5.0 | 2026-11-06 | 1998<sub>(+94) | 2344<sub>(+134) | 2508<sub>(+205) |  |
| 6.3.0 | 2026-10-27 | 1904<sub>(+83) | 2210<sub>(+32) | 2303<sub>(+1) |  |
| 6.1.0 | 2026-09-24 | 1821 | 2178 | 2302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1821 | 2178 | 2302 |  |
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

Generated: 2026-11-22 05:39:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1787, 1906, 2097, 2556, 2857]
  line "E1: LTC (60.0+0.60s)" [2163, 2196, 2461, 2973, 3214]
  line "E1: VLTC (2m24s+1.12s)" [2349, 2287, 2535, 3096, 3336]
  line "P1: STC (8.0+0.08s)" [1821, 1904, 1998, 2614, 2853]
  line "P1: LTC (60.0+0.60s)" [2178, 2210, 2344, 2967, 3158]
  line "P1: VLTC (2m24s+1.12s)" [2302, 2303, 2508, 3035, 3254]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3254 | 42 | 144 | 52% | 3239 | 67% |
|  |  | E1 | 3336 | 38 | 184 | 51% | 3325 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3158 | 50 | 116 | 54% | 3121 | 50% |
|  |  | E1 | 3214 | 32 | 268 | 49% | 3221 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2853 | 37 | 218 | 52% | 2834 | 44% |
|  |  | E1 | 2857 | 37 | 228 | 52% | 2843 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3035 | 32 | 310 | 58% | 2955 | 44% |
|  |  | E1 | 3096 | 30 | 344 | 57% | 3025 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2967 | 45 | 168 | 55% | 2905 | 34% |
|  |  | E1 | 2973 | 27 | 430 | 48% | 2981 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2614 | 42 | 196 | 55% | 2553 | 33% |
|  |  | E1 | 2556 | 33 | 302 | 55% | 2488 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2508 | 50 | 144 | 52% | 2477 | 23% |
|  |  | E1 | 2535 | 41 | 208 | 53% | 2496 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2344 | 51 | 144 | 49% | 2367 | 19% |
|  |  | E1 | 2461 | 39 | 228 | 53% | 2423 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1998 | 46 | 164 | 48% | 2021 | 22% |
|  |  | E1 | 2097 | 41 | 200 | 52% | 2079 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2303 | 50 | 140 | 53% | 2282 | 24% |
|  |  | E1 | 2287 | 39 | 240 | 50% | 2280 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2210 | 45 | 176 | 53% | 2184 | 18% |
|  |  | E1 | 2196 | 42 | 204 | 51% | 2188 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1904 | 42 | 204 | 47% | 1935 | 21% |
|  |  | E1 | 1906 | 42 | 212 | 51% | 1898 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2302 | 63 | 80 | 50% | 2302 | 30% |
|  |  | E1 | 2349 | 44 | 182 | 49% | 2361 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2178 | 48 | 164 | 55% | 2117 | 18% |
|  |  | E1 | 2163 | 44 | 200 | 52% | 2130 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1821 | 44 | 212 | 59% | 1692 | 18% |
|  |  | E1 | 1787 | 40 | 250 | 55% | 1693 | 17% |