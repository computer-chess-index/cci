# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3287<sub>(+12) | 3456<sub>(+5) | 3480<sub>(-2) |  |
| 8.1.0 | 2024-10-28 | 3275<sub>(+26) | 3451<sub>(+19) | 3482<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3249 | 3432 | 3482 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:43:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3249, 3275, 3287]
  line "STC (8.0+0.08s)" [3249, 3275, 3287]
  line "LTC (60.0+0.60s)" [3432, 3451, 3456]
  line "" [3482, 3482, 3480]
  line "VLTC (2m24s+1.12s)" [3482, 3482, 3480]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 12 | 1708 | 50% | 3480 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3456 | 12 | 1772 | 51% | 3452 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3287 | 12 | 1832 | 49% | 3291 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 32 | 228 | 46% | 3509 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 38 | 172 | 51% | 3443 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3275 | 36 | 208 | 48% | 3290 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 33 | 228 | 49% | 3488 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 36 | 192 | 51% | 3424 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3249 | 29 | 308 | 50% | 3251 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |