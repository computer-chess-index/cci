# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2360<sub>(+516) | 2716<sub>(+646) | 2835<sub>(+630) |  |
| 18.9.9 | 2026-01-16 | 1844 | 2070 | 2205 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2341<sub>(+532) | 2707<sub>(+678) | 2801<sub>(+627) |  |
| 18.9.9 | 2026-01-16 | 1809 | 2029 | 2174 | Loses on time |
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

Generated: 2026-11-14 05:42:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1800 --> 2900
  line "E1: STC (8.0+0.08s)" [1844, 2360]
  line "E1: LTC (60.0+0.60s)" [2070, 2716]
  line "E1: VLTC (2m24s+1.12s)" [2205, 2835]
  line "P1: STC (8.0+0.08s)" [1809, 2341]
  line "P1: LTC (60.0+0.60s)" [2029, 2707]
  line "P1: VLTC (2m24s+1.12s)" [2174, 2801]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2801 | 33 | 286 | 50% | 2817 | 42% |
|  |  | E1 | 2835 | 32 | 338 | 51% | 2809 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2707 | 37 | 252 | 53% | 2681 | 35% |
|  |  | E1 | 2716 | 30 | 388 | 51% | 2684 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
|  |  | P1 | 2341 | 37 | 250 | 47% | 2388 | 34% |
|  |  | E1 | 2360 | 31 | 342 | 46% | 2402 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2174 | 117 | 32 | 52% | 2101 | 16% |
|  |  | E1 | 2205 | 89 | 48 | 43% | 2284 | 15% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2029 | 119 | 32 | 33% | 2248 | 22% |
|  |  | E1 | 2070 | 92 | 46 | 34% | 2302 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1809 | 97 | 42 | 43% | 1929 | 19% |
|  |  | E1 | 1844 | 94 | 46 | 34% | 2029 | 15% |