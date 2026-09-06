# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3394<sub>(+109) | 3541<sub>(+63) | 3549<sub>(+34) |  |
| 6.1.1 | 2025-07-21 | 3285 | 3478 | 3515 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3285, 3394]
  line "STC (8.0+0.08s)" [3285, 3394]
  line "LTC (60.0+0.60s)" [3478, 3541]
  line "" [3515, 3549]
  line "VLTC (2m24s+1.12s)" [3515, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 29 | 280 | 49% | 3559 | 89% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 29 | 272 | 51% | 3536 | 87% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3394 | 26 | 370 | 50% | 3393 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 23 | 420 | 52% | 3499 | 87% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 25 | 400 | 51% | 3465 | 81% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3285 | 23 | 514 | 51% | 3270 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |