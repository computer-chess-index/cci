# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2707<sub>(+22) | 3085<sub>(+95) | 3116<sub>(+38) |  |
| 2.1.0 | 2026-05-21 | 2685<sub>(+new) | 2990<sub>(+new) | 3078<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2361<sub>(+169) | 2701<sub>(+51) | 2846<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2192<sub>(+new) | 2650<sub>(+new) | 2691<sub>(+new) |  |
| 1.2.2 | 2026-05-19 |  |  |  |  |
| 1.2.1 | 2026-05-19 |  |  |  |  |
| 1.2.0 | 2026-05-19 |  |  |  |  |
| 1.0.1 | 2026-05-14 |  |  |  |  |
| 1.0.0 | 2026-05-12 |  |  |  |  |
| 0.2.0 | 2026-05-09 |  |  |  |  |
| 0.1.0 | 2026-05-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aspen+<version>&body=###%20Engine%20name%0AAspen%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-10 04:36:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "" [2361, 2192, 2685, 2707]
  line "STC (8.0+0.08s)" [2361, 2192, 2685, 2707]
  line "LTC (60.0+0.60s)" [2701, 2650, 2990, 3085]
  line "" [2846, 2691, 3078, 3116]
  line "VLTC (2m24s+1.12s)" [2846, 2691, 3078, 3116]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3116 | 32 | 264 | 49% | 3123 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3085 | 32 | 258 | 50% | 3085 | 59% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2707 | 30 | 346 | 50% | 2703 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 31 | 318 | 52% | 3065 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 28 | 382 | 51% | 2982 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 32 | 304 | 54% | 2649 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2846 | 59 | 92 | 54% | 2805 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2701 | 48 | 140 | 53% | 2673 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 47 | 158 | 45% | 2411 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2691 | 111 | 28 | 55% | 2637 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 101 | 36 | 67% | 2493 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2192 | 84 | 48 | 50% | 2198 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |