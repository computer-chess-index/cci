# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2993<sub>(+359) | 3233<sub>(+183) | 3313<sub>(+178) |  |
| 2.0 | 2026-08-28 | 2634 | 3050 | 3135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ceylondemon+<version>&body=###%20Engine%20name%0ACeylondemon%0A%0A###%20Version%0A3.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:36:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3400
  line "" [2634, 2993]
  line "STC (8.0+0.08s)" [2634, 2993]
  line "LTC (60.0+0.60s)" [3050, 3233]
  line "" [3135, 3313]
  line "VLTC (2m24s+1.12s)" [3135, 3313]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3313 | 51 | 108 | 56% | 3259 | 56% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 45 | 136 | 53% | 3208 | 54% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2993 | 51 | 120 | 57% | 2931 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3135 | 29 | 360 | 54% | 3093 | 49% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3050 | 31 | 312 | 52% | 3023 | 48% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2634 | 31 | 348 | 48% | 2649 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |