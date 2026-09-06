# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3155<sub>(+3) | 3383<sub>(+20) | 3433<sub>(+15) |  |
| 8.2 | 2026-03-23 | 3152<sub>(-26) | 3363<sub>(-8) | 3418<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3178<sub>(+39) | 3371<sub>(-11) | 3430<sub>(+10) |  |
| 8.0 | 2026-03-10 | 3139 | 3382 | 3420 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:21:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3139, 3178, 3152, 3155]
  line "STC (8.0+0.08s)" [3139, 3178, 3152, 3155]
  line "LTC (60.0+0.60s)" [3382, 3371, 3363, 3383]
  line "" [3420, 3430, 3418, 3433]
  line "VLTC (2m24s+1.12s)" [3420, 3430, 3418, 3433]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 22 | 530 | 49% | 3437 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 23 | 502 | 49% | 3395 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3155 | 25 | 476 | 52% | 3140 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 26 | 380 | 49% | 3426 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 31 | 284 | 50% | 3362 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3152 | 27 | 396 | 48% | 3166 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 28 | 324 | 49% | 3436 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 30 | 290 | 51% | 3364 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3178 | 31 | 302 | 49% | 3185 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 28 | 308 | 50% | 3417 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 28 | 332 | 50% | 3380 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3139 | 31 | 300 | 49% | 3144 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |