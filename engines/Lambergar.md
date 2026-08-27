# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3039<sub>(+130) | 3274<sub>(+64) | 3362<sub>(+76) |  |
| 1.3 | 2025-09-19 | 2909 | 3210 | 3286 |  |
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

Generated: 2026-08-27 07:35:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2909, 3039]
  line "STC (8.0+0.08s)" [2909, 3039]
  line "LTC (60.0+0.60s)" [3210, 3274]
  line "" [3286, 3362]
  line "VLTC (2m24s+1.12s)" [3286, 3362]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3362 | 30 | 270 | 51% | 3352 | 72% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3274 | 26 | 388 | 53% | 3249 | 61% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3039 | 30 | 320 | 50% | 3042 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3286 | 24 | 462 | 52% | 3272 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 26 | 398 | 51% | 3201 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2909 | 22 | 640 | 53% | 2867 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |