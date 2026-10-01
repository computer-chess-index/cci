# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-09-25 | 3218<sub>(+new) | 3486<sub>(+new) | 3563<sub>(+new) |  |
| 6.2.0 | 2026-09-09 |  |  |  |  |
| 6.1.1 | 2026-09-03 | 3170<sub>(-27) | 3430<sub>(+82) | 3475<sub>(-15) |  |
| 6.1.0 | 2026-08-31 | 3197<sub>(+74) | 3348<sub>(-14) | 3490<sub>(+89) |  |
| 6.0.0 | 2026-08-19 | 3123<sub>(+117) | 3362<sub>(+38) | 3401<sub>(+17) |  |
| 5.8.3 | 2026-07-25 | 3006<sub>(+new) | 3324<sub>(+new) | 3384<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:44:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1", "6.3.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3006, 3123, 3197, 3170, 3218]
  line "STC (8.0+0.08s)" [3006, 3123, 3197, 3170, 3218]
  line "LTC (60.0+0.60s)" [3324, 3362, 3348, 3430, 3486]
  line "" [3384, 3401, 3490, 3475, 3563]
  line "VLTC (2m24s+1.12s)" [3384, 3401, 3490, 3475, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 81 | 36 | 53% | 3544 | 78% |
| 6.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 77 | 40 | 53% | 3467 | 75% |
| 6.3.0 | STC <sub>(8.0+0.08s)</sub> | 3218 | 95 | 28 | 54% | 3191 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 45 | 114 | 50% | 3472 | 85% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 35 | 200 | 48% | 3444 | 78% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3170 | 34 | 240 | 52% | 3158 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 41 | 140 | 53% | 3471 | 81% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3348 | 47 | 112 | 49% | 3355 | 73% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3197 | 44 | 136 | 49% | 3206 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 45 | 120 | 50% | 3398 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 39 | 160 | 50% | 3359 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 45 | 132 | 50% | 3120 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 33 | 228 | 48% | 3397 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3324 | 40 | 160 | 51% | 3316 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3006 | 38 | 188 | 54% | 2975 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |