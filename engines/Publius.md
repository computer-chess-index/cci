# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2434<sub>(-331) | 2738<sub>(-383) | 2844<sub>(-376) |  |
| 1.0 | 2025-10-19 | 2765 | 3121 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2360<sub>(-463) | 2703<sub>(-291) | 2763<sub>(-323) |  |
| 1.0 | 2025-10-19 | 2823 | 2994 | 3086 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2473<sub>(-370) | 2758<sub>(-359) | 2830<sub>(-313) |  |
| 1.0 | 2025-10-19 | 2843 | 3117 | 3143 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:41:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "E1: STC (8.0+0.08s)" [2765, 2434]
  line "E1: LTC (60.0+0.60s)" [3121, 2738]
  line "E1: VLTC (2m24s+1.12s)" [3220, 2844]
  line "P1: STC (8.0+0.08s)" [2823, 2360]
  line "P1: LTC (60.0+0.60s)" [2994, 2703]
  line "P1: VLTC (2m24s+1.12s)" [3086, 2763]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "T1: STC (8.0+0.08s)" [2843, 2473]
  line "T1: LTC (60.0+0.60s)" [3117, 2758]
  line "T1: VLTC (2m24s+1.12s)" [3143, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2763 | 39 | 224 | 51% | 2743 | 30% |
|  |  | E1 | 2844 | 28 | 428 | 50% | 2808 | 32% |
|  |  | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2703 | 38 | 228 | 47% | 2732 | 33% |
|  |  | E1 | 2738 | 29 | 404 | 53% | 2680 | 35% |
|  |  | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2360 | 36 | 272 | 45% | 2415 | 29% |
|  |  | E1 | 2434 | 32 | 354 | 49% | 2445 | 22% |
|  |  | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  |  | P1 | 3086 | 74 | 68 | 63% | 2839 | 35% |
|  |  | E1 | 3220 | 61 | 76 | 55% | 3166 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  |  | P1 | 2994 | 75 | 56 | 62% | 2855 | 41% |
|  |  | E1 | 3121 | 63 | 78 | 46% | 3141 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |
|  |  | P1 | 2823 | 72 | 64 | 59% | 2703 | 38% |
|  |  | E1 | 2765 | 60 | 100 | 60% | 2661 | 29% |