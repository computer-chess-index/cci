# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2751<sub>(+118) | 3067<sub>(+117) | 3125<sub>(+97) |  |
| 0.95 | 2026-04-23 | 2633<sub>(+33) | 2950<sub>(+15) | 3028<sub>(-37) |  |
| 0.94 | 2025-12-11 | 2600 | 2935 | 3065 |  |
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

Generated: 2026-10-01 04:40:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2600, 2633, 2751]
  line "STC (8.0+0.08s)" [2600, 2633, 2751]
  line "LTC (60.0+0.60s)" [2935, 2950, 3067]
  line "" [3065, 3028, 3125]
  line "VLTC (2m24s+1.12s)" [3065, 3028, 3125]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3125 | 27 | 378 | 50% | 3127 | 54% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 27 | 388 | 50% | 3066 | 49% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2751 | 28 | 414 | 48% | 2765 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3028 | 29 | 370 | 51% | 3020 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2950 | 29 | 366 | 49% | 2958 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2633 | 29 | 398 | 52% | 2612 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3065 | 27 | 380 | 50% | 3063 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 28 | 382 | 53% | 2904 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2600 | 27 | 476 | 50% | 2583 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |