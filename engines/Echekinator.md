# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2612<sub>(+376) | 2924<sub>(+401) | 2955<sub>(+364) |  |
| 1.2 | 2026-10-14 | 2236<sub>(+224) | 2523<sub>(+185) | 2591<sub>(+168) |  |
| 1.1 | 2026-09-30 | 2012<sub>(+264) | 2338<sub>(+318) | 2423<sub>(+372) |  |
| 1.0 | 2025-11-25 | 1748 | 2020 | 2051 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2641<sub>(+504) | 2892<sub>(+448) | 2969<sub>(+412) |  |
| 1.2 | 2026-10-14 | 2137<sub>(+67) | 2444<sub>(+122) | 2557<sub>(+232) |  |
| 1.1 | 2026-09-30 | 2070<sub>(+312) | 2322<sub>(+408) | 2325<sub>(+288) |  |
| 1.0 | 2025-11-25 | 1758 | 1914 | 2037 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:38:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1748, 2012, 2236, 2612]
  line "E1: LTC (60.0+0.60s)" [2020, 2338, 2523, 2924]
  line "E1: VLTC (2m24s+1.12s)" [2051, 2423, 2591, 2955]
  line "P1: STC (8.0+0.08s)" [1758, 2070, 2137, 2641]
  line "P1: LTC (60.0+0.60s)" [1914, 2322, 2444, 2892]
  line "P1: VLTC (2m24s+1.12s)" [2037, 2325, 2557, 2969]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2969 | 37 | 210 | 49% | 2978 | 47% |
|  |  | E1 | 2955 | 31 | 312 | 52% | 2936 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2892 | 34 | 254 | 49% | 2885 | 45% |
|  |  | E1 | 2924 | 26 | 464 | 48% | 2938 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2641 | 42 | 200 | 55% | 2596 | 30% |
|  |  | E1 | 2612 | 30 | 378 | 53% | 2585 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2557 | 44 | 170 | 53% | 2526 | 35% |
|  |  | E1 | 2591 | 34 | 294 | 49% | 2596 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2444 | 42 | 204 | 52% | 2406 | 26% |
|  |  | E1 | 2523 | 33 | 326 | 51% | 2500 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2137 | 42 | 196 | 49% | 2145 | 22% |
|  |  | E1 | 2236 | 33 | 324 | 47% | 2273 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  |  | P1 | 2325 | 69 | 68 | 38% | 2446 | 37% |
|  |  | E1 | 2423 | 36 | 270 | 45% | 2471 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2322 | 67 | 84 | 39% | 2441 | 20% |
|  |  | E1 | 2338 | 48 | 156 | 45% | 2394 | 26% |
|  |  | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2070 | 52 | 128 | 43% | 2141 | 28% |
|  |  | E1 | 2012 | 40 | 232 | 54% | 1982 | 21% |
|  |  | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2037 | 51 | 156 | 54% | 1987 | 15% |
|  |  | E1 | 2051 | 42 | 208 | 45% | 2151 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1914 | 46 | 164 | 49% | 1937 | 25% |
|  |  | E1 | 2020 | 40 | 228 | 45% | 2098 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1758 | 40 | 216 | 50% | 1758 | 23% |
|  |  | E1 | 1748 | 42 | 204 | 50% | 1751 | 20% |