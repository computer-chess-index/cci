# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-08-31 | 3182<sub>(+63) | 3335<sub>(-17) | 3461<sub>(+68) |  |
| 6.0.0 | 2026-08-19 | 3119<sub>(+119) | 3352<sub>(+35) | 3393<sub>(+17) |  |
| 5.8.3 | 2026-07-25 | 3000<sub>(+new) | 3317<sub>(+new) | 3376<sub>(+new) |  |
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

Generated: 2026-09-01 19:07:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3000, 3119, 3182]
  line "STC (8.0+0.08s)" [3000, 3119, 3182]
  line "LTC (60.0+0.60s)" [3317, 3352, 3335]
  line "" [3376, 3393, 3461]
  line "VLTC (2m24s+1.12s)" [3376, 3393, 3461]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 73 | 44 | 55% | 3430 | 77% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3335 | 55 | 80 | 48% | 3353 | 78% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3182 | 51 | 104 | 47% | 3202 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3393 | 45 | 120 | 50% | 3390 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3352 | 39 | 160 | 50% | 3351 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3119 | 45 | 132 | 50% | 3116 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3376 | 33 | 228 | 48% | 3389 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3317 | 40 | 160 | 51% | 3309 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3000 | 38 | 188 | 54% | 2969 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |