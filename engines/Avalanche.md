# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3193<sub>(+289) | 3394<sub>(+196) | 3445<sub>(+210) |  |
| 3.0.0 | 2026-06-25 | 2904 | 3198 | 3235 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:36:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "" [2904, 3193]
  line "STC (8.0+0.08s)" [2904, 3193]
  line "LTC (60.0+0.60s)" [3198, 3394]
  line "" [3235, 3445]
  line "VLTC (2m24s+1.12s)" [3235, 3445]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3445 | 26 | 366 | 52% | 3429 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 29 | 296 | 52% | 3382 | 76% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3193 | 30 | 300 | 49% | 3200 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 32 | 262 | 53% | 3205 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3198 | 34 | 240 | 53% | 3163 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2904 | 31 | 320 | 51% | 2893 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |