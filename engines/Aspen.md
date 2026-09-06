# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2704<sub>(+19) | 3082<sub>(+93) | 3113<sub>(+36) |  |
| 2.1.0 | 2026-05-21 | 2685<sub>(+new) | 2989<sub>(+new) | 3077<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2361<sub>(+169) | 2701<sub>(+52) | 2844<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2192<sub>(+new) | 2649<sub>(+new) | 2689<sub>(+new) |  |
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

Generated: 2026-09-06 06:22:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "" [2361, 2192, 2685, 2704]
  line "STC (8.0+0.08s)" [2361, 2192, 2685, 2704]
  line "LTC (60.0+0.60s)" [2701, 2649, 2989, 3082]
  line "" [2844, 2689, 3077, 3113]
  line "VLTC (2m24s+1.12s)" [2844, 2689, 3077, 3113]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 32 | 260 | 49% | 3121 | 57% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3082 | 33 | 254 | 50% | 3083 | 59% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2704 | 30 | 338 | 50% | 2703 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3077 | 31 | 318 | 52% | 3063 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 28 | 382 | 51% | 2981 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 32 | 304 | 54% | 2649 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2844 | 59 | 92 | 54% | 2805 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2701 | 48 | 140 | 53% | 2672 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 47 | 158 | 45% | 2411 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2689 | 111 | 28 | 55% | 2635 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 101 | 36 | 67% | 2493 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2192 | 84 | 48 | 50% | 2198 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |