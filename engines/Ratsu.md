# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2341<sub>(+234) | 2696<sub>(+149) | 2727<sub>(-72) |  |
| 2.0.0 | 2026-05-23 | 2107 | 2547 | 2799 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2302<sub>(+165) | 2633<sub>(+59) | 2766<sub>(+232) |  |
| 2.0.0 | 2026-05-23 | 2137 | 2574 | 2534 |  |
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

Generated: 2026-11-22 05:41:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2800
  line "E1: STC (8.0+0.08s)" [2107, 2341]
  line "E1: LTC (60.0+0.60s)" [2547, 2696]
  line "E1: VLTC (2m24s+1.12s)" [2799, 2727]
  line "P1: STC (8.0+0.08s)" [2137, 2302]
  line "P1: LTC (60.0+0.60s)" [2574, 2633]
  line "P1: VLTC (2m24s+1.12s)" [2534, 2766]
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
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2727 | 30 | 368 | 49% | 2732 | 33% |
|  |  | T1 | 2819 | 32 | 298 | 49% | 2827 | 39% |
|  |  | P1 | 2766 | 40 | 208 | 45% | 2838 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2696 | 30 | 358 | 47% | 2715 | 33% |
|  |  | T1 | 2669 | 35 | 262 | 50% | 2668 | 33% |
|  |  | P1 | 2633 | 34 | 296 | 50% | 2600 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2385 | 31 | 346 | 49% | 2390 | 26% |
|  |  | P1 | 2302 | 36 | 268 | 46% | 2346 | 27% |
|  |  | E1 | 2341 | 30 | 392 | 47% | 2394 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2618 | 48 | 136 | 49% | 2635 | 38% |
|  |  | P1 | 2534 | 60 | 90 | 45% | 2616 | 39% |
|  |  | E1 | 2799 | 61 | 96 | 39% | 2944 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2556 | 45 | 168 | 54% | 2514 | 30% |
|  |  | P1 | 2574 | 61 | 88 | 53% | 2566 | 36% |
|  |  | E1 | 2547 | 53 | 124 | 51% | 2546 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2249 | 44 | 182 | 55% | 2196 | 24% |
|  |  | P1 | 2137 | 62 | 102 | 45% | 2202 | 24% |
|  |  | E1 | 2107 | 55 | 124 | 42% | 2188 | 30% |
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