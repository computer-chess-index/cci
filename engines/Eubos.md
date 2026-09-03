# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2321<sub>(+134) | 2642<sub>(+136) | 2708<sub>(+107) |  |
| 4.4 | 2026-05-06 | 2187<sub>(+86) | 2506<sub>(+53) | 2601<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2101<sub>(-58) | 2453<sub>(+32) | 2569<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2159 | 2421 | 2546 |  |
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

Generated: 2026-09-03 04:35:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2100 --> 2800
  line "" [2159, 2101, 2187, 2321]
  line "STC (8.0+0.08s)" [2159, 2101, 2187, 2321]
  line "LTC (60.0+0.60s)" [2421, 2453, 2506, 2642]
  line "" [2546, 2569, 2601, 2708]
  line "VLTC (2m24s+1.12s)" [2546, 2569, 2601, 2708]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 30 | 358 | 49% | 2714 | 36% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2642 | 29 | 396 | 49% | 2649 | 27% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2321 | 29 | 412 | 47% | 2356 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2601 | 32 | 320 | 48% | 2620 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2506 | 32 | 334 | 49% | 2508 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2187 | 32 | 344 | 50% | 2180 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2569 | 30 | 388 | 50% | 2558 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2453 | 31 | 368 | 49% | 2458 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2101 | 28 | 452 | 50% | 2087 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2546 | 36 | 266 | 52% | 2529 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2421 | 35 | 272 | 50% | 2417 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2159 | 34 | 310 | 52% | 2132 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |