# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2404<sub>(+24) | 3011<sub>(+11) | 3175<sub>(-60) |  |
| 0.29.0 | 2022-12-13 | 2380 | 3000 | 3235 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:39:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2380, 2404]
  line "STC (8.0+0.08s)" [2380, 2404]
  line "LTC (60.0+0.60s)" [3000, 3011]
  line "" [3235, 3175]
  line "VLTC (2m24s+1.12s)" [3235, 3175]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3175 | 23 | 548 | 48% | 3187 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 3011 | 23 | 554 | 49% | 3019 | 45% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2404 | 21 | 790 | 49% | 2411 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 28 | 356 | 50% | 3233 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 3000 | 30 | 328 | 48% | 3013 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2380 | 32 | 400 | 42% | 2493 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |