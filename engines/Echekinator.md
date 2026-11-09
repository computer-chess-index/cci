# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2672<sub>(+392) | 2984<sub>(+403) | 3002<sub>(+365) |  |
| 1.2 | 2026-10-14 | 2280<sub>(+487) | 2581<sub>(+521) | 2637<sub>(+546) |  |
| 1.0 | 2025-11-25 | 1793 | 2060 | 2091 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2755<sub>(+554) | 3033<sub>(+471) | 3125<sub>(+445) |  |
| 1.2 | 2026-10-14 | 2201<sub>(+391) | 2562<sub>(+573) | 2680<sub>(+567) |  |
| 1.0 | 2025-11-25 | 1810 | 1989 | 2113 |  |
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

Generated: 2026-11-09 05:37:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3200
  line "E1: STC (8.0+0.08s)" [1793, 2280, 2672]
  line "E1: LTC (60.0+0.60s)" [2060, 2581, 2984]
  line "E1: VLTC (2m24s+1.12s)" [2091, 2637, 3002]
  line "P1: STC (8.0+0.08s)" [1810, 2201, 2755]
  line "P1: LTC (60.0+0.60s)" [1989, 2562, 3033]
  line "P1: VLTC (2m24s+1.12s)" [2113, 2680, 3125]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3125 | 42 | 164 | 49% | 3127 | 46% |
|  |  | E1 | 3002 | 35 | 256 | 52% | 2981 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3033 | 39 | 194 | 48% | 3038 | 47% |
|  |  | E1 | 2984 | 28 | 398 | 48% | 2994 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2672 | 35 | 284 | 55% | 2618 | 27% |
|  |  | P1 | 2755 | 50 | 140 | 58% | 2672 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2680 | 45 | 162 | 53% | 2646 | 36% |
|  |  | E1 | 2637 | 36 | 270 | 50% | 2633 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2562 | 47 | 156 | 52% | 2534 | 27% |
|  |  | E1 | 2581 | 36 | 270 | 50% | 2587 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2201 | 49 | 150 | 48% | 2215 | 20% |
|  |  | E1 | 2280 | 36 | 280 | 49% | 2287 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2113 | 51 | 156 | 54% | 2060 | 15% |
|  |  | E1 | 2091 | 42 | 208 | 45% | 2192 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1989 | 46 | 164 | 49% | 2013 | 25% |
|  |  | E1 | 2060 | 40 | 228 | 45% | 2140 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1810 | 40 | 216 | 50% | 1810 | 23% |
|  |  | E1 | 1793 | 42 | 204 | 50% | 1796 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |