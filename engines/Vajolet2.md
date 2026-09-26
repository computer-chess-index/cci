# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2863<sub>(+28) | 3136<sub>(+78) | 3185<sub>(+48) |  |
| 3.1 | 2026-04-03 | 2835<sub>(+100) | 3058<sub>(+58) | 3137<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2735 | 3000 | 3075 |  |
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

Generated: 2026-09-26 04:43:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "" [2735, 2835, 2863]
  line "STC (8.0+0.08s)" [2735, 2835, 2863]
  line "LTC (60.0+0.60s)" [3000, 3058, 3136]
  line "" [3075, 3137, 3185]
  line "VLTC (2m24s+1.12s)" [3075, 3137, 3185]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 27 | 382 | 50% | 3189 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 27 | 396 | 51% | 3129 | 49% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2863 | 25 | 484 | 50% | 2866 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 29 | 352 | 50% | 3139 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3058 | 27 | 406 | 50% | 3055 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2835 | 28 | 384 | 50% | 2831 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3075 | 31 | 318 | 52% | 3056 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3000 | 29 | 344 | 52% | 2978 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2735 | 29 | 386 | 52% | 2704 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |