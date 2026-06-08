# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3314<sub>(+6) | 3470<sub>(+3) | 3492<sub>(-3) |  |
| 6.0 | 2024-10-24 | 3308<sub>(+113) | 3467<sub>(+76) | 3495<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3195<sub>(+new) | 3391<sub>(+new) | 3417<sub>(+new) |  |
| 4.0 | 2024-01-22 |  |  |  |  |
| 3.0 | 2023-11-25 |  |  |  |  |
| 2.1 | 2023-10-22 |  |  |  |  |
| 1.0 | 2023-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:28:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3195, 3308, 3314]
  line "STC (8.0+0.08s)" [3195, 3308, 3314]
  line "LTC (60.0+0.60s)" [3391, 3467, 3470]
  line "VLTC (2m24s+1.12s)" [3417, 3495, 3492]
  line "VLTC (2m24s+1.12s)" [3417, 3495, 3492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 25 | 356 | 50% | 3495 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 25 | 372 | 49% | 3474 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3314 | 23 | 492 | 49% | 3317 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 12 | 1620 | 50% | 3494 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 12 | 1600 | 50% | 3465 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 13 | 1628 | 50% | 3309 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 32 | 236 | 51% | 3413 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3391 | 32 | 240 | 48% | 3403 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3195 | 27 | 408 | 53% | 3110 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |