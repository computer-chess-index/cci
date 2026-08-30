# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3348<sub>(+50) | 3517<sub>(+45) | 3549<sub>(+36) |  |
| 2.0 | 2025-05-21 | 3298 | 3472 | 3513 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quanticade+<version>&body=###%20Engine%20name%0AQuanticade%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:12:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3298, 3348]
  line "STC (8.0+0.08s)" [3298, 3348]
  line "LTC (60.0+0.60s)" [3472, 3517]
  line "" [3513, 3549]
  line "VLTC (2m24s+1.12s)" [3513, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 22 | 476 | 51% | 3542 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 22 | 474 | 50% | 3515 | 87% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 20 | 658 | 50% | 3344 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 26 | 340 | 50% | 3510 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 26 | 352 | 50% | 3470 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 25 | 414 | 52% | 3285 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |