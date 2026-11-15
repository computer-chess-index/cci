# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2813<sub>(+259) | 3233<sub>(+263) | 3110<sub>(+16) |  |
| 6.5.1 | 2026-11-07 | 2554<sub>(+455) | 2970<sub>(+513) | 3094<sub>(+565) |  |
| 6.5.0 | 2026-11-06 | 2099<sub>(+185) | 2457<sub>(+263) | 2529<sub>(+243) |  |
| 6.3.0 | 2026-10-27 | 1914<sub>(+118) | 2194<sub>(+34) | 2286<sub>(-63) |  |
| 6.1.0 | 2026-09-24 | 1796 | 2160 | 2349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2581<sub>(+596) | 2934<sub>(+609) | 3004<sub>(+520) |  |
| 6.5.0 | 2026-11-06 | 1985<sub>(+98) | 2325<sub>(+135) | 2484<sub>(+201) |  |
| 6.3.0 | 2026-10-27 | 1887<sub>(+79) | 2190<sub>(+33) | 2283<sub>(-1) |  |
| 6.1.0 | 2026-09-24 | 1808 | 2157 | 2284 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1808 | 2157 | 2284 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:39:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3300
  line "E1: STC (8.0+0.08s)" [1796, 1914, 2099, 2554, 2813]
  line "E1: LTC (60.0+0.60s)" [2160, 2194, 2457, 2970, 3233]
  line "E1: VLTC (2m24s+1.12s)" [2349, 2286, 2529, 3094, 3110]
  line "P1: STC (8.0+0.08s)" [1808, 1887, 1985, 2581]
  line "P1: LTC (60.0+0.60s)" [2157, 2190, 2325, 2934]
  line "P1: VLTC (2m24s+1.12s)" [2284, 2283, 2484, 3004]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3110 | 229 | 4 | 50% | 3110 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3233 | 268 | 4 | 88% | 2966 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2847 | 268 | 4 | 88% | 2580 | 25% |
|  |  | E1 | 2813 | 270 | 4 | 88% | 2553 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3094 | 31 | 328 | 57% | 3016 | 43% |
|  |  | P1 | 3004 | 33 | 286 | 58% | 2920 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2934 | 47 | 156 | 55% | 2867 | 31% |
|  |  | E1 | 2970 | 27 | 418 | 49% | 2974 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2581 | 44 | 180 | 56% | 2515 | 34% |
|  |  | E1 | 2554 | 35 | 282 | 56% | 2477 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2484 | 50 | 144 | 52% | 2452 | 23% |
|  |  | E1 | 2529 | 41 | 208 | 53% | 2489 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2325 | 51 | 144 | 49% | 2345 | 19% |
|  |  | E1 | 2457 | 39 | 228 | 53% | 2419 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1985 | 46 | 164 | 48% | 2007 | 22% |
|  |  | E1 | 2099 | 41 | 200 | 52% | 2080 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2286 | 39 | 240 | 50% | 2279 | 18% |
|  |  | P1 | 2283 | 50 | 140 | 53% | 2261 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2190 | 45 | 176 | 53% | 2164 | 18% |
|  |  | E1 | 2194 | 42 | 204 | 51% | 2187 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1887 | 42 | 204 | 47% | 1920 | 21% |
|  |  | E1 | 1914 | 42 | 212 | 51% | 1905 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2284 | 63 | 80 | 50% | 2284 | 30% |
|  |  | E1 | 2349 | 44 | 182 | 49% | 2361 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2157 | 48 | 164 | 55% | 2097 | 18% |
|  |  | E1 | 2160 | 43 | 200 | 52% | 2129 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1808 | 44 | 212 | 59% | 1681 | 18% |
|  |  | E1 | 1796 | 40 | 250 | 55% | 1701 | 17% |