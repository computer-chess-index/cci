# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2352<sub>(+563) | 2718<sub>(+585) | 2834<sub>(+625) |  |
| 18.9.9 | 2026-01-16 | 1789 | 2133 | 2209 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2353<sub>(+541) | 2705<sub>(+580) | 2797<sub>(+661) |  |
| 18.9.9 | 2026-01-16 | 1812 | 2125 | 2136 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2415 | 2754 | 2861 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RuthIron+<version>&body=###%20Engine%20name%0ARuthIron%0A%0A###%20Version%0A21.9.6.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:42:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1789, 2352]
  line "E1: LTC (60.0+0.60s)" [2133, 2718]
  line "E1: VLTC (2m24s+1.12s)" [2209, 2834]
  line "P1: STC (8.0+0.08s)" [1812, 2353]
  line "P1: LTC (60.0+0.60s)" [2125, 2705]
  line "P1: VLTC (2m24s+1.12s)" [2136, 2797]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2797 | 33 | 286 | 50% | 2813 | 42% |
|  |  | E1 | 2834 | 31 | 342 | 51% | 2809 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2705 | 37 | 252 | 53% | 2680 | 35% |
|  |  | E1 | 2718 | 29 | 396 | 51% | 2682 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
|  |  | P1 | 2353 | 36 | 258 | 47% | 2396 | 34% |
|  |  | E1 | 2352 | 31 | 346 | 46% | 2394 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2209 | 71 | 72 | 47% | 2244 | 19% |
|  |  | P1 | 2136 | 80 | 62 | 47% | 2140 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2133 | 69 | 76 | 46% | 2213 | 24% |
|  |  | P1 | 2125 | 85 | 54 | 44% | 2190 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1812 | 73 | 74 | 50% | 1841 | 16% |
|  |  | E1 | 1789 | 67 | 84 | 40% | 1909 | 23% |