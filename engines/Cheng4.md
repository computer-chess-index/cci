# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2979<sub>(-9) | 3251<sub>(+7) | 3303<sub>(+20) |  |
| 4.48 | 2026-07-12 | 2988 | 3244 | 3283 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:36:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2988, 2979]
  line "STC (8.0+0.08s)" [2988, 2979]
  line "LTC (60.0+0.60s)" [3244, 3251]
  line "" [3283, 3303]
  line "VLTC (2m24s+1.12s)" [3283, 3303]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 34 | 224 | 50% | 3302 | 65% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3251 | 33 | 244 | 51% | 3244 | 60% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2979 | 35 | 238 | 49% | 2985 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 25 | 432 | 53% | 3249 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3244 | 29 | 320 | 52% | 3208 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2988 | 29 | 370 | 54% | 2939 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |