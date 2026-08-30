# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-08-19 | 3117<sub>(+119) | 3352<sub>(+36) | 3393<sub>(+18) |  |
| 5.8.3 | 2026-07-25 | 2998<sub>(+new) | 3316<sub>(+new) | 3375<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:15:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2998, 3117]
  line "STC (8.0+0.08s)" [2998, 3117]
  line "LTC (60.0+0.60s)" [3316, 3352]
  line "" [3375, 3393]
  line "VLTC (2m24s+1.12s)" [3375, 3393]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3393 | 45 | 120 | 50% | 3389 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3352 | 39 | 160 | 50% | 3351 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3117 | 45 | 132 | 50% | 3114 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 33 | 228 | 48% | 3389 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3316 | 40 | 160 | 51% | 3308 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 2998 | 38 | 188 | 54% | 2967 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |