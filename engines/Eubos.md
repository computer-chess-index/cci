# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2329<sub>(+135) | 2650<sub>(+138) | 2718<sub>(+110) |  |
| 4.4 | 2026-05-06 | 2194<sub>(+87) | 2512<sub>(+52) | 2608<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2107<sub>(-58) | 2460<sub>(+33) | 2576<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2165 | 2427 | 2553 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eubos+<version>&body=###%20Engine%20name%0AEubos%0A%0A###%20Version%0A4.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:38:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2100 --> 2800
  line "" [2165, 2107, 2194, 2329]
  line "STC (8.0+0.08s)" [2165, 2107, 2194, 2329]
  line "LTC (60.0+0.60s)" [2427, 2460, 2512, 2650]
  line "" [2553, 2576, 2608, 2718]
  line "VLTC (2m24s+1.12s)" [2553, 2576, 2608, 2718]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2718 | 29 | 378 | 50% | 2719 | 35% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 29 | 408 | 50% | 2654 | 27% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2329 | 29 | 428 | 48% | 2360 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2608 | 32 | 320 | 48% | 2627 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2512 | 32 | 334 | 49% | 2515 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2194 | 32 | 344 | 50% | 2188 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2576 | 30 | 388 | 50% | 2565 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2460 | 31 | 368 | 49% | 2465 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2107 | 28 | 452 | 50% | 2093 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2553 | 36 | 266 | 52% | 2535 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2427 | 35 | 272 | 50% | 2423 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2165 | 34 | 310 | 52% | 2138 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |