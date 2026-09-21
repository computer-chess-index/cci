# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3285<sub>(+13) | 3453<sub>(+5) | 3478<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3272<sub>(+25) | 3448<sub>(+19) | 3479<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3247 | 3429 | 3479 |  |
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

Generated: 2026-09-21 04:43:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3247, 3272, 3285]
  line "STC (8.0+0.08s)" [3247, 3272, 3285]
  line "LTC (60.0+0.60s)" [3429, 3448, 3453]
  line "" [3479, 3479, 3478]
  line "VLTC (2m24s+1.12s)" [3479, 3479, 3478]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 12 | 1708 | 50% | 3478 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 12 | 1772 | 51% | 3449 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3285 | 12 | 1832 | 49% | 3289 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 32 | 228 | 46% | 3506 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 38 | 172 | 51% | 3440 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3272 | 36 | 208 | 48% | 3287 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 33 | 228 | 49% | 3486 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 36 | 192 | 51% | 3421 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3247 | 29 | 308 | 50% | 3248 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |