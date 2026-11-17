# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2651<sub>(+131) | 3073<sub>(+77) | 3158<sub>(+99) |  |
| 0.95 | 2026-04-23 | 2520 | 2996 | 3059 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2678<sub>(+193) | 2997<sub>(+90) | 3086<sub>(+53) |  |
| 0.95 | 2026-04-23 | 2485 | 2907 | 3033 |  |
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

Generated: 2026-11-17 05:40:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.95", "0.96"]
  y-axis "Elo Rating" 2400 --> 3200
  line "E1: STC (8.0+0.08s)" [2520, 2651]
  line "E1: LTC (60.0+0.60s)" [2996, 3073]
  line "E1: VLTC (2m24s+1.12s)" [3059, 3158]
  line "P1: STC (8.0+0.08s)" [2485, 2678]
  line "P1: LTC (60.0+0.60s)" [2907, 2997]
  line "P1: VLTC (2m24s+1.12s)" [3033, 3086]
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
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3086 | 37 | 208 | 48% | 3105 | 55% |
|  |  | E1 | 3158 | 27 | 440 | 53% | 3087 | 47% |
|  |  | T1 | 3129 | 27 | 382 | 50% | 3128 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3073 | 29 | 356 | 52% | 3033 | 46% |
|  |  | T1 | 3070 | 27 | 390 | 50% | 3069 | 49% |
|  |  | P1 | 2997 | 29 | 338 | 50% | 2992 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2651 | 26 | 492 | 43% | 2720 | 35% |
|  |  | T1 | 2753 | 28 | 418 | 48% | 2768 | 35% |
|  |  | P1 | 2678 | 33 | 294 | 47% | 2703 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3031 | 29 | 370 | 51% | 3021 | 43% |
|  |  | P1 | 3033 | 82 | 48 | 47% | 3048 | 40% |
|  |  | E1 | 3059 | 62 | 74 | 45% | 3098 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2951 | 29 | 366 | 49% | 2961 | 41% |
|  |  | P1 | 2907 | 73 | 60 | 45% | 2943 | 37% |
|  |  | E1 | 2996 | 63 | 80 | 49% | 2994 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 29 | 398 | 52% | 2614 | 33% |
|  |  | P1 | 2485 | 72 | 70 | 52% | 2458 | 33% |
|  |  | E1 | 2520 | 57 | 104 | 45% | 2560 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3067 | 27 | 380 | 50% | 3065 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2938 | 28 | 382 | 53% | 2907 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2603 | 27 | 476 | 50% | 2584 | 31% |