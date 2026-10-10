# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2577 | 2990 | 3092 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2911 | 3221 | 3285 |  |
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

Generated: 2026-10-10 04:40:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2603, 2635, 2753]
  line "STC (8.0+0.08s)" [2603, 2635, 2753]
  line "LTC (60.0+0.60s)" [2938, 2951, 3070]
  line "" [3067, 3031, 3129]
  line "VLTC (2m24s+1.12s)" [3067, 3031, 3129]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 27 | 382 | 50% | 3128 | 54% |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3285 | 48 | 116 | 47% | 3309 | 58% |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 37 | 236 | 61% | 2916 | 45% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 27 | 390 | 50% | 3069 | 49% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3221 | 41 | 176 | 52% | 3189 | 51% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 39 | 204 | 55% | 2915 | 44% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2753 | 28 | 418 | 48% | 2768 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2911 | 44 | 172 | 51% | 2904 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2577 | 30 | 350 | 42% | 2645 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 29 | 370 | 51% | 3021 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2951 | 29 | 366 | 49% | 2961 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2635 | 29 | 398 | 52% | 2614 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 27 | 380 | 50% | 3065 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 28 | 382 | 53% | 2907 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2603 | 27 | 476 | 50% | 2584 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |