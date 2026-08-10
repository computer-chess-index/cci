# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2745<sub>(+126) | 3051<sub>(+117) | 3109<sub>(+97) |  |
| 0.95 | 2026-04-23 | 2619<sub>(+32) | 2934<sub>(+14) | 3012<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2587 | 2920 | 3048 |  |
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

Generated: 2026-08-10 07:04:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2619, 2745]
  line "STC (8.0+0.08s)" [2587, 2619, 2745]
  line "LTC (60.0+0.60s)" [2920, 2934, 3051]
  line "VLTC (2m24s+1.12s)" [3048, 3012, 3109]
  line "VLTC (2m24s+1.12s)" [3048, 3012, 3109]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3109 | 30 | 314 | 50% | 3109 | 52% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3051 | 30 | 324 | 50% | 3047 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2745 | 29 | 368 | 49% | 2755 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 29 | 370 | 51% | 3004 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 29 | 366 | 49% | 2943 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2619 | 29 | 398 | 52% | 2597 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 27 | 380 | 50% | 3047 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 28 | 382 | 53% | 2889 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2587 | 27 | 476 | 50% | 2568 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |