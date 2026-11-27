# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2651<sub>(+139) | 3062<sub>(+69) | 3146<sub>(+122) |  |
| 0.95 | 2026-04-23 | 2512 | 2993 | 3024 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2711<sub>(+178) | 3032<sub>(+65) | 3128<sub>(+80) |  |
| 0.95 | 2026-04-23 | 2533 | 2967 | 3048 |  |
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

Generated: 2026-11-27 05:40:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "E1: STC (8.0+0.08s)" [2512, 2651]
  line "E1: LTC (60.0+0.60s)" [2993, 3062]
  line "E1: VLTC (2m24s+1.12s)" [3024, 3146]
  line "P1: STC (8.0+0.08s)" [2533, 2711]
  line "P1: LTC (60.0+0.60s)" [2967, 3032]
  line "P1: VLTC (2m24s+1.12s)" [3048, 3128]
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
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3128 | 36 | 216 | 49% | 3143 | 54% |
|  |  | E1 | 3146 | 26 | 460 | 53% | 3082 | 47% |
|  |  | T1 | 3129 | 27 | 382 | 50% | 3128 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3032 | 28 | 374 | 49% | 3029 | 50% |
|  |  | E1 | 3062 | 28 | 388 | 52% | 3028 | 47% |
|  |  | T1 | 3070 | 27 | 390 | 50% | 3069 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2711 | 31 | 328 | 48% | 2732 | 38% |
|  |  | E1 | 2651 | 25 | 538 | 44% | 2716 | 34% |
|  |  | T1 | 2753 | 28 | 418 | 48% | 2768 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3031 | 29 | 370 | 51% | 3021 | 43% |
|  |  | P1 | 3048 | 72 | 60 | 46% | 3077 | 42% |
|  |  | E1 | 3024 | 50 | 116 | 44% | 3077 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2951 | 29 | 366 | 49% | 2961 | 41% |
|  |  | P1 | 2967 | 57 | 96 | 48% | 2978 | 36% |
|  |  | E1 | 2993 | 52 | 114 | 50% | 2992 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 29 | 398 | 52% | 2614 | 33% |
|  |  | P1 | 2533 | 61 | 100 | 53% | 2495 | 28% |
|  |  | E1 | 2512 | 54 | 116 | 45% | 2553 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3067 | 27 | 380 | 50% | 3065 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2938 | 28 | 382 | 53% | 2907 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2603 | 27 | 476 | 50% | 2584 | 31% |