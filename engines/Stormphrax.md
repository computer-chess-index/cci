# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3410<sub>(+51) | 3555<sub>(+29) | 3586<sub>(+22) |  |
| 7.0.0 | 2025-06-24 | 3359<sub>(+51) | 3526<sub>(+40) | 3564<sub>(+49) |  |
| 6.0.0 | 2024-10-29 | 3308<sub>(+99) | 3486<sub>(+77) | 3515<sub>(+68) |  |
| 5.0.0 | 2024-06-26 | 3209 | 3409 | 3447 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:42:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3209, 3308, 3359, 3410]
  line "STC (8.0+0.08s)" [3209, 3308, 3359, 3410]
  line "LTC (60.0+0.60s)" [3409, 3486, 3526, 3555]
  line "" [3447, 3515, 3564, 3586]
  line "VLTC (2m24s+1.12s)" [3447, 3515, 3564, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 26 | 326 | 51% | 3580 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 24 | 380 | 50% | 3553 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3410 | 25 | 396 | 50% | 3410 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 18 | 722 | 51% | 3560 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 17 | 824 | 51% | 3522 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 17 | 930 | 51% | 3352 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 14 | 1184 | 50% | 3514 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 14 | 1228 | 50% | 3488 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 15 | 1188 | 50% | 3305 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 32 | 248 | 51% | 3440 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 27 | 340 | 54% | 3376 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3209 | 29 | 332 | 48% | 3225 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |