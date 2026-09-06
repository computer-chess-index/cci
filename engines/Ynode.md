# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3133<sub>(-10) | 3345<sub>(+21) | 3397<sub>(+25) |  |
| 0219 | 2025-11-16 | 3143 | 3324 | 3372 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:40:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3400
  line "" [3143, 3133]
  line "STC (8.0+0.08s)" [3143, 3133]
  line "LTC (60.0+0.60s)" [3324, 3345]
  line "" [3372, 3397]
  line "VLTC (2m24s+1.12s)" [3372, 3397]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 26 | 362 | 50% | 3399 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 25 | 404 | 51% | 3337 | 75% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3133 | 23 | 500 | 50% | 3132 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 27 | 336 | 52% | 3348 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3324 | 25 | 406 | 49% | 3317 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3143 | 24 | 490 | 53% | 3097 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |