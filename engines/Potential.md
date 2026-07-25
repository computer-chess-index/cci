# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-05-16 | 2210<sub>(-319) | 2469<sub>(-378) | 2595<sub>(-340) |  |
| 3.0.0 | 2025-08-28 | 2529<sub>(+new) | 2847<sub>(+new) | 2935<sub>(+new) |  |
| 2.0.0 | 2025-04-08 |  |  |  |  |
| 1.0.0 | 2025-01-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-25 06:27:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "STC (8.0+0.08s)" [2529, 2210]
  line "STC (8.0+0.08s)" [2529, 2210]
  line "LTC (60.0+0.60s)" [2847, 2469]
  line "VLTC (2m24s+1.12s)" [2935, 2595]
  line "VLTC (2m24s+1.12s)" [2935, 2595]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 29 | 406 | 49% | 2610 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2469 | 28 | 412 | 50% | 2469 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2210 | 31 | 352 | 49% | 2207 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2935 | 28 | 404 | 49% | 2944 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2847 | 29 | 380 | 49% | 2857 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2529 | 27 | 452 | 49% | 2533 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |