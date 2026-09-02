# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3186<sub>(+289) | 3379<sub>(+186) | 3437<sub>(+209) |  |
| 3.0.0 | 2026-06-25 | 2897 | 3193 | 3228 |  |
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

Generated: 2026-09-02 04:33:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "" [2897, 3186]
  line "STC (8.0+0.08s)" [2897, 3186]
  line "LTC (60.0+0.60s)" [3193, 3379]
  line "" [3228, 3437]
  line "VLTC (2m24s+1.12s)" [3228, 3437]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 26 | 346 | 52% | 3421 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 31 | 252 | 51% | 3371 | 75% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3186 | 32 | 264 | 49% | 3193 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3228 | 32 | 262 | 53% | 3200 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 34 | 240 | 53% | 3156 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 31 | 320 | 51% | 2886 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |