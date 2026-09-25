# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2715<sub>(+26) | 3085<sub>(+89) | 3119<sub>(+37) |  |
| 2.1.0 | 2026-05-21 | 2689<sub>(+new) | 2996<sub>(+new) | 3082<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2365<sub>(+169) | 2705<sub>(+51) | 2850<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2196<sub>(+new) | 2654<sub>(+new) | 2695<sub>(+new) |  |
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

Generated: 2026-09-25 04:36:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "" [2365, 2196, 2689, 2715]
  line "STC (8.0+0.08s)" [2365, 2196, 2689, 2715]
  line "LTC (60.0+0.60s)" [2705, 2654, 2996, 3085]
  line "" [2850, 2695, 3082, 3119]
  line "VLTC (2m24s+1.12s)" [2850, 2695, 3082, 3119]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 32 | 274 | 49% | 3127 | 57% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3085 | 31 | 278 | 49% | 3089 | 59% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2715 | 29 | 370 | 51% | 2708 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3082 | 31 | 318 | 52% | 3069 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2996 | 28 | 382 | 51% | 2988 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2689 | 32 | 304 | 54% | 2653 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2850 | 59 | 92 | 54% | 2809 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2705 | 48 | 140 | 53% | 2677 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2365 | 47 | 158 | 45% | 2415 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2695 | 111 | 28 | 55% | 2642 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2654 | 101 | 36 | 67% | 2498 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2196 | 84 | 48 | 50% | 2202 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |