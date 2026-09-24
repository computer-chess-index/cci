# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3356<sub>(+4) | 3521<sub>(-1) | 3546<sub>(-2) |  |
| 1.3.0 | 2026-06-17 | 3352<sub>(+new) | 3522<sub>(+new) | 3548<sub>(+new) |  |
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

Generated: 2026-09-24 04:41:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3352, 3356]
  line "STC (8.0+0.08s)" [3352, 3356]
  line "LTC (60.0+0.60s)" [3522, 3521]
  line "" [3548, 3546]
  line "VLTC (2m24s+1.12s)" [3548, 3546]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 34 | 202 | 50% | 3551 | 88% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 31 | 240 | 49% | 3528 | 86% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3356 | 26 | 380 | 52% | 3344 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 33 | 226 | 54% | 3509 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 31 | 260 | 53% | 3471 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 35 | 218 | 53% | 3294 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |