# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.7.0 | 2026-05-24 |  |  |  |  |
| 14 | 2026-05-24 | 3433<sub>(+1839) | 3546<sub>(+17) | 3575<sub>(+22) |  |
| 13 | 2024-03-31 | 1594 | 3529 | 3553 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A4.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3600
  line "" [1594, 3433]
  line "STC (8.0+0.08s)" [1594, 3433]
  line "LTC (60.0+0.60s)" [3529, 3546]
  line "" [3553, 3575]
  line "VLTC (2m24s+1.12s)" [3553, 3575]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 30 | 252 | 50% | 3572 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 31 | 236 | 50% | 3545 | 90% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3433 | 25 | 410 | 53% | 3360 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 13 | 1458 | 53% | 3479 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 12 | 1740 | 51% | 3525 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1594 | 15 | 1932 | 53% | 1554 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |