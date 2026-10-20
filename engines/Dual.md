# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2823 | 3136 | 3217 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2939 | 3183 | 3301 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2880<sub>(+161) | 3105<sub>(+155) | 3164<sub>(+75) |  |
| 0.4.2 | 2026-08-08 | 2719<sub>(+216) | 2950<sub>(+142) | 3089<sub>(+219) |  |
| 0.4.1 | 2026-07-26 | 2503<sub>(+132) | 2808<sub>(+117) | 2870<sub>(+71) |  |
| 0.4.0 | 2026-07-19 | 2371<sub>(+92) | 2691<sub>(+90) | 2799<sub>(+121) |  |
| 0.3.2 | 2026-07-06 | 2279<sub>(+348) | 2601<sub>(+487) | 2678<sub>(+446) |  |
| 0.2.9 | 2026-05-19 | 1931<sub>(+229) | 2114<sub>(+244) | 2232<sub>(+293) |  |
| 0.2.8 | 2026-05-15 | 1702<sub>(+98) | 1870<sub>(+33) | 1939<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1604 | 1837 | 1867 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.3" target="_blank">Submit new version</a>

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

Generated: 2026-10-20 04:38:11

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2", "0.4.3"]
  y-axis "Elo Rating" 1600 --> 3200
  line "T1: STC (8.0+0.08s)" [1604, 1702, 1931, 2279, 2371, 2503, 2719, 2880]
  line "T1: LTC (60.0+0.60s)" [1837, 1870, 2114, 2601, 2691, 2808, 2950, 3105]
  line "T1: VLTC (2m24s+1.12s)" [1867, 1939, 2232, 2678, 2799, 2870, 3089, 3164]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3164 | 32 | 252 | 51% | 3158 | 64% |
|  |  | P1 | 3301 | 35 | 228 | 50% | 3302 | 56% |
|  |  | E1 | 3217 | 29 | 316 | 51% | 3214 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3105 | 29 | 322 | 52% | 3087 | 60% |
|  |  | P1 | 3183 | 37 | 192 | 48% | 3200 | 59% |
|  |  | E1 | 3136 | 28 | 324 | 50% | 3137 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2880 | 35 | 244 | 52% | 2867 | 44% |
|  |  | P1 | 2939 | 37 | 204 | 52% | 2923 | 52% |
|  |  | E1 | 2823 | 28 | 376 | 46% | 2859 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3089 | 31 | 286 | 50% | 3086 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2950 | 33 | 256 | 51% | 2942 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2719 | 33 | 278 | 51% | 2705 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2870 | 33 | 276 | 52% | 2857 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2808 | 33 | 272 | 48% | 2823 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2503 | 33 | 304 | 48% | 2520 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2799 | 35 | 244 | 53% | 2777 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2691 | 39 | 216 | 53% | 2668 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2371 | 39 | 216 | 49% | 2380 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2678 | 39 | 200 | 50% | 2673 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 44 | 174 | 54% | 2561 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2279 | 42 | 200 | 48% | 2291 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2232 | 34 | 298 | 51% | 2229 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2114 | 37 | 258 | 52% | 2098 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1931 | 35 | 288 | 51% | 1924 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1939 | 34 | 312 | 48% | 1952 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1870 | 35 | 276 | 51% | 1852 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 33 | 314 | 46% | 1732 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1867 | 32 | 334 | 47% | 1895 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1837 | 35 | 304 | 49% | 1855 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1604 | 36 | 292 | 50% | 1600 | 16% |