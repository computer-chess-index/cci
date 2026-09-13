# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2793<sub>(+94) | 3108<sub>(+81) | 3151<sub>(-16) |  |
| 2.5.0 | 2026-02-04 | 2699<sub>(+77) | 3027<sub>(+19) | 3167<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2622 | 3008 | 3093 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:42:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2622, 2699, 2793]
  line "STC (8.0+0.08s)" [2622, 2699, 2793]
  line "LTC (60.0+0.60s)" [3008, 3027, 3108]
  line "" [3093, 3167, 3151]
  line "VLTC (2m24s+1.12s)" [3093, 3167, 3151]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3151 | 32 | 268 | 49% | 3156 | 57% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3108 | 30 | 312 | 50% | 3105 | 53% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2793 | 34 | 280 | 51% | 2780 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 23 | 514 | 52% | 3150 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3027 | 25 | 478 | 49% | 3038 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2699 | 23 | 626 | 50% | 2695 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3093 | 34 | 236 | 49% | 3100 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3008 | 37 | 224 | 51% | 2990 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2622 | 36 | 248 | 50% | 2618 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |