# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 875<sub>(-2083) | 2097<sub>(-1094) | 1203<sub>(-2051) |  |
| 2.1 | 2025-11-25 | 2958 | 3191 | 3254 |  |
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

Generated: 2026-09-06 04:37:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 800 --> 3300
  line "" [2958, 875]
  line "STC (8.0+0.08s)" [2958, 875]
  line "LTC (60.0+0.60s)" [3191, 2097]
  line "" [3254, 1203]
  line "VLTC (2m24s+1.12s)" [3254, 1203]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1203 | 22 | 1632 | 24% | 1692 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 23 | 916 | 43% | 2201 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 875 | 35 | 448 | 53% | 934 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 22 | 564 | 54% | 3227 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 25 | 438 | 52% | 3173 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2958 | 23 | 552 | 50% | 2939 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |