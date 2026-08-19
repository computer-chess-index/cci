# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3356<sub>(+74) | 3519<sub>(+54) | 3545<sub>(+24) |  |
| 15.0.0 | 2025-09-01 | 3282 | 3465 | 3521 |  |
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

Generated: 2026-08-19 06:25:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3282, 3356]
  line "STC (8.0+0.08s)" [3282, 3356]
  line "LTC (60.0+0.60s)" [3465, 3519]
  line "VLTC (2m24s+1.12s)" [3521, 3545]
  line "VLTC (2m24s+1.12s)" [3521, 3545]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 21 | 506 | 50% | 3545 | 87% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 21 | 520 | 50% | 3518 | 86% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3356 | 20 | 586 | 49% | 3359 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 27 | 324 | 52% | 3503 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 30 | 276 | 52% | 3447 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3282 | 32 | 256 | 54% | 3243 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |