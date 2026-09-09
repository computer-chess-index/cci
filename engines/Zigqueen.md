# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-09-03 | 3155<sub>(-38) | 3424<sub>(+81) | 3470<sub>(-14) |  |
| 6.1.0 | 2026-08-31 | 3193<sub>(+74) | 3343<sub>(-12) | 3484<sub>(+89) |  |
| 6.0.0 | 2026-08-19 | 3119<sub>(+117) | 3355<sub>(+35) | 3395<sub>(+16) |  |
| 5.8.3 | 2026-07-25 | 3002<sub>(+new) | 3320<sub>(+new) | 3379<sub>(+new) |  |
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

Generated: 2026-09-09 04:45:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3002, 3119, 3193, 3155]
  line "STC (8.0+0.08s)" [3002, 3119, 3193, 3155]
  line "LTC (60.0+0.60s)" [3320, 3355, 3343, 3424]
  line "" [3379, 3395, 3484, 3470]
  line "VLTC (2m24s+1.12s)" [3379, 3395, 3484, 3470]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 47 | 104 | 50% | 3467 | 84% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 36 | 188 | 47% | 3441 | 78% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3155 | 38 | 192 | 51% | 3148 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 41 | 140 | 53% | 3465 | 81% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 47 | 112 | 49% | 3349 | 73% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3193 | 44 | 136 | 49% | 3202 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 45 | 120 | 50% | 3393 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 39 | 160 | 50% | 3353 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3119 | 45 | 132 | 50% | 3116 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 33 | 228 | 48% | 3391 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3320 | 40 | 160 | 51% | 3312 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3002 | 38 | 188 | 54% | 2970 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |