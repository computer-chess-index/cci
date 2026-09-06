# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2859<sub>(+29) | 3131<sub>(+80) | 3175<sub>(+44) |  |
| 3.1 | 2026-04-03 | 2830<sub>(+100) | 3051<sub>(+58) | 3131<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2730 | 2993 | 3069 |  |
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

Generated: 2026-09-06 04:40:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "" [2730, 2830, 2859]
  line "STC (8.0+0.08s)" [2730, 2830, 2859]
  line "LTC (60.0+0.60s)" [2993, 3051, 3131]
  line "" [3069, 3131, 3175]
  line "VLTC (2m24s+1.12s)" [3069, 3131, 3175]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3175 | 28 | 362 | 49% | 3183 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 27 | 388 | 51% | 3123 | 49% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2859 | 26 | 456 | 50% | 2862 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3131 | 29 | 352 | 50% | 3132 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3051 | 27 | 406 | 50% | 3048 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2830 | 28 | 384 | 50% | 2826 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3069 | 31 | 318 | 52% | 3051 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2993 | 29 | 344 | 52% | 2973 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2730 | 29 | 386 | 52% | 2699 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |