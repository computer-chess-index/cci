# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2045<sub>(+35) | 2275<sub>(+174) | 2415<sub>(+247) |  |
| 0.2.3 | 2025-12-08 | 2010 | 2101 | 2168 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2010<sub>(+198) | 2288<sub>(+148) | 2418<sub>(+261) |  |
| 0.2.3 | 2025-12-08 | 1812 | 2140 | 2157 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2090<sub>(+61) | 2408<sub>(+164) | 2444<sub>(+123) |  |
| 0.2.3 | 2025-12-08 | 2029<sub>(+30) | 2244<sub>(-25) | 2321<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1999<sub>(+63) | 2269<sub>(+79) | 2306<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1936<sub>(-69) | 2190<sub>(-27) | 2325<sub>(-51) |  |
| 0.2 | 2025-11-15 | 2005 | 2217 | 2376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:39:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [2010, 2045]
  line "E1: LTC (60.0+0.60s)" [2101, 2275]
  line "E1: VLTC (2m24s+1.12s)" [2168, 2415]
  line "P1: STC (8.0+0.08s)" [1812, 2010]
  line "P1: LTC (60.0+0.60s)" [2140, 2288]
  line "P1: VLTC (2m24s+1.12s)" [2157, 2418]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "T1: STC (8.0+0.08s)" [2005, 1936, 1999, 2029, 2090]
  line "T1: LTC (60.0+0.60s)" [2217, 2190, 2269, 2244, 2408]
  line "T1: VLTC (2m24s+1.12s)" [2376, 2325, 2306, 2321, 2444]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2415 | 31 | 366 | 54% | 2363 | 24% |
|  |  | T1 | 2444 | 26 | 524 | 51% | 2422 | 24% |
|  |  | P1 | 2418 | 45 | 194 | 52% | 2415 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2275 | 35 | 300 | 51% | 2259 | 24% |
|  |  | T1 | 2408 | 25 | 542 | 53% | 2384 | 23% |
|  |  | P1 | 2288 | 43 | 196 | 47% | 2336 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2090 | 25 | 556 | 49% | 2087 | 22% |
|  |  | P1 | 2010 | 40 | 228 | 48% | 2037 | 21% |
|  |  | E1 | 2045 | 33 | 314 | 50% | 2063 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2321 | 31 | 362 | 48% | 2340 | 26% |
|  |  | P1 | 2157 | 188 | 24 | 25% | 2526 | 8% |
|  |  | E1 | 2168 | 124 | 28 | 43% | 2352 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2244 | 31 | 376 | 51% | 2229 | 22% |
|  |  | P1 | 2140 | 142 | 24 | 19% | 2535 | 21% |
|  |  | E1 | 2101 | 122 | 26 | 60% | 1947 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2029 | 28 | 468 | 49% | 2037 | 20% |
|  |  | P1 | 1812 | 190 | 24 | 6% | 2487 | 4% |
|  |  | E1 | 2010 | 89 | 56 | 61% | 1912 | 11% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2306 | 53 | 128 | 53% | 2276 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2269 | 66 | 76 | 51% | 2267 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1999 | 59 | 104 | 49% | 2013 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2325 | 55 | 132 | 44% | 2400 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2190 | 64 | 88 | 46% | 2229 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1936 | 70 | 76 | 50% | 1935 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2376 | 56 | 116 | 52% | 2356 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2217 | 47 | 160 | 49% | 2229 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2005 | 59 | 100 | 54% | 1964 | 22% |