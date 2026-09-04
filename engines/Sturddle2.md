# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2795<sub>(+98) | 3106<sub>(+82) | 3152<sub>(-12) |  |
| 2.5.0 | 2026-02-04 | 2697<sub>(+78) | 3024<sub>(+19) | 3164<sub>(+72) |  |
| 2.4.0 | 2025-12-06 | 2619 | 3005 | 3092 |  |
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

Generated: 2026-09-04 04:39:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2619, 2697, 2795]
  line "STC (8.0+0.08s)" [2619, 2697, 2795]
  line "LTC (60.0+0.60s)" [3005, 3024, 3106]
  line "" [3092, 3164, 3152]
  line "VLTC (2m24s+1.12s)" [3092, 3164, 3152]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3152 | 33 | 248 | 50% | 3155 | 58% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 31 | 296 | 51% | 3101 | 52% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2795 | 34 | 272 | 52% | 2777 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 23 | 514 | 52% | 3147 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3024 | 25 | 478 | 49% | 3035 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2697 | 23 | 626 | 50% | 2692 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 34 | 236 | 49% | 3097 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3005 | 37 | 224 | 51% | 2988 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2619 | 36 | 248 | 50% | 2616 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |