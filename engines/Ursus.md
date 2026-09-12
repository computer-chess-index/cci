# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3113<sub>(+43) | 3375<sub>(+101) | 3402<sub>(+51) |  |
| 1.0.1 | 2026-07-27 | 3070<sub>(+1) | 3274<sub>(-23) | 3351<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3069 | 3297 | 3347 |  |
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

Generated: 2026-09-12 04:42:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3069, 3070, 3113]
  line "STC (8.0+0.08s)" [3069, 3070, 3113]
  line "LTC (60.0+0.60s)" [3297, 3274, 3375]
  line "" [3347, 3351, 3402]
  line "VLTC (2m24s+1.12s)" [3347, 3351, 3402]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 38 | 172 | 51% | 3394 | 73% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 39 | 168 | 51% | 3370 | 69% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3113 | 40 | 168 | 49% | 3125 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3351 | 37 | 184 | 48% | 3362 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3274 | 37 | 184 | 49% | 3278 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3070 | 46 | 132 | 52% | 3058 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3347 | 40 | 160 | 55% | 3301 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3297 | 40 | 166 | 55% | 3245 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3069 | 49 | 120 | 55% | 3016 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |