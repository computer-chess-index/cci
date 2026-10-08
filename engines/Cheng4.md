# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2975<sub>(-13) | 3247<sub>(+2) | 3309<sub>(+24) |  |
| 4.48 | 2026-07-12 | 2988 | 3245 | 3285 |  |
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

Generated: 2026-10-08 04:37:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2988, 2975]
  line "STC (8.0+0.08s)" [2988, 2975]
  line "LTC (60.0+0.60s)" [3245, 3247]
  line "" [3285, 3309]
  line "VLTC (2m24s+1.12s)" [3285, 3309]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3309 | 34 | 228 | 51% | 3303 | 64% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3247 | 32 | 264 | 50% | 3245 | 61% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2975 | 34 | 250 | 49% | 2985 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3285 | 25 | 432 | 53% | 3251 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3245 | 29 | 320 | 52% | 3209 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2988 | 29 | 370 | 54% | 2940 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |