# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2743<sub>(+123) | 3052<sub>(+116) | 3112<sub>(+97) |  |
| 0.95 | 2026-04-23 | 2620<sub>(+32) | 2936<sub>(+13) | 3015<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2588 | 2923 | 3051 |  |
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

Generated: 2026-08-18 06:27:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2588, 2620, 2743]
  line "STC (8.0+0.08s)" [2588, 2620, 2743]
  line "LTC (60.0+0.60s)" [2923, 2936, 3052]
  line "VLTC (2m24s+1.12s)" [3051, 3015, 3112]
  line "VLTC (2m24s+1.12s)" [3051, 3015, 3112]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 30 | 322 | 50% | 3113 | 52% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3052 | 30 | 332 | 50% | 3050 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2743 | 29 | 376 | 48% | 2757 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 29 | 370 | 51% | 3005 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 29 | 366 | 49% | 2944 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2620 | 29 | 398 | 52% | 2600 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3051 | 27 | 380 | 50% | 3050 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2923 | 28 | 382 | 53% | 2892 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2588 | 27 | 476 | 50% | 2570 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |