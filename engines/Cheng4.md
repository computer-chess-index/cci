# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2979<sub>(-2) | 3236<sub>(-3) | 3293<sub>(+15) |  |
| 4.48 | 2026-07-12 | 2981 | 3239 | 3278 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2981, 2979]
  line "STC (8.0+0.08s)" [2981, 2979]
  line "LTC (60.0+0.60s)" [3239, 3236]
  line "" [3278, 3293]
  line "VLTC (2m24s+1.12s)" [3278, 3293]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 37 | 192 | 49% | 3297 | 65% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3236 | 38 | 188 | 51% | 3233 | 57% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2979 | 40 | 184 | 50% | 2979 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 25 | 432 | 53% | 3243 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 29 | 320 | 52% | 3202 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2981 | 29 | 370 | 54% | 2934 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |