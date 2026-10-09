# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3374<sub>(+210) | 3533<sub>(+153) | 3538<sub>(+102) |  |
| 6.0.0 | 2026-04-25 | 3164<sub>(+23) | 3380<sub>(+52) | 3436<sub>(+39) |  |
| 5.0.0 | 2026-02-13 | 3141<sub>(+60) | 3328<sub>(+43) | 3397<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3081<sub>(+95) | 3285<sub>(+65) | 3308<sub>(+52) |  |
| 3.0.0 | 2025-10-20 | 2986 | 3220 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:40:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2986, 3081, 3141, 3164, 3374]
  line "STC (8.0+0.08s)" [2986, 3081, 3141, 3164, 3374]
  line "LTC (60.0+0.60s)" [3220, 3285, 3328, 3380, 3533]
  line "" [3256, 3308, 3397, 3436, 3538]
  line "VLTC (2m24s+1.12s)" [3256, 3308, 3397, 3436, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 29 | 280 | 50% | 3541 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 30 | 260 | 51% | 3526 | 80% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 27 | 350 | 48% | 3387 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 23 | 450 | 49% | 3441 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 24 | 432 | 50% | 3380 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3164 | 27 | 382 | 49% | 3174 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 24 | 414 | 50% | 3398 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3328 | 26 | 382 | 51% | 3320 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3141 | 25 | 444 | 51% | 3137 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3308 | 30 | 276 | 51% | 3298 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3285 | 31 | 268 | 48% | 3298 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3081 | 33 | 252 | 51% | 3052 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 37 | 184 | 50% | 3258 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3220 | 32 | 252 | 48% | 3235 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2986 | 34 | 240 | 48% | 2998 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |