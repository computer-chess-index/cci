# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2795<sub>(+95) | 3106<sub>(+78) | 3154<sub>(-14) |  |
| 2.5.0 | 2026-02-04 | 2700<sub>(+77) | 3028<sub>(+19) | 3168<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2623 | 3009 | 3094 |  |
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

Generated: 2026-09-16 04:42:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2623, 2700, 2795]
  line "STC (8.0+0.08s)" [2623, 2700, 2795]
  line "LTC (60.0+0.60s)" [3009, 3028, 3106]
  line "" [3094, 3168, 3154]
  line "VLTC (2m24s+1.12s)" [3094, 3168, 3154]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 31 | 276 | 49% | 3156 | 57% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 30 | 320 | 50% | 3105 | 52% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2795 | 33 | 292 | 51% | 2785 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 23 | 514 | 52% | 3151 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3028 | 25 | 478 | 49% | 3039 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2700 | 23 | 626 | 50% | 2696 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3094 | 34 | 236 | 49% | 3101 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3009 | 37 | 224 | 51% | 2992 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2623 | 36 | 248 | 50% | 2619 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |