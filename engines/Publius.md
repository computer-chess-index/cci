# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2425<sub>(-334) | 2732<sub>(-382) | 2846<sub>(-368) |  |
| 1.0 | 2025-10-19 | 2759 | 3114 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2368<sub>(-468) | 2718<sub>(-324) | 2784<sub>(-348) |  |
| 1.0 | 2025-10-19 | 2836 | 3042 | 3132 |  |
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

Generated: 2026-11-23 05:41:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "E1: STC (8.0+0.08s)" [2759, 2425]
  line "E1: LTC (60.0+0.60s)" [3114, 2732]
  line "E1: VLTC (2m24s+1.12s)" [3214, 2846]
  line "P1: STC (8.0+0.08s)" [2836, 2368]
  line "P1: LTC (60.0+0.60s)" [3042, 2718]
  line "P1: VLTC (2m24s+1.12s)" [3132, 2784]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2784 | 39 | 232 | 51% | 2766 | 30% |
|  |  | E1 | 2846 | 27 | 464 | 51% | 2805 | 31% |
|  |  | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2732 | 29 | 408 | 53% | 2676 | 35% |
|  |  | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  |  | P1 | 2718 | 37 | 244 | 46% | 2757 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2425 | 31 | 378 | 49% | 2439 | 22% |
|  |  | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
|  |  | P1 | 2368 | 35 | 292 | 45% | 2427 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  |  | P1 | 3132 | 66 | 80 | 63% | 2903 | 39% |
|  |  | E1 | 3214 | 61 | 76 | 55% | 3160 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  |  | P1 | 3042 | 64 | 76 | 61% | 2923 | 42% |
|  |  | E1 | 3114 | 63 | 78 | 46% | 3133 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |
|  |  | P1 | 2836 | 61 | 84 | 55% | 2757 | 44% |
|  |  | E1 | 2759 | 60 | 100 | 60% | 2655 | 29% |