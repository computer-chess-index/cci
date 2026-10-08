# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2407<sub>(+24) | 3013<sub>(+11) | 3177<sub>(-62) |  |
| 0.29.0 | 2022-12-13 | 2383 | 3002 | 3239 |  |
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

Generated: 2026-10-08 04:40:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2383, 2407]
  line "STC (8.0+0.08s)" [2383, 2407]
  line "LTC (60.0+0.60s)" [3002, 3013]
  line "" [3239, 3177]
  line "VLTC (2m24s+1.12s)" [3239, 3177]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 22 | 556 | 48% | 3191 | 53% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 3013 | 23 | 570 | 49% | 3023 | 46% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2407 | 21 | 814 | 49% | 2414 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3239 | 28 | 356 | 50% | 3237 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 30 | 328 | 48% | 3017 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2383 | 32 | 400 | 42% | 2496 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |