# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3360<sub>(+74) | 3524<sub>(+54) | 3549<sub>(+24) |  |
| 15.0.0 | 2025-09-01 | 3286 | 3470 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:25:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3286, 3360]
  line "STC (8.0+0.08s)" [3286, 3360]
  line "LTC (60.0+0.60s)" [3470, 3524]
  line "VLTC (2m24s+1.12s)" [3525, 3549]
  line "VLTC (2m24s+1.12s)" [3525, 3549]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 21 | 514 | 50% | 3549 | 88% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 21 | 520 | 50% | 3522 | 86% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3360 | 20 | 594 | 49% | 3363 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 27 | 324 | 52% | 3507 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 30 | 276 | 52% | 3451 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3286 | 32 | 256 | 54% | 3247 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |