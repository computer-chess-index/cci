# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3330<sub>(+5) | 3491<sub>(+7) | 3511<sub>(-3) |  |
| 6.0 | 2024-10-24 | 3325<sub>(+113) | 3484<sub>(+74) | 3514<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3212 | 3410 | 3436 |  |
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

Generated: 2026-08-29 06:29:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3212, 3325, 3330]
  line "STC (8.0+0.08s)" [3212, 3325, 3330]
  line "LTC (60.0+0.60s)" [3410, 3484, 3491]
  line "" [3436, 3514, 3511]
  line "VLTC (2m24s+1.12s)" [3436, 3514, 3511]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 23 | 434 | 50% | 3513 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 23 | 448 | 50% | 3492 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3330 | 21 | 594 | 49% | 3335 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 12 | 1620 | 50% | 3513 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 12 | 1600 | 50% | 3484 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 13 | 1628 | 50% | 3326 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 32 | 236 | 51% | 3430 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 32 | 240 | 48% | 3421 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3212 | 27 | 408 | 53% | 3125 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |