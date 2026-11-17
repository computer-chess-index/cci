# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2344<sub>(+231) | 2700<sub>(+150) | 2727<sub>(-76) |  |
| 2.0.0 | 2026-05-23 | 2113 | 2550 | 2803 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2287<sub>(+188) | 2618<sub>(+87) | 2750<sub>(+208) |  |
| 2.0.0 | 2026-05-23 | 2099 | 2531 | 2542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2385<sub>(+136) | 2669<sub>(+113) | 2819<sub>(+201) |  |
| 2.0.0 | 2026-05-23 | 2249<sub>(+347) | 2556<sub>(+377) | 2618<sub>(+376) |  |
| 1.2.0 | 2026-05-07 | 1902<sub>(+169) | 2179<sub>(+165) | 2242<sub>(+141) |  |
| 1.1.0 | 2026-04-21 | 1733<sub>(+79) | 2014<sub>(+127) | 2101<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1654<sub>(+101) | 1887<sub>(+75) | 1959<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1553 | 1812 | 1870 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:41:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2000 --> 2900
  line "E1: STC (8.0+0.08s)" [2113, 2344]
  line "E1: LTC (60.0+0.60s)" [2550, 2700]
  line "E1: VLTC (2m24s+1.12s)" [2803, 2727]
  line "P1: STC (8.0+0.08s)" [2099, 2287]
  line "P1: LTC (60.0+0.60s)" [2531, 2618]
  line "P1: VLTC (2m24s+1.12s)" [2542, 2750]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "T1: STC (8.0+0.08s)" [1553, 1654, 1733, 1902, 2249, 2385]
  line "T1: LTC (60.0+0.60s)" [1812, 1887, 2014, 2179, 2556, 2669]
  line "T1: VLTC (2m24s+1.12s)" [1870, 1959, 2101, 2242, 2618, 2819]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2819 | 32 | 298 | 49% | 2827 | 39% |
|  |  | P1 | 2750 | 40 | 208 | 45% | 2820 | 38% |
|  |  | E1 | 2727 | 30 | 360 | 49% | 2727 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2669 | 35 | 262 | 50% | 2668 | 33% |
|  |  | P1 | 2618 | 35 | 276 | 51% | 2576 | 31% |
|  |  | E1 | 2700 | 31 | 342 | 48% | 2708 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2385 | 31 | 346 | 49% | 2390 | 26% |
|  |  | P1 | 2287 | 36 | 268 | 46% | 2330 | 27% |
|  |  | E1 | 2344 | 31 | 380 | 47% | 2398 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2542 | 67 | 70 | 46% | 2616 | 41% |
|  |  | E1 | 2803 | 61 | 96 | 39% | 2947 | 33% |
|  |  | T1 | 2618 | 48 | 136 | 49% | 2635 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2550 | 53 | 124 | 51% | 2549 | 26% |
|  |  | T1 | 2556 | 45 | 168 | 54% | 2514 | 30% |
|  |  | P1 | 2531 | 69 | 72 | 51% | 2547 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2113 | 55 | 124 | 42% | 2194 | 30% |
|  |  | T1 | 2249 | 44 | 182 | 55% | 2196 | 24% |
|  |  | P1 | 2099 | 74 | 78 | 40% | 2222 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2242 | 31 | 364 | 51% | 2237 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2179 | 34 | 292 | 50% | 2165 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1902 | 32 | 356 | 51% | 1883 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2101 | 32 | 348 | 53% | 2074 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2014 | 33 | 326 | 51% | 2005 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1733 | 32 | 352 | 50% | 1720 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1959 | 29 | 390 | 50% | 1959 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1887 | 31 | 384 | 51% | 1881 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1654 | 30 | 394 | 48% | 1673 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1870 | 41 | 208 | 50% | 1874 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1812 | 36 | 280 | 53% | 1781 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1553 | 39 | 242 | 49% | 1561 | 18% |