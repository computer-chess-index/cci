# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2741<sub>(+123) | 3048<sub>(+114) | 3114<sub>(+102) |  |
| 0.95 | 2026-04-23 | 2618<sub>(+33) | 2934<sub>(+14) | 3012<sub>(-35) |  |
| 0.94 | 2025-12-11 | 2585<sub>(+new) | 2920<sub>(+new) | 3047<sub>(+new) |  |
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

Generated: 2026-07-29 06:27:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2585, 2618, 2741]
  line "STC (8.0+0.08s)" [2585, 2618, 2741]
  line "LTC (60.0+0.60s)" [2920, 2934, 3048]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3114]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3114]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 31 | 286 | 51% | 3109 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3048 | 31 | 300 | 51% | 3043 | 47% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2741 | 30 | 356 | 48% | 2754 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 29 | 370 | 51% | 3002 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 29 | 366 | 49% | 2942 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2618 | 29 | 398 | 52% | 2596 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 27 | 380 | 50% | 3046 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 28 | 382 | 53% | 2888 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2585 | 27 | 476 | 50% | 2568 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |