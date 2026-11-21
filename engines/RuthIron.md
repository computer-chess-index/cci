# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2352<sub>(+601) | 2720<sub>(+592) | 2834<sub>(+617) |  |
| 18.9.9 | 2026-01-16 | 1751 | 2128 | 2217 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2376<sub>(+598) | 2731<sub>(+570) | 2839<sub>(+649) |  |
| 18.9.9 | 2026-01-16 | 1778 | 2161 | 2190 | Loses on time |
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

Generated: 2026-11-21 05:42:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1751, 2352]
  line "E1: LTC (60.0+0.60s)" [2128, 2720]
  line "E1: VLTC (2m24s+1.12s)" [2217, 2834]
  line "P1: STC (8.0+0.08s)" [1778, 2376]
  line "P1: LTC (60.0+0.60s)" [2161, 2731]
  line "P1: VLTC (2m24s+1.12s)" [2190, 2839]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2839 | 32 | 312 | 50% | 2858 | 43% |
|  |  | E1 | 2834 | 30 | 374 | 50% | 2815 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2731 | 35 | 276 | 52% | 2712 | 34% |
|  |  | E1 | 2720 | 29 | 420 | 50% | 2696 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
|  |  | P1 | 2376 | 34 | 282 | 48% | 2412 | 33% |
|  |  | E1 | 2352 | 30 | 376 | 46% | 2391 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2190 | 66 | 88 | 49% | 2176 | 22% |
|  |  | E1 | 2217 | 61 | 98 | 48% | 2238 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2161 | 65 | 88 | 47% | 2202 | 23% |
|  |  | E1 | 2128 | 56 | 114 | 46% | 2188 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1778 | 57 | 118 | 47% | 1831 | 18% |
|  |  | E1 | 1751 | 56 | 116 | 41% | 1863 | 24% |