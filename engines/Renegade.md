# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3351<sub>(+4) | 3514<sub>(-3) | 3541<sub>(-1) |  |
| 1.3.0 | 2026-06-17 | 3347<sub>(+new) | 3517<sub>(+new) | 3542<sub>(+new) |  |
| 1.2.0 | 2025-05-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-12 04:41:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3347, 3351]
  line "STC (8.0+0.08s)" [3347, 3351]
  line "LTC (60.0+0.60s)" [3517, 3514]
  line "" [3542, 3541]
  line "VLTC (2m24s+1.12s)" [3542, 3541]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 34 | 198 | 49% | 3545 | 88% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 32 | 224 | 49% | 3524 | 86% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 26 | 368 | 51% | 3340 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 33 | 226 | 54% | 3503 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 31 | 260 | 53% | 3465 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3347 | 35 | 218 | 53% | 3290 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |