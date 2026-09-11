# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3136<sub>(-7) | 3348<sub>(+23) | 3399<sub>(+25) |  |
| 0219 | 2025-11-16 | 3143 | 3325 | 3374 |  |
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

Generated: 2026-09-11 04:43:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3400
  line "" [3143, 3136]
  line "STC (8.0+0.08s)" [3143, 3136]
  line "LTC (60.0+0.60s)" [3325, 3348]
  line "" [3374, 3399]
  line "VLTC (2m24s+1.12s)" [3374, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 25 | 378 | 50% | 3401 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3348 | 24 | 416 | 51% | 3339 | 74% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3136 | 23 | 508 | 50% | 3133 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 27 | 336 | 52% | 3349 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3325 | 25 | 406 | 49% | 3318 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3143 | 24 | 490 | 53% | 3098 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |