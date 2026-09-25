# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3159<sub>(+1) | 3389<sub>(+19) | 3441<sub>(+15) |  |
| 8.2 | 2026-03-23 | 3158<sub>(-25) | 3370<sub>(-8) | 3426<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3183<sub>(+37) | 3378<sub>(-11) | 3438<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3146 | 3389 | 3426 |  |
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

Generated: 2026-09-25 04:35:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3146, 3183, 3158, 3159]
  line "STC (8.0+0.08s)" [3146, 3183, 3158, 3159]
  line "LTC (60.0+0.60s)" [3389, 3378, 3370, 3389]
  line "" [3426, 3438, 3426, 3441]
  line "VLTC (2m24s+1.12s)" [3426, 3438, 3426, 3441]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 22 | 530 | 49% | 3445 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3389 | 23 | 510 | 48% | 3402 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3159 | 24 | 496 | 52% | 3146 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 26 | 380 | 49% | 3433 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 31 | 284 | 50% | 3368 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3158 | 27 | 396 | 48% | 3171 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 28 | 324 | 49% | 3443 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 30 | 290 | 51% | 3372 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3183 | 31 | 302 | 49% | 3191 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 28 | 308 | 50% | 3424 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3389 | 28 | 332 | 50% | 3387 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3146 | 31 | 300 | 49% | 3151 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |