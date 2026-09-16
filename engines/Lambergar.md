# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3054<sub>(+139) | 3279<sub>(+65) | 3362<sub>(+71) |  |
| 1.3 | 2025-09-19 | 2915 | 3214 | 3291 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:39:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2915, 3054]
  line "STC (8.0+0.08s)" [2915, 3054]
  line "LTC (60.0+0.60s)" [3214, 3279]
  line "" [3291, 3362]
  line "VLTC (2m24s+1.12s)" [3291, 3362]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3362 | 29 | 298 | 50% | 3359 | 72% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3279 | 26 | 404 | 53% | 3256 | 61% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3054 | 27 | 380 | 50% | 3052 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 24 | 462 | 52% | 3278 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3214 | 26 | 398 | 51% | 3205 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2915 | 22 | 640 | 53% | 2873 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |