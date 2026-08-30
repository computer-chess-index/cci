# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3148<sub>(-3) | 3382<sub>(+20) | 3430<sub>(+13) |  |
| 8.2 | 2026-03-23 | 3151<sub>(-26) | 3362<sub>(-6) | 3417<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3177<sub>(+38) | 3368<sub>(-12) | 3429<sub>(+11) |  |
| 8.0 | 2026-03-10 | 3139 | 3380 | 3418 |  |
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

Generated: 2026-08-30 15:46:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3139, 3177, 3151, 3148]
  line "STC (8.0+0.08s)" [3139, 3177, 3151, 3148]
  line "LTC (60.0+0.60s)" [3380, 3368, 3362, 3382]
  line "" [3418, 3429, 3417, 3430]
  line "VLTC (2m24s+1.12s)" [3418, 3429, 3417, 3430]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 22 | 522 | 49% | 3436 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 23 | 494 | 48% | 3394 | 67% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3148 | 25 | 464 | 51% | 3139 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 26 | 380 | 49% | 3425 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 31 | 284 | 50% | 3360 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3151 | 27 | 396 | 48% | 3164 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 28 | 324 | 49% | 3434 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 30 | 290 | 51% | 3363 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3177 | 31 | 302 | 49% | 3185 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 28 | 308 | 50% | 3416 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 28 | 332 | 50% | 3379 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3139 | 31 | 300 | 49% | 3144 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |