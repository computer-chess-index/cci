# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2429<sub>(-359) | 2739<sub>(-366) | 2849<sub>(-364) |  |
| 1.0 | 2025-10-19 | 2788 | 3105 | 3213 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2380<sub>(-467) | 2712<sub>(-371) | 2796<sub>(-340) |  |
| 1.0 | 2025-10-19 | 2847 | 3083 | 3136 |  |
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

Generated: 2026-11-25 05:41:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "E1: STC (8.0+0.08s)" [2788, 2429]
  line "E1: LTC (60.0+0.60s)" [3105, 2739]
  line "E1: VLTC (2m24s+1.12s)" [3213, 2849]
  line "P1: STC (8.0+0.08s)" [2847, 2380]
  line "P1: LTC (60.0+0.60s)" [3083, 2712]
  line "P1: VLTC (2m24s+1.12s)" [3136, 2796]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2849 | 27 | 468 | 51% | 2809 | 31% |
|  |  | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  |  | P1 | 2796 | 38 | 236 | 51% | 2777 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  |  | P1 | 2712 | 35 | 270 | 45% | 2763 | 34% |
|  |  | E1 | 2739 | 29 | 412 | 53% | 2680 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
|  |  | P1 | 2380 | 34 | 296 | 45% | 2438 | 29% |
|  |  | E1 | 2429 | 31 | 390 | 49% | 2444 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  |  | P1 | 3136 | 58 | 100 | 60% | 2959 | 43% |
|  |  | E1 | 3213 | 55 | 92 | 54% | 3173 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  |  | P1 | 3083 | 57 | 96 | 61% | 2965 | 41% |
|  |  | E1 | 3105 | 47 | 138 | 46% | 3128 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |
|  |  | P1 | 2847 | 57 | 92 | 55% | 2774 | 47% |
|  |  | E1 | 2788 | 55 | 116 | 60% | 2676 | 31% |