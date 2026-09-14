# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3467<sub>(+93) | 3586<sub>(+61) | 3572<sub>(+26) |  |
| 7.0 | 2025-02-14 | 3374 | 3525 | 3546 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Integral+<version>&body=###%20Engine%20name%0AIntegral%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:38:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3374, 3467]
  line "STC (8.0+0.08s)" [3374, 3467]
  line "LTC (60.0+0.60s)" [3525, 3586]
  line "" [3546, 3572]
  line "VLTC (2m24s+1.12s)" [3546, 3572]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 35 | 180 | 51% | 3567 | 96% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3586 | 41 | 136 | 51% | 3575 | 90% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3467 | 30 | 268 | 52% | 3451 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 15 | 1010 | 50% | 3546 | 87% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 15 | 1012 | 50% | 3525 | 85% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 15 | 1158 | 50% | 3372 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |