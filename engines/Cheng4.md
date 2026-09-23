# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2978<sub>(-7) | 3248<sub>(+7) | 3301<sub>(+20) |  |
| 4.48 | 2026-07-12 | 2985 | 3241 | 3281 |  |
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

Generated: 2026-09-23 04:36:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2985, 2978]
  line "STC (8.0+0.08s)" [2985, 2978]
  line "LTC (60.0+0.60s)" [3241, 3248]
  line "" [3281, 3301]
  line "VLTC (2m24s+1.12s)" [3281, 3301]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3301 | 34 | 224 | 50% | 3299 | 65% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3248 | 33 | 244 | 51% | 3241 | 60% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2978 | 36 | 230 | 50% | 2982 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 25 | 432 | 53% | 3247 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 29 | 320 | 52% | 3205 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2985 | 29 | 370 | 54% | 2936 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |