# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1605<sub>(+8) | 2113<sub>(-24) | 2218<sub>(-74) |  |
| 6.2 | 2025-09-16 | 1597 | 2137 | 2292 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1638<sub>(-77) | 2030<sub>(-150) | 2174<sub>(-12) |  |
| 6.2 | 2025-09-16 | 1715 | 2180 | 2186 |  |
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

Generated: 2026-11-15 05:37:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1500 --> 2300
  line "E1: STC (8.0+0.08s)" [1597, 1605]
  line "E1: LTC (60.0+0.60s)" [2137, 2113]
  line "E1: VLTC (2m24s+1.12s)" [2292, 2218]
  line "P1: STC (8.0+0.08s)" [1715, 1638]
  line "P1: LTC (60.0+0.60s)" [2180, 2030]
  line "P1: VLTC (2m24s+1.12s)" [2186, 2174]
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
|  |  | P1 | 2174 | 41 | 244 | 56% | 2020 | 20% |
|  |  | E1 | 2218 | 32 | 362 | 56% | 2094 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  |  | P1 | 2030 | 40 | 256 | 55% | 1922 | 19% |
|  |  | E1 | 2113 | 32 | 364 | 54% | 2043 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
|  |  | P1 | 1638 | 38 | 274 | 58% | 1517 | 20% |
|  |  | E1 | 1605 | 32 | 366 | 54% | 1544 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2292 | 72 | 70 | 45% | 2383 | 21% |
|  |  | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  |  | P1 | 2186 | 97 | 56 | 26% | 2558 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2137 | 73 | 76 | 56% | 2080 | 14% |
|  |  | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  |  | P1 | 2180 | 114 | 44 | 39% | 2313 | 5% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1597 | 67 | 100 | 42% | 1777 | 11% |
|  |  | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |
|  |  | P1 | 1715 | 71 | 72 | 39% | 1852 | 25% |