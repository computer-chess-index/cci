# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3341<sub>(+8) | 3503<sub>(+8) | 3524<sub>(0) |  |
| 6.0 | 2024-10-24 | 3333<sub>(+112) | 3495<sub>(+75) | 3524<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3221 | 3420 | 3445 |  |
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

Generated: 2026-10-08 04:43:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3221, 3333, 3341]
  line "STC (8.0+0.08s)" [3221, 3333, 3341]
  line "LTC (60.0+0.60s)" [3420, 3495, 3503]
  line "" [3445, 3524, 3524]
  line "VLTC (2m24s+1.12s)" [3445, 3524, 3524]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 22 | 458 | 50% | 3524 | 87% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 22 | 456 | 50% | 3503 | 86% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3341 | 20 | 620 | 50% | 3344 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 12 | 1620 | 50% | 3524 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 12 | 1600 | 50% | 3494 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 13 | 1628 | 50% | 3336 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3445 | 32 | 236 | 51% | 3440 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 32 | 240 | 48% | 3430 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3221 | 27 | 408 | 53% | 3135 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |