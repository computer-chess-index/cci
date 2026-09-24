# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3100<sub>(+25) | 3380<sub>(+101) | 3407<sub>(+51) |  |
| 1.0.1 | 2026-07-27 | 3075<sub>(+1) | 3279<sub>(-22) | 3356<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3074 | 3301 | 3352 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:43:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3074, 3075, 3100]
  line "STC (8.0+0.08s)" [3074, 3075, 3100]
  line "LTC (60.0+0.60s)" [3301, 3279, 3380]
  line "" [3352, 3356, 3407]
  line "VLTC (2m24s+1.12s)" [3352, 3356, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 38 | 172 | 51% | 3399 | 73% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 39 | 168 | 51% | 3375 | 69% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3100 | 35 | 220 | 48% | 3120 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3356 | 37 | 184 | 48% | 3367 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3279 | 37 | 184 | 49% | 3282 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3075 | 46 | 132 | 52% | 3063 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3352 | 40 | 160 | 55% | 3306 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3301 | 40 | 166 | 55% | 3251 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3074 | 49 | 120 | 55% | 3021 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |