# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1582<sub>(-30) | 2110<sub>(+22) | 2218<sub>(-66) |  |
| 6.2 | 2025-09-16 | 1612 | 2088 | 2284 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1627<sub>(-67) | 2040<sub>(-26) | 2183<sub>(+28) |  |
| 6.2 | 2025-09-16 | 1694 | 2066 | 2155 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1871<sub>(+12) | 2215<sub>(0) | 2303<sub>(0) |  |
| 6.2 | 2025-09-16 | 1859 | 2215 | 2303 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:37:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1500 --> 2300
  line "E1: STC (8.0+0.08s)" [1612, 1582]
  line "E1: LTC (60.0+0.60s)" [2088, 2110]
  line "E1: VLTC (2m24s+1.12s)" [2284, 2218]
  line "P1: STC (8.0+0.08s)" [1694, 1627]
  line "P1: LTC (60.0+0.60s)" [2066, 2040]
  line "P1: VLTC (2m24s+1.12s)" [2155, 2183]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2400
  line "T1: STC (8.0+0.08s)" [1859, 1871]
  line "T1: LTC (60.0+0.60s)" [2215, 2215]
  line "T1: VLTC (2m24s+1.12s)" [2303, 2303]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 30 | 376 | 50% | 2303 | 30% |
|  |  | P1 | 2183 | 39 | 266 | 55% | 2048 | 19% |
|  |  | E1 | 2218 | 31 | 376 | 56% | 2098 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  |  | P1 | 2040 | 38 | 274 | 55% | 1944 | 20% |
|  |  | E1 | 2110 | 31 | 380 | 54% | 2044 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
|  |  | P1 | 1627 | 37 | 282 | 57% | 1520 | 21% |
|  |  | E1 | 1582 | 31 | 386 | 53% | 1532 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  |  | P1 | 2155 | 65 | 104 | 33% | 2421 | 20% |
|  |  | E1 | 2284 | 63 | 90 | 46% | 2363 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  |  | P1 | 2066 | 71 | 92 | 37% | 2238 | 13% |
|  |  | E1 | 2088 | 59 | 110 | 50% | 2095 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |
|  |  | P1 | 1694 | 56 | 116 | 39% | 1818 | 25% |
|  |  | E1 | 1612 | 55 | 140 | 45% | 1724 | 11% |