# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2546<sub>(+428) | 2943<sub>(+494) | 3074<sub>(+560) |  |
| 6.5.0 | 2026-11-06 | 2118<sub>(+187) | 2449<sub>(+248) | 2514<sub>(+226) |  |
| 6.3.0 | 2026-10-27 | 1931<sub>(+117) | 2201<sub>(+32) | 2288<sub>(-58) |  |
| 6.1.0 | 2026-09-24 | 1814 | 2169 | 2346 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2595<sub>(+610) | 2965<sub>(+639) | 3046<sub>(+542) |  |
| 6.5.0 | 2026-11-06 | 1985<sub>(+90) | 2326<sub>(+134) | 2504<sub>(+220) |  |
| 6.3.0 | 2026-10-27 | 1895<sub>(+79) | 2192<sub>(+33) | 2284<sub>(0) |  |
| 6.1.0 | 2026-09-24 | 1816 | 2159 | 2284 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1816 | 2159 | 2284 |  |
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

Generated: 2026-11-13 05:40:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3100
  line "E1: STC (8.0+0.08s)" [1814, 1931, 2118, 2546]
  line "E1: LTC (60.0+0.60s)" [2169, 2201, 2449, 2943]
  line "E1: VLTC (2m24s+1.12s)" [2346, 2288, 2514, 3074]
  line "P1: STC (8.0+0.08s)" [1816, 1895, 1985, 2595]
  line "P1: LTC (60.0+0.60s)" [2159, 2192, 2326, 2965]
  line "P1: VLTC (2m24s+1.12s)" [2284, 2284, 2504, 3046]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3074 | 31 | 328 | 57% | 2996 | 43% |
|  |  | P1 | 3046 | 34 | 278 | 60% | 2947 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2943 | 28 | 406 | 48% | 2955 | 42% |
|  |  | P1 | 2965 | 48 | 148 | 56% | 2892 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2595 | 44 | 176 | 55% | 2531 | 35% |
|  |  | E1 | 2546 | 36 | 264 | 56% | 2469 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2504 | 50 | 140 | 54% | 2452 | 24% |
|  |  | E1 | 2514 | 44 | 184 | 53% | 2473 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2326 | 52 | 132 | 51% | 2313 | 20% |
|  |  | E1 | 2449 | 40 | 220 | 53% | 2414 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1985 | 50 | 136 | 46% | 2020 | 24% |
|  |  | E1 | 2118 | 42 | 192 | 53% | 2091 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2288 | 39 | 240 | 50% | 2282 | 18% |
|  |  | P1 | 2284 | 50 | 140 | 53% | 2263 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2201 | 42 | 204 | 51% | 2194 | 15% |
|  |  | P1 | 2192 | 45 | 176 | 53% | 2165 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1895 | 42 | 204 | 47% | 1928 | 21% |
|  |  | E1 | 1931 | 42 | 212 | 51% | 1922 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2284 | 63 | 80 | 50% | 2284 | 30% |
|  |  | E1 | 2346 | 44 | 182 | 49% | 2358 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2159 | 48 | 164 | 55% | 2098 | 18% |
|  |  | E1 | 2169 | 43 | 200 | 52% | 2138 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1816 | 44 | 212 | 59% | 1690 | 18% |
|  |  | E1 | 1814 | 40 | 250 | 55% | 1719 | 17% |