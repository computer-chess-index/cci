# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3332<sub>(+7) | 3492<sub>(+6) | 3513<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3325<sub>(+112) | 3486<sub>(+75) | 3515<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3213 | 3411 | 3436 |  |
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

Generated: 2026-09-01 15:59:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3213, 3325, 3332]
  line "STC (8.0+0.08s)" [3213, 3325, 3332]
  line "LTC (60.0+0.60s)" [3411, 3486, 3492]
  line "" [3436, 3515, 3513]
  line "VLTC (2m24s+1.12s)" [3436, 3515, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 23 | 438 | 50% | 3514 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 23 | 448 | 50% | 3494 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3332 | 21 | 598 | 49% | 3335 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 12 | 1620 | 50% | 3514 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 12 | 1600 | 50% | 3484 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 13 | 1628 | 50% | 3328 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 32 | 236 | 51% | 3432 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 32 | 240 | 48% | 3422 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3213 | 27 | 408 | 53% | 3127 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |