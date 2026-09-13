# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2753<sub>(+123) | 3063<sub>(+117) | 3123<sub>(+99) |  |
| 0.95 | 2026-04-23 | 2630<sub>(+33) | 2946<sub>(+14) | 3024<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2597 | 2932 | 3060 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:39:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2597, 2630, 2753]
  line "STC (8.0+0.08s)" [2597, 2630, 2753]
  line "LTC (60.0+0.60s)" [2932, 2946, 3063]
  line "" [3060, 3024, 3123]
  line "VLTC (2m24s+1.12s)" [3060, 3024, 3123]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 27 | 370 | 50% | 3123 | 54% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3063 | 28 | 376 | 50% | 3062 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2753 | 28 | 400 | 49% | 2761 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3024 | 29 | 370 | 51% | 3016 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 29 | 366 | 49% | 2954 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2630 | 29 | 398 | 52% | 2608 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3060 | 27 | 380 | 50% | 3059 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2932 | 28 | 382 | 53% | 2900 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2597 | 27 | 476 | 50% | 2579 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |