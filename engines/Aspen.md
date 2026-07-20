# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2674<sub>(+1) | 3077<sub>(+102) | 3112<sub>(+50) |  |
| 2.1.0 | 2026-05-21 | 2673<sub>(+new) | 2975<sub>(+new) | 3062<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2349<sub>(+171) | 2688<sub>(+51) | 2831<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2178<sub>(+new) | 2637<sub>(+new) | 2676<sub>(+new) |  |
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

Generated: 2026-07-20 06:22:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "STC (8.0+0.08s)" [2349, 2178, 2673, 2674]
  line "STC (8.0+0.08s)" [2349, 2178, 2673, 2674]
  line "LTC (60.0+0.60s)" [2688, 2637, 2975, 3077]
  line "VLTC (2m24s+1.12s)" [2831, 2676, 3062, 3112]
  line "VLTC (2m24s+1.12s)" [2831, 2676, 3062, 3112]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 43 | 150 | 49% | 3117 | 55% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 39 | 176 | 51% | 3069 | 61% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2674 | 42 | 174 | 49% | 2691 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3062 | 31 | 318 | 52% | 3050 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2975 | 28 | 382 | 51% | 2967 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2673 | 32 | 304 | 54% | 2637 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 59 | 92 | 54% | 2792 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2688 | 48 | 140 | 53% | 2660 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2349 | 47 | 158 | 45% | 2399 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2676 | 111 | 28 | 55% | 2622 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2637 | 101 | 36 | 67% | 2480 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2178 | 84 | 48 | 50% | 2183 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |