# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-08-31 | 3194<sub>(+75) | 3347<sub>(-6) | 3434<sub>(+40) |  |
| 6.0.0 | 2026-08-19 | 3119<sub>(+118) | 3353<sub>(+35) | 3394<sub>(+16) |  |
| 5.8.3 | 2026-07-25 | 3001<sub>(+new) | 3318<sub>(+new) | 3378<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:40:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3001, 3119, 3194]
  line "STC (8.0+0.08s)" [3001, 3119, 3194]
  line "LTC (60.0+0.60s)" [3318, 3353, 3347]
  line "" [3378, 3394, 3434]
  line "VLTC (2m24s+1.12s)" [3378, 3394, 3434]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 95 | 26 | 52% | 3421 | 73% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 71 | 48 | 48% | 3363 | 75% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3194 | 61 | 72 | 47% | 3212 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 45 | 120 | 50% | 3391 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 39 | 160 | 50% | 3352 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3119 | 45 | 132 | 50% | 3116 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3378 | 33 | 228 | 48% | 3390 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3318 | 40 | 160 | 51% | 3310 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3001 | 38 | 188 | 54% | 2969 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |