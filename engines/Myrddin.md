# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2585 | 3012 | 3096 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2853 | 3179 | 3243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-13 04:40:46

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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 27 | 382 | 50% | 3128 | 54% |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 46 | 128 | 48% | 3260 | 56% |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 35 | 258 | 59% | 2943 | 44% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 27 | 390 | 50% | 3069 | 49% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 40 | 184 | 53% | 3143 | 52% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 37 | 222 | 55% | 2936 | 45% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2753 | 28 | 418 | 48% | 2768 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2853 | 43 | 178 | 50% | 2851 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2585 | 30 | 354 | 43% | 2653 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 29 | 370 | 51% | 3021 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2951 | 29 | 366 | 49% | 2961 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2635 | 29 | 398 | 52% | 2614 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 27 | 380 | 50% | 3065 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 28 | 382 | 53% | 2907 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2603 | 27 | 476 | 50% | 2584 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |