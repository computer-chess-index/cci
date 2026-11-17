# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2352<sub>(+590) | 2726<sub>(+593) | 2844<sub>(+622) |  |
| 18.9.9 | 2026-01-16 | 1762 | 2133 | 2222 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2367<sub>(+589) | 2716<sub>(+564) | 2816<sub>(+644) |  |
| 18.9.9 | 2026-01-16 | 1778 | 2152 | 2172 | Loses on time |
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

Generated: 2026-11-17 05:42:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1762, 2352]
  line "E1: LTC (60.0+0.60s)" [2133, 2726]
  line "E1: VLTC (2m24s+1.12s)" [2222, 2844]
  line "P1: STC (8.0+0.08s)" [1778, 2367]
  line "P1: LTC (60.0+0.60s)" [2152, 2716]
  line "P1: VLTC (2m24s+1.12s)" [2172, 2816]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2816 | 33 | 286 | 50% | 2832 | 42% |
|  |  | E1 | 2844 | 31 | 346 | 51% | 2819 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2716 | 36 | 260 | 52% | 2693 | 35% |
|  |  | E1 | 2726 | 29 | 404 | 51% | 2691 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2367 | 35 | 270 | 48% | 2400 | 33% |
|  |  | E1 | 2352 | 30 | 364 | 46% | 2398 | 31% |
|  |  | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2172 | 69 | 80 | 49% | 2156 | 21% |
|  |  | E1 | 2222 | 61 | 98 | 48% | 2244 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2152 | 73 | 70 | 46% | 2194 | 24% |
|  |  | E1 | 2133 | 56 | 114 | 46% | 2194 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1778 | 62 | 98 | 47% | 1829 | 17% |
|  |  | E1 | 1762 | 56 | 116 | 41% | 1872 | 24% |