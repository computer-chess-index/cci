# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3023<sub>(+134) | 3233<sub>(+86) | 3303<sub>(+87) |  |
| 5 | 2026-04-06 | 2889<sub>(+36) | 3147<sub>(+53) | 3216<sub>(+77) |  |
| 4 | 2025-12-05 | 2853 | 3094 | 3139 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A2to6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:37:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3400
  line "" [2853, 2889, 3023]
  line "STC (8.0+0.08s)" [2853, 2889, 3023]
  line "LTC (60.0+0.60s)" [3094, 3147, 3233]
  line "" [3139, 3216, 3303]
  line "VLTC (2m24s+1.12s)" [3139, 3216, 3303]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 26 | 392 | 52% | 3293 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 25 | 412 | 49% | 3243 | 61% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3023 | 25 | 476 | 48% | 3039 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 25 | 438 | 48% | 3237 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3147 | 28 | 358 | 50% | 3144 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2889 | 28 | 396 | 49% | 2901 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3139 | 26 | 428 | 50% | 3139 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3094 | 27 | 376 | 53% | 3067 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2853 | 25 | 482 | 53% | 2822 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |