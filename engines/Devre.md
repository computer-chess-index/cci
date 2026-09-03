# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3376<sub>(+186) | 3521<sub>(+119) | 3548<sub>(+111) |  |
| 6.0 | 2024-08-10 | 3190 | 3402 | 3437 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-03 04:34:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3190, 3376]
  line "STC (8.0+0.08s)" [3190, 3376]
  line "LTC (60.0+0.60s)" [3402, 3521]
  line "" [3437, 3548]
  line "VLTC (2m24s+1.12s)" [3437, 3548]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 30 | 258 | 51% | 3534 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 26 | 346 | 51% | 3501 | 81% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3376 | 26 | 378 | 54% | 3328 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 35 | 196 | 49% | 3447 | 77% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3402 | 33 | 238 | 51% | 3399 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3190 | 36 | 200 | 49% | 3202 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |