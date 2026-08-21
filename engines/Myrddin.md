# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2746<sub>(+124) | 3055<sub>(+117) | 3112<sub>(+96) |  |
| 0.95 | 2026-04-23 | 2622<sub>(+33) | 2938<sub>(+14) | 3016<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2589 | 2924 | 3052 |  |
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

Generated: 2026-08-21 06:28:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2589, 2622, 2746]
  line "STC (8.0+0.08s)" [2589, 2622, 2746]
  line "LTC (60.0+0.60s)" [2924, 2938, 3055]
  line "VLTC (2m24s+1.12s)" [3052, 3016, 3112]
  line "VLTC (2m24s+1.12s)" [3052, 3016, 3112]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 29 | 330 | 50% | 3114 | 52% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3055 | 29 | 336 | 50% | 3051 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2746 | 29 | 380 | 49% | 2757 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 29 | 370 | 51% | 3008 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 29 | 366 | 49% | 2946 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2622 | 29 | 398 | 52% | 2601 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 27 | 380 | 50% | 3051 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2924 | 28 | 382 | 53% | 2893 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2589 | 27 | 476 | 50% | 2572 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |