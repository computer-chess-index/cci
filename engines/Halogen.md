# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3352<sub>(+76) | 3513<sub>(+53) | 3538<sub>(+23) |  |
| 15.0.0 | 2025-09-01 | 3276 | 3460 | 3515 |  |
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

Generated: 2026-08-06 08:26:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3276, 3352]
  line "STC (8.0+0.08s)" [3276, 3352]
  line "LTC (60.0+0.60s)" [3460, 3513]
  line "VLTC (2m24s+1.12s)" [3515, 3538]
  line "VLTC (2m24s+1.12s)" [3515, 3538]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 22 | 494 | 50% | 3540 | 87% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 21 | 508 | 50% | 3513 | 86% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 21 | 570 | 50% | 3353 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 27 | 324 | 52% | 3498 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 30 | 276 | 52% | 3441 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3276 | 32 | 256 | 54% | 3237 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |