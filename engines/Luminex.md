# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2844<sub>(+294) | 3227<sub>(+257) | 3326<sub>(+233) |  |
| 6.5.1 | 2026-11-07 | 2550<sub>(+455) | 2970<sub>(+513) | 3093<sub>(+563) |  |
| 6.5.0 | 2026-11-06 | 2095<sub>(+189) | 2457<sub>(+263) | 2530<sub>(+246) |  |
| 6.3.0 | 2026-10-27 | 1906<sub>(+120) | 2194<sub>(+34) | 2284<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1786 | 2160 | 2346 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2796<sub>(+193) | 3154<sub>(+197) | 3225<sub>(+200) |  |
| 6.5.1 | 2026-11-07 | 2603<sub>(+608) | 2957<sub>(+619) | 3025<sub>(+526) |  |
| 6.5.0 | 2026-11-06 | 1995<sub>(+97) | 2338<sub>(+133) | 2499<sub>(+203) |  |
| 6.3.0 | 2026-10-27 | 1898<sub>(+80) | 2205<sub>(+33) | 2296<sub>(0) |  |
| 6.1.0 | 2026-09-24 | 1818 | 2172 | 2296 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1818 | 2172 | 2296 |  |
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

Generated: 2026-11-18 05:40:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1786, 1906, 2095, 2550, 2844]
  line "E1: LTC (60.0+0.60s)" [2160, 2194, 2457, 2970, 3227]
  line "E1: VLTC (2m24s+1.12s)" [2346, 2284, 2530, 3093, 3326]
  line "P1: STC (8.0+0.08s)" [1818, 1898, 1995, 2603, 2796]
  line "P1: LTC (60.0+0.60s)" [2172, 2205, 2338, 2957, 3154]
  line "P1: VLTC (2m24s+1.12s)" [2296, 2296, 2499, 3025, 3225]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3225 | 70 | 52 | 52% | 3206 | 62% |
|  |  | E1 | 3326 | 41 | 156 | 51% | 3320 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3154 | 66 | 68 | 58% | 3083 | 46% |
|  |  | E1 | 3227 | 40 | 176 | 50% | 3220 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 72 | 58 | 49% | 2799 | 40% |
|  |  | E1 | 2844 | 42 | 176 | 51% | 2838 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3025 | 32 | 302 | 58% | 2943 | 43% |
|  |  | E1 | 3093 | 30 | 344 | 57% | 3024 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2957 | 46 | 160 | 56% | 2889 | 33% |
|  |  | E1 | 2970 | 27 | 430 | 48% | 2977 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2603 | 43 | 188 | 56% | 2539 | 34% |
|  |  | E1 | 2550 | 33 | 302 | 55% | 2483 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2499 | 50 | 144 | 52% | 2466 | 23% |
|  |  | E1 | 2530 | 41 | 208 | 53% | 2491 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2457 | 39 | 228 | 53% | 2419 | 27% |
|  |  | P1 | 2338 | 51 | 144 | 49% | 2361 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2095 | 41 | 200 | 52% | 2078 | 26% |
|  |  | P1 | 1995 | 46 | 164 | 48% | 2018 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2296 | 50 | 140 | 53% | 2275 | 24% |
|  |  | E1 | 2284 | 39 | 240 | 50% | 2277 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2205 | 45 | 176 | 53% | 2178 | 18% |
|  |  | E1 | 2194 | 42 | 204 | 51% | 2186 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1898 | 42 | 204 | 47% | 1931 | 21% |
|  |  | E1 | 1906 | 42 | 212 | 51% | 1898 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2296 | 63 | 80 | 50% | 2296 | 30% |
|  |  | E1 | 2346 | 44 | 182 | 49% | 2358 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2172 | 48 | 164 | 55% | 2111 | 18% |
|  |  | E1 | 2160 | 44 | 200 | 52% | 2128 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1818 | 44 | 212 | 59% | 1690 | 18% |
|  |  | E1 | 1786 | 40 | 250 | 55% | 1692 | 17% |