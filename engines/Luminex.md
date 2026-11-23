# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2854<sub>(+300) | 3201<sub>(+231) | 3332<sub>(+239) |  |
| 6.5.1 | 2026-11-07 | 2554<sub>(+459) | 2970<sub>(+510) | 3093<sub>(+560) |  |
| 6.5.0 | 2026-11-06 | 2095<sub>(+189) | 2460<sub>(+266) | 2533<sub>(+249) |  |
| 6.3.0 | 2026-10-27 | 1906<sub>(+120) | 2194<sub>(+34) | 2284<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1786 | 2160 | 2348 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2855<sub>(+235) | 3164<sub>(+190) | 3262<sub>(+222) |  |
| 6.5.1 | 2026-11-07 | 2620<sub>(+619) | 2974<sub>(+628) | 3040<sub>(+528) |  |
| 6.5.0 | 2026-11-06 | 2001<sub>(+95) | 2346<sub>(+131) | 2512<sub>(+206) |  |
| 6.3.0 | 2026-10-27 | 1906<sub>(+82) | 2215<sub>(+31) | 2306<sub>(+2) |  |
| 6.1.0 | 2026-09-24 | 1824 | 2184 | 2304 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1824 | 2184 | 2304 |  |
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

Generated: 2026-11-23 05:40:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1786, 1906, 2095, 2554, 2854]
  line "E1: LTC (60.0+0.60s)" [2160, 2194, 2460, 2970, 3201]
  line "E1: VLTC (2m24s+1.12s)" [2348, 2284, 2533, 3093, 3332]
  line "P1: STC (8.0+0.08s)" [1824, 1906, 2001, 2620, 2855]
  line "P1: LTC (60.0+0.60s)" [2184, 2215, 2346, 2974, 3164]
  line "P1: VLTC (2m24s+1.12s)" [2304, 2306, 2512, 3040, 3262]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3262 | 42 | 144 | 52% | 3245 | 67% |
|  |  | E1 | 3332 | 37 | 188 | 51% | 3322 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3164 | 50 | 116 | 54% | 3128 | 50% |
|  |  | E1 | 3201 | 29 | 324 | 48% | 3214 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2854 | 36 | 236 | 51% | 2843 | 39% |
|  |  | P1 | 2855 | 37 | 222 | 52% | 2839 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3040 | 32 | 310 | 58% | 2962 | 44% |
|  |  | E1 | 3093 | 30 | 344 | 57% | 3024 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2974 | 45 | 168 | 55% | 2912 | 34% |
|  |  | E1 | 2970 | 27 | 430 | 48% | 2978 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2620 | 42 | 196 | 55% | 2558 | 33% |
|  |  | E1 | 2554 | 33 | 302 | 55% | 2485 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2533 | 41 | 208 | 53% | 2493 | 25% |
|  |  | P1 | 2512 | 50 | 144 | 52% | 2481 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2460 | 39 | 228 | 53% | 2421 | 27% |
|  |  | P1 | 2346 | 51 | 144 | 49% | 2371 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2095 | 41 | 200 | 52% | 2078 | 26% |
|  |  | P1 | 2001 | 46 | 164 | 48% | 2024 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2306 | 50 | 140 | 53% | 2284 | 24% |
|  |  | E1 | 2284 | 39 | 240 | 50% | 2277 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2215 | 45 | 176 | 53% | 2190 | 18% |
|  |  | E1 | 2194 | 42 | 204 | 51% | 2187 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1906 | 42 | 204 | 47% | 1937 | 21% |
|  |  | E1 | 1906 | 42 | 212 | 51% | 1897 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2304 | 63 | 80 | 50% | 2303 | 30% |
|  |  | E1 | 2348 | 44 | 182 | 49% | 2360 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2184 | 48 | 164 | 55% | 2122 | 18% |
|  |  | E1 | 2160 | 44 | 200 | 52% | 2129 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1786 | 40 | 250 | 55% | 1692 | 17% |
|  |  | P1 | 1824 | 44 | 212 | 59% | 1694 | 18% |