# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3123<sub>(+54) | 3370<sub>(+98) | 3399<sub>(+48) |  |
| 1.0.1 | 2026-07-27 | 3069<sub>(0) | 3272<sub>(-23) | 3351<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3069 | 3295 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:40:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3400
  line "" [3069, 3069, 3123]
  line "STC (8.0+0.08s)" [3069, 3069, 3123]
  line "LTC (60.0+0.60s)" [3295, 3272, 3370]
  line "" [3347, 3351, 3399]
  line "VLTC (2m24s+1.12s)" [3347, 3351, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 39 | 164 | 51% | 3393 | 74% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 41 | 152 | 50% | 3368 | 70% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 47 | 128 | 49% | 3128 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3351 | 37 | 184 | 48% | 3362 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 37 | 184 | 49% | 3276 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3069 | 46 | 132 | 52% | 3056 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3347 | 40 | 160 | 55% | 3301 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3295 | 40 | 166 | 55% | 3244 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3069 | 49 | 120 | 55% | 3015 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |