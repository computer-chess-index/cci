# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.95 | 2026-04-23 | 2637<sub>(+34) | 2944<sub>(+10) | 3025<sub>(-37) |  |
| 0.94 | 2025-12-11 | 2603<sub>(+new) | 2934<sub>(+new) | 3062<sub>(+new) |  |
| 0.93 | 2025-04-23 |  |  |  |  |
| 0.92 | 2024-12-08 |  |  |  |  |
| 0.91 | 2024-10-19 |  |  |  |  |
| 0.90 | 2023-06-12 |  |  |  |  |
| 0.89 | 2023-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.95" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95"]
  y-axis "Elo Rating" 2600 --> 3100
  line "STC (8.0+0.08s)" [2603, 2637]
  line "STC (8.0+0.08s)" [2603, 2637]
  line "LTC (60.0+0.60s)" [2934, 2944]
  line "VLTC (2m24s+1.12s)" [3062, 3025]
  line "VLTC (2m24s+1.12s)" [3062, 3025]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 30 | 342 | 51% | 3016 | 42% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 30 | 330 | 49% | 2957 | 40% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2637 | 29 | 382 | 52% | 2611 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3062 | 27 | 380 | 50% | 3060 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 28 | 382 | 53% | 2903 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2603 | 27 | 476 | 50% | 2585 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |