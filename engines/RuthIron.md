# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2352<sub>(+600) | 2718<sub>(+590) | 2834<sub>(+616) |  |
| 18.9.9 | 2026-01-16 | 1752 | 2128 | 2218 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2375<sub>(+594) | 2734<sub>(+569) | 2840<sub>(+648) |  |
| 18.9.9 | 2026-01-16 | 1781 | 2165 | 2192 | Loses on time |
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

Generated: 2026-11-23 05:42:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1752, 2352]
  line "E1: LTC (60.0+0.60s)" [2128, 2718]
  line "E1: VLTC (2m24s+1.12s)" [2218, 2834]
  line "P1: STC (8.0+0.08s)" [1781, 2375]
  line "P1: LTC (60.0+0.60s)" [2165, 2734]
  line "P1: VLTC (2m24s+1.12s)" [2192, 2840]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2840 | 31 | 320 | 49% | 2863 | 43% |
|  |  | E1 | 2834 | 30 | 378 | 50% | 2816 | 33% |
|  |  | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2734 | 35 | 280 | 51% | 2719 | 34% |
|  |  | E1 | 2718 | 28 | 428 | 50% | 2699 | 31% |
|  |  | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2375 | 34 | 290 | 47% | 2417 | 33% |
|  |  | E1 | 2352 | 30 | 376 | 46% | 2391 | 31% |
|  |  | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2192 | 66 | 88 | 49% | 2178 | 22% |
|  |  | E1 | 2218 | 61 | 98 | 48% | 2238 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2165 | 65 | 88 | 47% | 2206 | 23% |
|  |  | E1 | 2128 | 56 | 114 | 46% | 2190 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1781 | 57 | 118 | 47% | 1833 | 18% |
|  |  | E1 | 1752 | 56 | 116 | 41% | 1864 | 24% |