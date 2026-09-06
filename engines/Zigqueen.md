# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-09-03 | 3120<sub>(-71) | 3428<sub>(+87) | 3464<sub>(-18) |  |
| 6.1.0 | 2026-08-31 | 3191<sub>(+74) | 3341<sub>(-12) | 3482<sub>(+88) |  |
| 6.0.0 | 2026-08-19 | 3117<sub>(+116) | 3353<sub>(+36) | 3394<sub>(+18) |  |
| 5.8.3 | 2026-07-25 | 3001<sub>(+new) | 3317<sub>(+new) | 3376<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:30:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3001, 3117, 3191, 3120]
  line "STC (8.0+0.08s)" [3001, 3117, 3191, 3120]
  line "LTC (60.0+0.60s)" [3317, 3353, 3341, 3428]
  line "" [3376, 3394, 3482, 3464]
  line "VLTC (2m24s+1.12s)" [3376, 3394, 3482, 3464]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3464 | 52 | 88 | 50% | 3465 | 82% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3428 | 52 | 92 | 45% | 3459 | 71% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3120 | 47 | 128 | 47% | 3147 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 41 | 140 | 53% | 3463 | 81% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3341 | 47 | 112 | 49% | 3348 | 73% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3191 | 44 | 136 | 49% | 3200 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 45 | 120 | 50% | 3390 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 39 | 160 | 50% | 3352 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3117 | 45 | 132 | 50% | 3114 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3376 | 33 | 228 | 48% | 3390 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3317 | 40 | 160 | 51% | 3309 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3001 | 38 | 188 | 54% | 2969 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |