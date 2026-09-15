# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3337<sub>(+8) | 3497<sub>(+7) | 3519<sub>(0) |  |
| 6.0 | 2024-10-24 | 3329<sub>(+113) | 3490<sub>(+74) | 3519<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3216 | 3416 | 3440 |  |
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

Generated: 2026-09-15 04:42:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3216, 3329, 3337]
  line "STC (8.0+0.08s)" [3216, 3329, 3337]
  line "LTC (60.0+0.60s)" [3416, 3490, 3497]
  line "" [3440, 3519, 3519]
  line "VLTC (2m24s+1.12s)" [3440, 3519, 3519]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 23 | 446 | 50% | 3519 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 23 | 452 | 50% | 3498 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3337 | 20 | 620 | 50% | 3339 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 12 | 1620 | 50% | 3518 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 12 | 1600 | 50% | 3488 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 13 | 1628 | 50% | 3330 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 32 | 236 | 51% | 3436 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 32 | 240 | 48% | 3426 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3216 | 27 | 408 | 53% | 3129 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |