# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2435<sub>(-399) | 2734<sub>(-380) | 2843<sub>(-292) |  |
| 1.0 | 2025-10-19 | 2834 | 3114 | 3135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2344<sub>(-459) | 2693<sub>(-265) | 2750<sub>(-289) |  |
| 1.0 | 2025-10-19 | 2803 | 2958 | 3039 |  |
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

Generated: 2026-11-14 05:41:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2834, 2435]
  line "E1: LTC (60.0+0.60s)" [3114, 2734]
  line "E1: VLTC (2m24s+1.12s)" [3135, 2843]
  line "P1: STC (8.0+0.08s)" [2803, 2344]
  line "P1: LTC (60.0+0.60s)" [2958, 2693]
  line "P1: VLTC (2m24s+1.12s)" [3039, 2750]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  |  | P1 | 2750 | 39 | 224 | 51% | 2730 | 30% |
|  |  | E1 | 2843 | 28 | 416 | 51% | 2797 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  |  | P1 | 2693 | 39 | 216 | 48% | 2720 | 32% |
|  |  | E1 | 2734 | 29 | 396 | 53% | 2674 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
|  |  | P1 | 2344 | 36 | 264 | 46% | 2394 | 29% |
|  |  | E1 | 2435 | 32 | 354 | 49% | 2446 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3039 | 102 | 40 | 73% | 2651 | 35% |
|  |  | E1 | 3135 | 91 | 36 | 50% | 3125 | 44% |
|  |  | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2958 | 109 | 28 | 70% | 2714 | 39% |
|  |  | E1 | 3114 | 103 | 34 | 44% | 3123 | 41% |
|  |  | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2803 | 105 | 32 | 66% | 2603 | 31% |
|  |  | E1 | 2834 | 97 | 50 | 79% | 2522 | 18% |
|  |  | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |