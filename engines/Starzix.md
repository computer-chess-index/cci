# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3339<sub>(+10) | 3498<sub>(+7) | 3521<sub>(+2) |  |
| 6.0 | 2024-10-24 | 3329<sub>(+112) | 3491<sub>(+75) | 3519<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3217 | 3416 | 3441 |  |
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

Generated: 2026-09-21 04:42:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3217, 3329, 3339]
  line "STC (8.0+0.08s)" [3217, 3329, 3339]
  line "LTC (60.0+0.60s)" [3416, 3491, 3498]
  line "" [3441, 3519, 3521]
  line "VLTC (2m24s+1.12s)" [3441, 3519, 3521]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 23 | 450 | 50% | 3519 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 23 | 452 | 50% | 3499 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3339 | 20 | 620 | 50% | 3340 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 12 | 1620 | 50% | 3519 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 12 | 1600 | 50% | 3490 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 13 | 1628 | 50% | 3332 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 32 | 236 | 51% | 3436 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 32 | 240 | 48% | 3426 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3217 | 27 | 408 | 53% | 3131 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |