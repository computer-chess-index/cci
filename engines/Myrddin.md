# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2651<sub>(+135) | 3069<sub>(+76) | 3146<sub>(+94) |  |
| 0.95 | 2026-04-23 | 2516 | 2993 | 3052 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2703<sub>(+193) | 3023<sub>(+75) | 3116<sub>(+69) |  |
| 0.95 | 2026-04-23 | 2510 | 2948 | 3047 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2753<sub>(+118) | 3070<sub>(+119) | 3129<sub>(+98) |  |
| 0.95 | 2026-04-23 | 2635<sub>(+32) | 2951<sub>(+13) | 3031<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2603 | 2938 | 3067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:40:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "E1: STC (8.0+0.08s)" [2516, 2651]
  line "E1: LTC (60.0+0.60s)" [2993, 3069]
  line "E1: VLTC (2m24s+1.12s)" [3052, 3146]
  line "P1: STC (8.0+0.08s)" [2510, 2703]
  line "P1: LTC (60.0+0.60s)" [2948, 3023]
  line "P1: VLTC (2m24s+1.12s)" [3047, 3116]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2600 --> 3200
  line "T1: STC (8.0+0.08s)" [2603, 2635, 2753]
  line "T1: LTC (60.0+0.60s)" [2938, 2951, 3070]
  line "T1: VLTC (2m24s+1.12s)" [3067, 3031, 3129]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3146 | 26 | 460 | 53% | 3083 | 47% |
|  |  | T1 | 3129 | 27 | 382 | 50% | 3128 | 54% |
|  |  | P1 | 3116 | 36 | 212 | 49% | 3129 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3069 | 28 | 380 | 53% | 3029 | 47% |
|  |  | T1 | 3070 | 27 | 390 | 50% | 3069 | 49% |
|  |  | P1 | 3023 | 29 | 350 | 50% | 3015 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2753 | 28 | 418 | 48% | 2768 | 35% |
|  |  | P1 | 2703 | 32 | 310 | 48% | 2723 | 38% |
|  |  | E1 | 2651 | 25 | 514 | 44% | 2714 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3031 | 29 | 370 | 51% | 3021 | 43% |
|  |  | P1 | 3047 | 76 | 56 | 46% | 3069 | 39% |
|  |  | E1 | 3052 | 62 | 74 | 45% | 3093 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2951 | 29 | 366 | 49% | 2961 | 41% |
|  |  | P1 | 2948 | 62 | 84 | 48% | 2963 | 36% |
|  |  | E1 | 2993 | 63 | 80 | 49% | 2990 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 29 | 398 | 52% | 2614 | 33% |
|  |  | P1 | 2510 | 66 | 84 | 52% | 2479 | 31% |
|  |  | E1 | 2516 | 57 | 104 | 45% | 2556 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3067 | 27 | 380 | 50% | 3065 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2938 | 28 | 382 | 53% | 2907 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2603 | 27 | 476 | 50% | 2584 | 31% |