# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2795<sub>(+92) | 3108<sub>(+77) | 3155<sub>(-16) |  |
| 2.5.0 | 2026-02-04 | 2703<sub>(+79) | 3031<sub>(+19) | 3171<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2624 | 3012 | 3097 |  |
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

Generated: 2026-10-01 04:43:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "" [2624, 2703, 2795]
  line "STC (8.0+0.08s)" [2624, 2703, 2795]
  line "LTC (60.0+0.60s)" [3012, 3031, 3108]
  line "" [3097, 3171, 3155]
  line "VLTC (2m24s+1.12s)" [3097, 3171, 3155]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 31 | 292 | 49% | 3158 | 56% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3108 | 29 | 332 | 50% | 3109 | 52% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2795 | 32 | 308 | 50% | 2788 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 23 | 514 | 52% | 3154 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3031 | 25 | 478 | 49% | 3042 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2703 | 23 | 626 | 50% | 2697 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3097 | 34 | 236 | 49% | 3104 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3012 | 37 | 224 | 51% | 2994 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2624 | 36 | 248 | 50% | 2622 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |