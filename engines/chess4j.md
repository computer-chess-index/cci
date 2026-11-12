# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1632<sub>(-509) | 2142<sub>(-71) | 2242<sub>(-291) |  |
| 6.2 | 2025-09-16 | 2141 | 2213 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1688<sub>(-656) | 2129<sub>(-541) | 2298<sub>(-687) |  |
| 6.2 | 2025-09-16 | 2344 | 2670 | 2985 |  |
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

Generated: 2026-11-12 05:37:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1600 --> 3000
  line "E1: STC (8.0+0.08s)" [2141, 1632]
  line "E1: LTC (60.0+0.60s)" [2213, 2142]
  line "E1: VLTC (2m24s+1.12s)" [2533, 2242]
  line "P1: STC (8.0+0.08s)" [2344, 1688]
  line "P1: LTC (60.0+0.60s)" [2670, 2129]
  line "P1: VLTC (2m24s+1.12s)" [2985, 2298]
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
|  |  | P1 | 2298 | 42 | 236 | 57% | 2121 | 19% |
|  |  | E1 | 2242 | 33 | 334 | 56% | 2113 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  |  | P1 | 2129 | 41 | 240 | 56% | 1990 | 18% |
|  |  | E1 | 2142 | 33 | 336 | 54% | 2071 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
|  |  | P1 | 1688 | 39 | 254 | 57% | 1580 | 21% |
|  |  | E1 | 1632 | 35 | 318 | 54% | 1569 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2985 | 262 | 4 | 100% | 2670 | 0% |
|  |  | E1 | 2533 | 294 | 4 | 0% | 2898 | 0% |
|  |  | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2670 | 262 | 4 | 0% | 2985 | 0% |
|  |  | E1 | 2213 | 294 | 4 | 0% | 2579 | 0% |
|  |  | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2344 | 294 | 4 | 0% | 2709 | 0% |
|  |  | E1 | 2141 | 262 | 12 | 0% | 2724 | 0% |
|  |  | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |