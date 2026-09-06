# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2866<sub>(+30) | 3098<sub>(+20) | 3167<sub>(+53) |  |
| 0.21.0 | 2025-10-13 | 2836 | 3078 | 3114 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:27:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "" [2836, 2866]
  line "STC (8.0+0.08s)" [2836, 2866]
  line "LTC (60.0+0.60s)" [3078, 3098]
  line "" [3114, 3167]
  line "VLTC (2m24s+1.12s)" [3114, 3167]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 35 | 228 | 51% | 3160 | 55% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3098 | 32 | 266 | 50% | 3097 | 55% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2866 | 34 | 268 | 49% | 2878 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 24 | 504 | 50% | 3116 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 23 | 542 | 50% | 3074 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2836 | 21 | 728 | 51% | 2827 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |