# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2700<sub>(+20) | 3078<sub>(+93) | 3106<sub>(+35) |  |
| 2.1.0 | 2026-05-21 | 2680<sub>(+new) | 2985<sub>(+new) | 3071<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2357<sub>(+169) | 2696<sub>(+51) | 2839<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2188<sub>(+new) | 2645<sub>(+new) | 2684<sub>(+new) |  |
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

Generated: 2026-08-22 06:22:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "STC (8.0+0.08s)" [2357, 2188, 2680, 2700]
  line "STC (8.0+0.08s)" [2357, 2188, 2680, 2700]
  line "LTC (60.0+0.60s)" [2696, 2645, 2985, 3078]
  line "VLTC (2m24s+1.12s)" [2839, 2684, 3071, 3106]
  line "VLTC (2m24s+1.12s)" [2839, 2684, 3071, 3106]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3106 | 34 | 232 | 48% | 3120 | 55% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 34 | 228 | 50% | 3079 | 59% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2700 | 32 | 298 | 51% | 2697 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3071 | 31 | 318 | 52% | 3059 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2985 | 28 | 382 | 51% | 2977 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2680 | 32 | 304 | 54% | 2643 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2839 | 59 | 92 | 54% | 2800 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2696 | 48 | 140 | 53% | 2668 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2357 | 47 | 158 | 45% | 2406 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2684 | 111 | 28 | 55% | 2631 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2645 | 101 | 36 | 67% | 2488 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2188 | 84 | 48 | 50% | 2192 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |