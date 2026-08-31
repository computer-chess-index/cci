# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2859<sub>(+31) | 3129<sub>(+79) | 3174<sub>(+45) |  |
| 3.1 | 2026-04-03 | 2828<sub>(+101) | 3050<sub>(+58) | 3129<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2727 | 2992 | 3067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:40:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "" [2727, 2828, 2859]
  line "STC (8.0+0.08s)" [2727, 2828, 2859]
  line "LTC (60.0+0.60s)" [2992, 3050, 3129]
  line "" [3067, 3129, 3174]
  line "VLTC (2m24s+1.12s)" [3067, 3129, 3174]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 28 | 354 | 49% | 3183 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 28 | 368 | 51% | 3123 | 48% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2859 | 26 | 448 | 50% | 2861 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 29 | 352 | 50% | 3132 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3050 | 27 | 406 | 50% | 3047 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2828 | 28 | 384 | 50% | 2824 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 31 | 318 | 52% | 3050 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 29 | 344 | 52% | 2971 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2727 | 29 | 386 | 52% | 2696 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |