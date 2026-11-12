# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2070<sub>(+40) | 2314<sub>(+22) | 2458<sub>(-54) |  |
| 0.2.3 | 2025-12-08 | 2030 | 2292 | 2512 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2115<sub>(-431) | 2425<sub>(-218) | 2565<sub>(-236) |  |
| 0.2.3 | 2025-12-08 | 2546 | 2643 | 2801 |  |
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

Generated: 2026-11-12 05:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.3", "0.3.1"]
  y-axis "Elo Rating" 2000 --> 2900
  line "E1: STC (8.0+0.08s)" [2030, 2070]
  line "E1: LTC (60.0+0.60s)" [2292, 2314]
  line "E1: VLTC (2m24s+1.12s)" [2512, 2458]
  line "P1: STC (8.0+0.08s)" [2546, 2115]
  line "P1: LTC (60.0+0.60s)" [2643, 2425]
  line "P1: VLTC (2m24s+1.12s)" [2801, 2565]
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
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2565 | 45 | 190 | 52% | 2554 | 21% |
|  |  | E1 | 2458 | 32 | 358 | 54% | 2414 | 24% |
|  |  | T1 | 2444 | 26 | 524 | 51% | 2422 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2314 | 35 | 292 | 51% | 2291 | 24% |
|  |  | T1 | 2408 | 25 | 542 | 53% | 2384 | 23% |
|  |  | P1 | 2425 | 44 | 192 | 48% | 2461 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2070 | 33 | 314 | 50% | 2087 | 23% |
|  |  | T1 | 2090 | 25 | 556 | 49% | 2087 | 22% |
|  |  | P1 | 2115 | 41 | 220 | 49% | 2138 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2321 | 31 | 362 | 48% | 2340 | 26% |
|  |  | P1 | 2801 | 190 | 8 | 44% | 2871 | 13% |
|  |  | E1 | 2512 | 262 | 4 | 0% | 2826 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2244 | 31 | 376 | 51% | 2229 | 22% |
|  |  | P1 | 2643 | 189 | 8 | 6% | 2944 | 13% |
|  |  | E1 | 2292 | 216 | 12 | 75% | 1952 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2029 | 28 | 468 | 49% | 2037 | 20% |
|  |  | P1 | 2546 | 225 | 8 | 0% | 2951 | 0% |
|  |  | E1 | 2030 | 205 | 16 | 56% | 1905 | 0% |
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