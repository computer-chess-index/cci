# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.95 | 2026-04-23 | 2688<sub>(+42) | 2994<sub>(+16) | 3070<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2646<sub>(+new) | 2978<sub>(+new) | 3106<sub>(+new) |  |
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

Generated: 2026-05-06 06:26:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2646, 2688]
  line "STC (8.0+0.08s)" [2646, 2688]
  line "LTC (60.0+0.60s)" [2978, 2994]
  line "VLTC (2m24s+1.12s)" [3106, 3070]
  line "VLTC (2m24s+1.12s)" [3106, 3070]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3070 | 32 | 298 | 52% | 3052 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 32 | 302 | 49% | 3000 | 40% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2688 | 30 | 364 | 53% | 2654 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3106 | 27 | 380 | 50% | 3105 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2978 | 28 | 382 | 53% | 2946 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2646 | 27 | 476 | 50% | 2627 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |