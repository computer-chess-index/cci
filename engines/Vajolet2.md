# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2858<sub>(+27) | 3131<sub>(+77) | 3181<sub>(+48) |  |
| 3.1 | 2026-04-03 | 2831<sub>(+100) | 3054<sub>(+58) | 3133<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2731 | 2996 | 3071 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:43:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "" [2731, 2831, 2858]
  line "STC (8.0+0.08s)" [2731, 2831, 2858]
  line "LTC (60.0+0.60s)" [2996, 3054, 3131]
  line "" [3071, 3133, 3181]
  line "VLTC (2m24s+1.12s)" [3071, 3133, 3181]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 27 | 378 | 49% | 3185 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 27 | 392 | 51% | 3125 | 49% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2858 | 25 | 476 | 50% | 2863 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3133 | 29 | 352 | 50% | 3135 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 27 | 406 | 50% | 3051 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2831 | 28 | 384 | 50% | 2828 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3071 | 31 | 318 | 52% | 3054 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2996 | 29 | 344 | 52% | 2975 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2731 | 29 | 386 | 52% | 2700 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |