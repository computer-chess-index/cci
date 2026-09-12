# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2981<sub>(-1) | 3241<sub>(+1) | 3294<sub>(+16) |  |
| 4.48 | 2026-07-12 | 2982 | 3240 | 3278 |  |
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

Generated: 2026-09-12 04:36:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2982, 2981]
  line "STC (8.0+0.08s)" [2982, 2981]
  line "LTC (60.0+0.60s)" [3240, 3241]
  line "" [3278, 3294]
  line "VLTC (2m24s+1.12s)" [3278, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 35 | 212 | 50% | 3298 | 65% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 36 | 208 | 51% | 3236 | 60% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2981 | 37 | 212 | 50% | 2979 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 25 | 432 | 53% | 3244 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3240 | 29 | 320 | 52% | 3204 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2982 | 29 | 370 | 54% | 2935 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |