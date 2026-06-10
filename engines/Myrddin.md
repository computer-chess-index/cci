# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2777<sub>(+162) | 3046<sub>(+119) | 3121<sub>(+115) |  |
| 0.95 | 2026-04-23 | 2615<sub>(+31) | 2927<sub>(+12) | 3006<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2584<sub>(+new) | 2915<sub>(+new) | 3042<sub>(+new) |  |
| 0.93 | 2025-04-23 |  |  |  |  |
| 0.92 | 2024-12-08 |  |  |  |  |
| 0.91 | 2024-10-19 |  |  |  |  |
| 0.90 | 2023-06-12 |  |  |  |  |
| 0.89 | 2023-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-10 06:26:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2584, 2615, 2777]
  line "STC (8.0+0.08s)" [2584, 2615, 2777]
  line "LTC (60.0+0.60s)" [2915, 2927, 3046]
  line "VLTC (2m24s+1.12s)" [3042, 3006, 3121]
  line "VLTC (2m24s+1.12s)" [3042, 3006, 3121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 39 | 180 | 53% | 3094 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3046 | 42 | 168 | 51% | 3033 | 47% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2777 | 46 | 152 | 51% | 2769 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3006 | 29 | 370 | 51% | 2997 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2927 | 29 | 366 | 49% | 2936 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2615 | 29 | 398 | 52% | 2595 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 27 | 380 | 50% | 3040 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2915 | 28 | 382 | 53% | 2882 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2584 | 27 | 476 | 50% | 2566 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |