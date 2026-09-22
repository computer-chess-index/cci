# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 906<sub>(-2056) | 2102<sub>(-1092) | 1216<sub>(-2042) |  |
| 2.1 | 2025-11-25 | 2962 | 3194 | 3258 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-22 04:41:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 900 --> 3300
  line "" [2962, 906]
  line "STC (8.0+0.08s)" [2962, 906]
  line "LTC (60.0+0.60s)" [3194, 2102]
  line "" [3258, 1216]
  line "VLTC (2m24s+1.12s)" [3258, 1216]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1216 | 21 | 1656 | 25% | 1683 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 23 | 924 | 43% | 2199 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 906 | 34 | 472 | 55% | 937 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 22 | 564 | 54% | 3229 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 25 | 438 | 52% | 3175 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2962 | 23 | 552 | 50% | 2943 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |